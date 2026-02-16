import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
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
        /*blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },*/
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    //image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'FAQ',
      logo: {
        alt: 'ИС',
        src: '/is-faq.png',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },*/
        {
          href: 'https://github.com/whytrall/is-faq',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        /*{
          title: 'Полезные ссылки',
          items: [
            {
              label: 'Сайт факультета',
              to: 'https://fitp.itmo.ru',
            },
            {
              label: 'Студенческий офис',
              to: 'https://student.itmo.ru'
            },
            {
              label: 'Абитуриент ИТМО',
              to: 'https://abit.itmo.ru'
            },
            {
              label: 'ИТМО',
              to: 'https://itmo.ru'
            },
          ],
        }*/
      ],
      copyright: `IS FAQ 2019 – ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
