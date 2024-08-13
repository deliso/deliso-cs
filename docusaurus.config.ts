import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Teaching Myself CS',
  tagline: 'Follow my self-taught Computer Science journey',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cs.deliso.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deliso', // Usually your GitHub org/user name.
  projectName: 'deliso-cs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/deliso/deliso-cs/blob/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'TMCS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          href: 'https://github.com/deliso/deliso-cs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Curriculum',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Bachelor Degree in Informatics Engineering (UPC)',
              href: 'https://www.fib.upc.edu/en/studies/bachelors-degrees/bachelor-degree-informatics-engineering',
            },
            {
              label: 'OpenCourseWare (MIT)',
              href: 'https://ocw.mit.edu/',
            },
          ],
        },
        {
          title: 'About Me',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/deliso',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/smoraleslopez',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deliso. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
