import urlStore from "../data/store";

// Retrieve the original URL for a given short code
// Note: This service does NOT validate the code or check existence.
// Validation and error handling are performed in the controller.
export function getOriginalUrl(code: string): string | undefined {
  return urlStore.get(code);
}
