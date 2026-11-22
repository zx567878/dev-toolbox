import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://43102620.xyz',
  integrations: [
    sitemap({
      // build.format:'file' 产出的是 /about.html、/posts/hello.html，
      // 而集成默认按目录式 URL 生成，会与 canonical 不一致。
      // 这里统一补上 .html，让 sitemap / canonical / 内链三者完全对齐。
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname !== '/' && !url.pathname.endsWith('.html')) {
          url.pathname = `${url.pathname.replace(/\/$/, '')}.html`;
        }
        item.url = url.href;
        return item;
      },
    }),
  ],
  // 关键：file 格式让文章产出 /posts/<slug>.html，与既定 permalink 规则一致
  build: { format: 'file' },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      wrap: true,
    },
  },
  devToolbar: { enabled: false },
});
