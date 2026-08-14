// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  base: "/",
  site: "https://faq.itmo.is",
  trailingSlash: "never",
  integrations: [
    starlight({
      title: "IS FAQ",
      description: "Неофициальный FAQ по ИТМО",
      favicon: "/favicon.ico",
      defaultLocale: "ru",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/whytrall/is-faq",
        },
      ],
      logo: {
        alt: "ИС",
        src: "./public/is-faq.png",
      },
      sidebar: [
        {
          // 1
          slug: "",
        },
        {
          // 2
          slug: "qa",
        },
        {
          // 3
          slug: "department",
        },
        {
          // 4
          slug: "links",
        },
        {
          // 5
          slug: "glossary",
        },
        {
          // 100
          label: "До учебы",
          items: [{ autogenerate: { directory: "before" } }],
        },
        {
          // 101
          label: "Учеба",
          items: [{ autogenerate: { directory: "study" } }],
        },
        {
          // 102
          label: "Внеучебная деятельность",
          items: [{ autogenerate: { directory: "afterstudy" } }],
        },
        {
          // 103
          label: "Жизнь в университете",
          items: [{ autogenerate: { directory: "life" } }],
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
