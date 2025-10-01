import { ArticleCard as ArticleCardComponent } from "../ArticleCard";

export default function ArticleCard() {
  return (
    <ArticleCardComponent
      title="Como reservar o salão de festas"
      category="Reservas"
      excerpt="Aprenda o passo a passo para reservar o salão de festas através do aplicativo Inah, incluindo taxa e documentação necessária."
      onClick={() => console.log("Article clicked")}
    />
  );
}
