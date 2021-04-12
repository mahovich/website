import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  title: "grammY",
  description: "The Telegram Bot Framework.",

  themeConfig: {
    logo: "/logo.jpg",
    repo: "https://github.com/grammyjs/grammY",
    docsRepo: "https://github.com/grammyjs/grammy-website",
    docsDir: "site",
    repoLabel: "GitHub",
    notFound: [
      "Not Found",
      "Nope.",
      "nothin' here for ya, sorry",
      "Error 404/ This Page Could Not Be Found But/ A Haiku Instead",
      "Country rooooaaaads,",
    ],
    backToHome: "Take me hoooooooome",
    navbar: [
      { text: "Guide", link: "/guide/" },
      { text: "Getting started", link: "/guide/getting-started.md" },
      {
        text: "Learn",
        children: [
          {
            text: "Basics",
            children: [
              {
                text: "Overview",
                link: "/guide/README.md",
              },
              {
                text: "Introduction",
                link: "/guide/introduction.md",
              },
              {
                text: "Getting started",
                link: "/guide/getting-started.md",
              },
              {
                text: "Context",
                link: "/guide/context.md",
              },
              {
                text: "Bot API",
                link: "/guide/api.md",
              },
              {
                text: "Filter Queries and bot.on()",
                link: "/guide/filter-queries.md",
              },
              {
                text: "Middleware",
                link: "/guide/middleware.md",
              },
              {
                text: "Error handling",
                link: "/guide/errors.md",
              },
              {
                text: "Keyboards and Inline Keyboards",
                link: "/guide/keyboards.md",
              },
              {
                text: "Inline Queries",
                link: "/guide/inline-queries.md",
              },
              {
                text: "File handling",
                link: "/guide/files.md",
              },
              {
                text: "Sessions and storing data",
                link: "/guide/sessions.md",
              },
              {
                text: "Router",
                link: "/guide/router.md",
              },
              {
                text: "Long Polling vs. Webhooks",
                link: "/guide/deployment-types.md",
              },
            ],
          },
          {
            text: "Advanced",
            children: [
              {
                text: "Overview",
                link: "/advanced/README.md",
              },
              {
                text: "Middleware Redux",
                link: "/advanced/middleware.md",
              },
              {
                text: "Scaling Up I: Large codebase",
                link: "/advanced/structuring.md",
              },
              {
                text: "Scaling Up II: High load",
                link: "/advanced/scaling.md",
              },
              {
                text: "Concurrency (grammY runner)",
                link: "/advanced/runner.md",
              },
              {
                text: "Bot API Transformers",
                link: "/advanced/transformers.md",
              },
              {
                text: "Deployment Checklist",
                link: "/advanced/deployment.md",
              },
            ],
          },
        ],
      },
      {
        text: "API Reference",
        link: "https://doc.deno.land/https/deno.land/x/grammy/mod.ts",
      },
      {
        text: "Demo",
        children: [
          {
            text: "Demo",
            children: [
              { text: "Browser Demo", link: "/demo/demo.md" },
              { text: "Example Bots Demo", link: "/demo/examples.md" },
              { text: "Community Showlounge", link: "/demo/showlounge.md" },
            ],
          },
        ],
      },
      {
        text: "Resources",
        children: [
          {
            text: "grammY",
            children: [
              {
                text: "Example Bots Repository",
                link: "https://github.com/grammyjs/examples#readme",
              },
              {
                text: "News",
                link: "https://t.me/grammyjs_news",
              },
              {
                text: "Community Chat",
                link: "https://t.me/grammyjs",
              },
            ],
          },
          {
            text: "Telegram",
            children: [
              {
                text: "Introduction for Developers",
                link: "https://core.telegram.org/bots",
              },
              {
                text: "Bots FAQ",
                link: "https://core.telegram.org/bots/faq",
              },
              {
                text: "Bot API Reference",
                link: "https://core.telegram.org/bots/api",
              },
            ],
          },
        ],
      },
    ],
  },
});
