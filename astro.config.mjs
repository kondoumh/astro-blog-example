import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import markdoc from "@astrojs/markdoc";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(),
    tailwind({
      config: { applyBaseStyles: false },
    }),
    markdoc({
      tags: {
        callout: {
          render: "Callout",
          attributes: {
            type: {
              type: String
            },
            title: {
              type: String
            }
          }
        }
      }
    }
  ),]
});