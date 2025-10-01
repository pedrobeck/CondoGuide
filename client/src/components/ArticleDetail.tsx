import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";

interface ArticleDetailProps {
  title: string;
  category: string;
  content: string;
  steps?: string[];
  relatedArticles?: { title: string; onClick: () => void }[];
  onBack: () => void;
}

export function ArticleDetail({
  title,
  category,
  content,
  steps,
  relatedArticles,
  onBack,
}: ArticleDetailProps) {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-6"
        data-testid="button-back"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Voltar
      </Button>

      <div className="mb-6">
        <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${category}`}>
          {category}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-article-title">
          {title}
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-article-content">
          {content}
        </p>
      </div>

      {steps && steps.length > 0 && (
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Passo a passo:</h2>
          <ol className="space-y-3">
            {steps.map((step, index) => (
              <li key={index} className="flex gap-3" data-testid={`text-step-${index}`}>
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </span>
                <span className="flex-1 text-base">{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      )}

      <Card className="p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3">Esta informação foi útil?</h3>
        <div className="flex gap-3">
          <Button
            variant={feedback === "helpful" ? "default" : "outline"}
            onClick={() => {
              setFeedback("helpful");
              console.log("Helpful feedback");
            }}
            data-testid="button-helpful"
          >
            <ThumbsUp className="h-4 w-4 mr-2" />
            Sim
          </Button>
          <Button
            variant={feedback === "not-helpful" ? "default" : "outline"}
            onClick={() => {
              setFeedback("not-helpful");
              console.log("Not helpful feedback");
            }}
            data-testid="button-not-helpful"
          >
            <ThumbsDown className="h-4 w-4 mr-2" />
            Não
          </Button>
        </div>
        {feedback && (
          <p className="mt-3 text-sm text-muted-foreground" data-testid="text-feedback-thanks">
            Obrigado pelo seu feedback!
          </p>
        )}
      </Card>

      {relatedArticles && relatedArticles.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Artigos relacionados</h3>
          <div className="grid gap-3">
            {relatedArticles.map((article, index) => (
              <Card
                key={index}
                className="p-4 cursor-pointer hover-elevate active-elevate-2"
                onClick={article.onClick}
                data-testid={`card-related-${index}`}
              >
                <p className="text-base font-medium">{article.title}</p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
