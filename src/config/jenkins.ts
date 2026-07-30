export const projects = {
  gale: {
    slug: "gale",
    repo: "GaleMC/Gale",
  },
} as const;

export type ProjectSlug = keyof typeof projects;

export interface Project {
  slug: string;
  repo: string;
}

export function getProjectConfig(project: string | undefined | null) {
  if (!project) return null;
  return projects[project.toLowerCase() as ProjectSlug] ?? null;
}

export function extractProjectFromUrl(url: URL) {
  return getProjectConfig(url.searchParams.get("project"));
}
