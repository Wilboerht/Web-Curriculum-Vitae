import type { LocaleCode } from "../locales";
import type { Project, ProjectUi } from "./types";

import { projects as zhCNProjects, ui as zhCNUi } from "./zh-CN";
import { projects as zhTWProjects, ui as zhTWUi } from "./zh-TW";
import { projects as zhHKProjects, ui as zhHKUi } from "./zh-HK";
import { projects as enProjects, ui as enUi } from "./en";
import { projects as deProjects, ui as deUi } from "./de";
import { projects as koProjects, ui as koUi } from "./ko";
import { projects as jaProjects, ui as jaUi } from "./ja";

export type { Project, ProjectDetail, ProjectLink, ProjectUi } from "./types";

export interface LocaleProjects {
  projects: Project[];
  ui: ProjectUi;
}

export const PROJECT_DATA: Record<LocaleCode, LocaleProjects> = {
  "zh-CN": { projects: zhCNProjects, ui: zhCNUi },
  "zh-TW": { projects: zhTWProjects, ui: zhTWUi },
  "zh-HK": { projects: zhHKProjects, ui: zhHKUi },
  en: { projects: enProjects, ui: enUi },
  de: { projects: deProjects, ui: deUi },
  ko: { projects: koProjects, ui: koUi },
  ja: { projects: jaProjects, ui: jaUi },
};

export const PROJECT_PAGE_SLUGS = enProjects
  .filter((project) => project.details?.length)
  .map((project) => project.slug);

export function isProjectPageSlug(slug: string) {
  return PROJECT_PAGE_SLUGS.includes(slug);
}
