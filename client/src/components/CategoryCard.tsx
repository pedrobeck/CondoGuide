import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick: () => void;
}

export function CategoryCard({ icon: Icon, title, description, onClick }: CategoryCardProps) {
  return (
    <Card
      className="p-6 cursor-pointer hover-elevate active-elevate-2 transition-all"
      onClick={onClick}
      data-testid={`card-category-${title.toLowerCase().replace(/\s/g, '-')}`}
    >
      <div className="flex flex-col gap-3">
        <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-base mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
}
