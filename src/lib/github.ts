export const REPO = "GaleMC/Gale";

export function authHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "GaleMC-Website",
  };
  const token = import.meta.env.GITHUB_TOKEN || process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `token ${token}`;
  return headers;
}
