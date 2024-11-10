// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ExitTaiwan Docs',
  tagline: '出國留學、交換、打工度假的資訊，這裡通通都有 👋🏼',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.exittaiwan.com',
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
    defaultLocale: 'zh-TW',
    locales: ['zh-TW'],
  },

  scripts: [
    {src: 'https://beamanalytics.b-cdn.net/beam.min.js', 'data-token': "b347b00d-9393-4bb3-8cb9-7daaf1a18057", async: true, defer: true, 'data-domain': 'docs.exittaiwan.com'}
  ],
  
  plugins: [
  /*  [require.resolve('@cmfcmf/docusaurus-search-local'), {
      blogRouteBasePath: '/blog', // must correspond to the base route path configured for the blog plugin
      docsRouteBasePath: '/docs', // must correspond to the base route path configured for the docs plugin
      indexBlog: true, // whether to index blog pages
      indexDocs: true, // whether to index docs pages
      indexPages: false, // whether to index static pages
      // /404.html is never indexed
      language: "en" // language of your documentation, see next section
    }]*/
    //require.resolve('docusaurus-lunr-search') 
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        indexDocs: true, // whether to index docs pages
        indexBlog: false,
        docsRouteBasePath: '/', // must correspond to the base route path configured for the docs plugin
        // blogRouteBasePath: '/blog',
        indexPages: true, // whether to index static pages
      }, //thank you https://github.com/dhitimedin/docusaurus3/blob/master/docusaurus.config.js
    ], // also this if I want to change it to theme later https://github.com/easyops-cn/docusaurus-search-local/issues/262
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/xdavidchen/docs-exittaiwan/blob/main',
        },
        blog: false,
        /**blog: {
          blogTitle: '各國攻略',
          blogDescription: '在這裡找到各國生活、工作、旅行經驗分享，還有國外飯店住宿推薦、學習外國旅行行程如何規劃、獲得優惠票卷等等各類資訊等你來發掘！',
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
        },**/
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'daily',
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
      image: 'img/docs-banner-homepage.webp',
      metadata: [{title: 'ExitTaiwan Docs', description: '出國留學、交換、打工度假的資訊，這裡通通都有 👋🏼', image: 'img/docs-banner-homepage.webp', name: 'ExitTaiwan Docs', content: '留學, 打工度假, 海外工作'}],
      announcementBar: {
        id: 'support_us',
        content:
          '我們需要你的幫助繼續經營此網站 → <a target="_blank" rel="noopener noreferrer" href="https://exittaiwan.gumroad.com/l/membership"><b>每月贊助</b></a>｜<a target="_blank" rel="noopener noreferrer" href="https://exittaiwan.gumroad.com/coffee"><b>單次贊助</b></a>',
        backgroundColor: '#399A4B',
        textColor: '#fff',
        isCloseable: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: '出台灣',
        logo: {
          alt: 'ExitTaiwan Logo',
          src: 'img/logo.svg',
        },
        items: [
          /*{
            label: '開始使用',
            to: '/',
          },*/
          {
            label: '選擇國家',
            to: '/選擇國家',
          },
          {
            label: '好用資源',
            to: '/好用資源',
          },
          /*{
            type: 'dropdown',
            label: '各國攻略',
            position: 'left',
            items: [
              {
                to: '/blog',
                label: '📖 所有攻略',
              },
              {
                label: '🇦🇹 奧地利攻略',
                to: '/blog/tags/🇦🇹-奧地利',
              },
              {
                label: '🇰🇷 韓國攻略',
                to: '/blog/tags/🇰🇷-南韓',
              },
              {
                label: '🇺🇸 美國攻略',
                to: '/blog/tags/🇺🇸-美國',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com',
              },
              // ... more items
            ],
          },*/
          {
            href: 'https://exittaiwan.com',
            label: '旅遊資訊 🔗',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            label: '免責聲明與開源使用條款',
            href: 'https://docs.exittaiwan.com/terms/',
          },
        ],
        /**links: [
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
                href: 'https://exittaiwan.gumroad.com/l/membership',
              },
            ],
          },
          {
            title: '更多創作',
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
            title: '其他連結',
            items: [
              //{
                //label: 'Blog',
                //to: '/blog',
              //},
              {
                label: '中華民國外交部駐外機構',
                href: 'https://www.boca.gov.tw/sp-foof-arealp-All-1.html',
              },
              {
                label: '免責聲明與使用條款',
                href: '/terms',
              },
              {
                label: '版權聲明',
                href: '/copyright',
              },
            ],
          },
        ],**/
        //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        copyright: `© ${new Date().getFullYear()} ExitTaiwan *此網站上的內容包含行銷連結，透過連結購買，可以幫助我們獲得些許收入經營此站`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;