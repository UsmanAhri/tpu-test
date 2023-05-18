
import type { Character } from "@/store";

export interface CharactersType {
  isLoading: boolean;
  characters: null | Character[];
  field: null | string;
  fetch: () => void;
}