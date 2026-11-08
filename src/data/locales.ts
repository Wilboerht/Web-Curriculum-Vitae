export const LOCALES = [
  { code: "zh-CN", dir: "CV-cn", path: "/CV-cn/", label: "中", full: "中文" },
  { code: "zh-TW", dir: "CV-tw", path: "/CV-tw/", label: "繁", full: "繁體中文" },
  { code: "zh-HK", dir: "CV-hk", path: "/CV-hk/", label: "港", full: "繁體中文（香港）" },
  { code: "en", dir: "CV-en", path: "/CV-en/", label: "EN", full: "English" },
  { code: "de", dir: "CV-de", path: "/CV-de/", label: "DE", full: "Deutsch" },
  { code: "ko", dir: "CV-kr", path: "/CV-kr/", label: "한", full: "한국어" },
  { code: "ja", dir: "CV-jp", path: "/CV-jp/", label: "日", full: "日本語" },
] as const;

export type LocaleCode = (typeof LOCALES)[number]["code"];

export function getLocaleByCode(code: string) {
  return LOCALES.find((locale) => locale.code === code) ?? LOCALES.find((locale) => locale.code === "en")!;
}

export function getLocaleByDir(dir: string) {
  return LOCALES.find((locale) => locale.dir === dir) ?? LOCALES.find((locale) => locale.code === "en")!;
}
