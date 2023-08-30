// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'David 知識庫',
  tagline: '出國需要的教學、攻略、工具，這裡通通都有 👋🏼',
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
          showLastUpdateTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: '攻略',
          blogDescription: 'David 知識庫的攻略文章，找到國外飯店住宿、行程規劃、優惠票卷等等各類資訊！',
          //postsPerPage: 'ALL', default = 10
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
          frontMatter.hide_reading_time
            ? undefined
            : defaultReadingTime({content}),
          blogSidebarTitle: '最新攻略',
          blogSidebarCount: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docs-social-card.jpg',
      metadata: [{title: 'David 知識庫', description: '出國需要的教學、攻略、工具，通通都在 David 知識庫！', image: 'img/docs-social-card.jpg', name: '知識庫 💡', content: '國外旅遊, 外國旅遊, 國外旅行, 外國旅行, 留學, 打工度假, 海外工作'}],
      announcementBar: {
        id: 'support_us',
        content:
          '透過小額贊助，支持我繼續提供實用資訊 → <a target="_blank" rel="noopener noreferrer" href="https://davidchen.bobaboba.me"><b>點我前往</b></a>',
        backgroundColor: '#F7FE79',
        textColor: '#000',
        isCloseable: false,
      },
      navbar: {
        title: 'David 知識庫',
        logo: {
          alt: 'David Chen Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'introSidebar',
            position: 'left',
            label: '教學',
          },
          {to: '/blog', label: '攻略', position: 'left'},
          {
            href: 'https://xdavidchen.com/zh-tw',
            label: '前往 David 的個人網站',
            position: 'right',
          },
          {
            type: 'search',
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
                label: '如何使用這個網站',
                to: '/docs/如何快速上手',
              },
              {
                label: '每次出國都看看',
                to: '/docs/category/每次出國都看看',
              },
              {
                label: '查看出國攻略',
                to: '/blog',
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
                href: 'https://davidchen.bobaboba.me',
              },
            ],
          },
          {
            title: '更多 David 的創作',
            items: [
              //{
                //label: 'Blog',
                //to: '/blog',
              //},
              {
                label: '國外故事（中）',
                href: 'https://xdavidchen.com/zh-tw/',
              },
              {
                label: '品牌行銷（英）',
                href: 'https://xdavidchen.com/en/',
              },
              {
                label: '攝影作品',
                href: 'https://portfolio.xdavidchen.com/',
              },
            ],
          },
          {
            title: '友站連結',
            items: [
              //{
                //label: 'Blog',
                //to: '/blog',
              //},
              {
                label: '中華民國外交部駐外機構',
                href: 'https://www.boca.gov.tw/sp-foof-arealp-All-1.html',
              },
              /*{
                label: '生活靈感 / 自我成長 / 品牌行銷（英）',
                href: 'https://xdavidchen.com/en/',
              },
              {
                label: '攝影作品',
                href: 'https://portfolio.xdavidchen.com/',
              },*/
            ],
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `© ${new Date().getFullYear()} David Chen *此網站上的內容包含行銷連結，透過連結購買，可以幫助我獲得些許收入`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      themes: [
        // ... Your other themes.
        [
          require.resolve("@easyops-cn/docusaurus-search-local"),
          /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
          ({
            // ... Your options.
            // `hashed` is recommended as long-term-cache of index file is possible.
            hashed: true,
            indexDocs: true,
            indexBlog: true,
            docsRouteBasePath: "/docs",
            blogRouteBasePath: "/blog",
            docsDir: "docs",
            blogDir: "blog",
            searchBarPosition: "right",
            hideSearchBarWithNoSearchContext: "false",
            // For Docs using Chinese, The `language` is recommended to set to:
            // ```
            language: ["en", "zh"],
            // ```
          }),
        ],
      ],
    }),
};

module.exports = config;