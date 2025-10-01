import { SearchBar } from "./SearchBar";

interface HeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export function Hero({ searchValue, onSearchChange }: HeroProps) {
  return (
    <div className="relative bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-hero-title">
          Central de Ajuda
        </h1>
        <p className="text-lg md:text-xl mb-8 text-primary-foreground/90" data-testid="text-hero-subtitle">
          Encontre respostas rápidas para suas dúvidas
        </p>
        <div className="flex justify-center">
          <SearchBar 
            value={searchValue} 
            onChange={onSearchChange}
            placeholder="Digite sua dúvida..."
          />
        </div>
      </div>
    </div>
  );
}
