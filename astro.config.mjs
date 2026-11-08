// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { CONTENT_LAST_UPDATED } from './src/data/site.ts';
import { LOCALES } from './src/data/locales.ts';
import { PROJECT_PAGE_SLUGS } from './src/data/projects/index.ts';

const SITE = 'https://cv.wilboerht.com';

const locales = LOCALES;

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // 排除 noindex 的根页面（它只是重定向入口）
      filter: (page) => page !== `${SITE}/`,
      serialize(item) {
        // 为每个 CV 页面写入 hreflang alternates，与 HTML 中的 hreflang 保持一致
        if (locales.some((l) => item.url === `${SITE}${l.path}`)) {
          item.links = [
            ...locales.map((l) => ({ lang: l.code, url: `${SITE}${l.path}` })),
            { lang: 'x-default', url: `${SITE}/CV-en/` },
          ];
        }

        // 项目详情页：同一项目的所有语言版本互相声明 alternates
        for (const locale of locales) {
          for (const slug of PROJECT_PAGE_SLUGS) {
            if (item.url === `${SITE}${locale.path}projects/${slug}/`) {
              item.links = [
                ...locales.map((l) => ({
                  lang: l.code,
                  url: `${SITE}${l.path}projects/${slug}/`,
                })),
                { lang: 'x-default', url: `${SITE}/CV-en/projects/${slug}/` },
              ];
            }
          }
        }
        // 使用统一的内容更新时间，避免每次构建都改变 lastmod
        item.lastmod = CONTENT_LAST_UPDATED;
        return item;
      },
    }),
  ],
  output: 'static',
  build: {
    // 确保严格模式
    format: 'directory',
    assets: 'assets'
  }
});
