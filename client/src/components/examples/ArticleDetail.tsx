import { ArticleDetail as ArticleDetailComponent } from "../ArticleDetail";

export default function ArticleDetail() {
  return (
    <ArticleDetailComponent
      title="Como reservar o salão de festas"
      category="Reservas"
      content="Para reservar o salão de festas do condomínio, você precisará utilizar o aplicativo Inah. O processo é simples e pode ser feito diretamente do seu celular. É necessário pagar uma taxa de R$ 50,00 e assinar o contrato de responsabilidade."
      steps={[
        "Baixe o aplicativo Inah na loja de aplicativos do seu celular",
        "Faça login com seus dados de condômino",
        "Acesse a seção 'Reservas' no menu principal",
        "Selecione 'Salão de Festas' e escolha a data desejada",
        "Realize o pagamento da taxa de R$ 50,00",
        "Assine digitalmente o contrato de responsabilidade",
        "Aguarde a confirmação da reserva por e-mail",
      ]}
      relatedArticles={[
        { title: "Regras de uso do salão de festas", onClick: () => console.log("Related clicked") },
        { title: "Como cancelar uma reserva", onClick: () => console.log("Related clicked") },
      ]}
      onBack={() => console.log("Back clicked")}
    />
  );
}
