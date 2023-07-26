// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '資源庫',
  tagline: '這裡有你出國需要的教學 / 攻略 / 工具',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.xdavidchen.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHnpub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'David 的資源庫',
        /*logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },*/
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教學',
          },
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://xdavidchen.com/zh-tw',
            label: '前往主網站',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '教學',
            items: [
              {
                label: '教學',
                to: '/docs/奧地利打工度假/intro',
              },
              {
                label: '教學2',
                to: '/docs/奧地利打工度假/intro',
              },
            ],
          },
          {
            title: '社群',
            items: [
              {
                label: '免費電子報',
                href: 'https://newsletter.xdavidchen.com/zh-tw',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@xdavidchen/featured',
              },
              {
                label: '小額贊助',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: '更多內容',
            items: [
              /*{
                label: 'Blog',
                to: '/blog',
              },*/
              {
                label: '國外故事（中）',
                href: 'https://xdavidchen.com/zh-tw/',
              },
              {
                label: '生活靈感 / 自我成長 / 品牌行銷（英）',
                href: 'https://xdavidchen.com/en/',
              },
              {
                label: '攝影作品',
                href: 'https://portfolio.xdavidchen.com/',
              },
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `© ${new Date().getFullYear()} David Chen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;