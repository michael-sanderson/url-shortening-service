// src/services/redirectService.ts
import urlStore from "../data/store";

export function getOriginalUrl(code: string): string | undefined {
  return urlStore.get(code);
}
