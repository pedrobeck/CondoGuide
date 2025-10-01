import { useState } from "react";
import { SearchBar as SearchBarComponent } from "../SearchBar";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <SearchBarComponent 
      value={search} 
      onChange={setSearch}
      placeholder="Buscar dúvidas..."
    />
  );
}
