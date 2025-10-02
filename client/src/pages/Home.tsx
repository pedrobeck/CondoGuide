import { useState } from "react";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleDetail } from "@/components/ArticleDetail";
import { Calendar, Wrench, FileText, Users, DollarSign, Phone } from "lucide-react";
import { searchNormalized } from "@/utils/normalizeString";

//todo: remove mock functionality
const CATEGORIES = [
  { id: "reservas", name: "Reservas", icon: Calendar, description: "Saiba como reservar áreas comuns" },
  { id: "manutencao", name: "Manutenção", icon: Wrench, description: "Solicite reparos e manutenção" },
  { id: "regras", name: "Regras", icon: FileText, description: "Confira as normas do condomínio" },
  { id: "areas-comuns", name: "Áreas Comuns", icon: Users, description: "Informações sobre espaços compartilhados" },
  { id: "pagamentos", name: "Pagamentos", icon: DollarSign, description: "Tire dúvidas sobre taxas e boletos" },
  { id: "contatos", name: "Contatos", icon: Phone, description: "Números importantes e emergências" },
];

//todo: remove mock functionality
const ARTICLES = [
  {
    id: "1",
    title: "Como reservar o salão de festas",
    category: "Reservas",
    excerpt: "Aprenda o passo a passo para reservar o salão de festas através do aplicativo Inah, incluindo taxa e documentação necessária.",
    content: "Para reservar o salão de festas do condomínio, você precisará utilizar o aplicativo Inah. O processo é simples e pode ser feito diretamente do seu celular. É necessário pagar uma taxa de R$ 50,00 e assinar o contrato de responsabilidade.",
    steps: [
      "Baixe o aplicativo Inah na loja de aplicativos do seu celular",
      "Faça login com seus dados de condômino",
      "Acesse a seção 'Reservas' no menu principal",
      "Selecione 'Salão de Festas' e escolha a data desejada",
      "Realize o pagamento da taxa de R$ 50,00",
      "Assine digitalmente o contrato de responsabilidade",
      "Aguarde a confirmação da reserva por e-mail",
    ],
    relatedIds: ["2", "3"],
  },
  {
    id: "2",
    title: "Regras de uso do salão de festas",
    category: "Regras",
    excerpt: "Conheça as normas e horários permitidos para uso do salão de festas.",
    content: "O salão de festas possui regras específicas para garantir o bom uso por todos os condôminos.",
    steps: [
      "Horário permitido: das 10h às 23h",
      "Máximo de 50 pessoas",
      "Proibido som alto após 22h",
      "Limpeza obrigatória após o uso",
      "Não é permitido fumar nas dependências",
    ],
    relatedIds: ["1"],
  },
  {
    id: "3",
    title: "Como cancelar uma reserva",
    category: "Reservas",
    excerpt: "Saiba como proceder para cancelar uma reserva já feita.",
    content: "Caso precise cancelar sua reserva, siga os passos abaixo. Lembre-se que cancelamentos com menos de 48h de antecedência não terão reembolso da taxa.",
    steps: [
      "Acesse o aplicativo Inah",
      "Vá em 'Minhas Reservas'",
      "Selecione a reserva que deseja cancelar",
      "Clique em 'Cancelar Reserva'",
      "Confirme o cancelamento",
      "Se cancelado com mais de 48h de antecedência, a taxa será reembolsada em até 5 dias úteis",
    ],
    relatedIds: ["1"],
  },
  {
    id: "4",
    title: "Como solicitar manutenção",
    category: "Manutenção",
    excerpt: "Procedimento para solicitar reparos em áreas comuns ou problemas estruturais.",
    content: "Para solicitar manutenção, entre em contato com a administração através dos canais oficiais.",
    steps: [
      "Entre em contato pelo telefone (11) 9999-9999",
      "Ou envie um e-mail para manutencao@condominio.com.br",
      "Descreva o problema com detalhes",
      "Informe a localização exata",
      "Aguarde o retorno em até 24h úteis",
    ],
    relatedIds: [],
  },
  {
    id: "5",
    title: "Horários de funcionamento da portaria",
    category: "Contatos",
    excerpt: "Confira os horários e formas de contato com a portaria.",
    content: "A portaria funciona 24 horas por dia. Para contato urgente, utilize o ramal 100 ou o telefone (11) 8888-8888.",
    steps: [],
    relatedIds: [],
  },
  {
    id: "6",
    title: "Como pagar o boleto do condomínio",
    category: "Pagamentos",
    excerpt: "Veja as opções disponíveis para pagamento da taxa condominial.",
    content: "O boleto do condomínio pode ser pago de diversas formas para sua comodidade.",
    steps: [
      "Acesse o aplicativo Inah",
      "Vá em 'Financeiro'",
      "Selecione 'Boletos'",
      "Escolha o boleto do mês desejado",
      "Pague via PIX, débito automático ou código de barras",
    ],
    relatedIds: [],
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesSearch = searchValue === "" ||
      searchNormalized(article.title, searchValue) ||
      searchNormalized(article.excerpt, searchValue) ||
      searchNormalized(article.content, searchValue);

    const matchesCategory = !selectedCategory || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const selectedArticleData = selectedArticle 
    ? ARTICLES.find(a => a.id === selectedArticle)
    : null;

  if (selectedArticleData) {
    return (
      <ArticleDetail
        title={selectedArticleData.title}
        category={selectedArticleData.category}
        content={selectedArticleData.content}
        steps={selectedArticleData.steps}
        relatedArticles={selectedArticleData.relatedIds.map(id => {
          const related = ARTICLES.find(a => a.id === id);
          return {
            title: related?.title || "",
            onClick: () => setSelectedArticle(id),
          };
        })}
        onBack={() => setSelectedArticle(null)}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero searchValue={searchValue} onSearchChange={setSearchValue} />
      
      <div className="max-w-6xl mx-auto px-4 py-12">
        {searchValue === "" && !selectedCategory && (
          <>
            <h2 className="text-2xl font-bold mb-6" data-testid="text-categories-title">
              Categorias
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {CATEGORIES.map((category) => (
                <CategoryCard
                  key={category.id}
                  icon={category.icon}
                  title={category.name}
                  description={category.description}
                  onClick={() => setSelectedCategory(category.name)}
                />
              ))}
            </div>
          </>
        )}

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" data-testid="text-articles-title">
            {selectedCategory ? selectedCategory : searchValue ? "Resultados da busca" : "Dúvidas frequentes"}
          </h2>
          {(selectedCategory || searchValue) && (
            <button
              onClick={() => {
                setSelectedCategory(null);
                setSearchValue("");
              }}
              className="text-sm text-primary hover-elevate px-3 py-1 rounded-md"
              data-testid="button-clear-filters"
            >
              Limpar filtros
            </button>
          )}
        </div>

        <div className="grid gap-4">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                category={article.category}
                excerpt={article.excerpt}
                onClick={() => setSelectedArticle(article.id)}
              />
            ))
          ) : (
            <div className="text-center py-12" data-testid="text-no-results">
              <p className="text-muted-foreground">
                Nenhum resultado encontrado. Tente buscar com outras palavras.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
