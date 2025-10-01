import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  category: string;
  excerpt: string;
  onClick: () => void;
}

export function ArticleCard({ title, category, excerpt, onClick }: ArticleCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
      onClick={onClick}
      data-testid={`card-article-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <Badge variant="secondary" className="mb-2" data-testid={`badge-category-${category}`}>
              {category}
            </Badge>
            <h3 className="font-semibold text-base mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        </div>
      </div>
    </Card>
  );
}
