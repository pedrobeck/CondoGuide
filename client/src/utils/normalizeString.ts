/**
 * Remove acentos e caracteres especiais de uma string para facilitar buscas
 * @param str - String a ser normalizada
 * @returns String normalizada sem acentos
 */
export function normalizeString(str: string): string {
  return str
    .normalize("NFD") // Decompose os caracteres Unicode
    .replace(/[\u0300-\u036f]/g, "") // Remove os diacríticos (acentos, til, etc)
    .toLowerCase();
}

/**
 * Verifica se uma string contém outra, ignorando acentos e caso
 * @param text - Texto onde buscar
 * @param search - Termo de busca
 * @returns true se o termo for encontrado
 */
export function searchNormalized(text: string, search: string): boolean {
  if (!search) return true;

  const normalizedText = normalizeString(text);
  const normalizedSearch = normalizeString(search);

  return normalizedText.includes(normalizedSearch);
}