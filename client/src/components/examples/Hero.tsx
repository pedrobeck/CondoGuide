import { useState } from "react";
import { Hero as HeroComponent } from "../Hero";

export default function Hero() {
  const [search, setSearch] = useState("");

  return (
    <HeroComponent 
      searchValue={search}
      onSearchChange={setSearch}
    />
  );
}
