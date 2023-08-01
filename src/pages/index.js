import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/如何快速上手">
            到處逛逛 →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`首頁`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

const MySEO = () => (
  <Head>
    <meta property="og:description" content="這裡有你出國需要的教學 / 攻略 / 工具" />
    <meta charSet="utf-8" />
    <title>知識庫 💡</title>
    <link rel="canonical" href="https://docs.xdavidchen.com" />
    <script src="https://beamanalytics.b-cdn.net/beam.min.js" data-token="b347b00d-9393-4bb3-8cb9-7daaf1a18057" async></script>
  </Head>
);
