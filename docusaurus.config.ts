import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'IS FAQ',
  tagline: 'Неофициальный FAQ по ИТМО',
  favicon: 'favicon.ico',

  url: 'https://faq.itmo.is',
  baseUrl: '/',

  organizationName: 'whytrall',
  projectName: 'is-faq',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    ['docusaurus-plugin-yandex-metrica', {
      counterID: '106859682',
    }],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarCollapsible: false,
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          editUrl:
            'https://github.com/whytrall/is-faq/blob/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'FAQ',
      logo: {
        alt: 'ИС',
        src: '/is-faq.png',
      },
      items: [
        {
          href: 'https://github.com/whytrall/is-faq',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `IS FAQ 2019 – ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
