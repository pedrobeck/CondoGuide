import { CategoryCard as CategoryCardComponent } from "../CategoryCard";
import { Calendar } from "lucide-react";

export default function CategoryCard() {
  return (
    <CategoryCardComponent
      icon={Calendar}
      title="Reservas"
      description="Saiba como reservar áreas comuns"
      onClick={() => console.log("Category clicked")}
    />
  );
}
