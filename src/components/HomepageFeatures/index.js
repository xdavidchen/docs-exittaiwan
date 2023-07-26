import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '出國準備',
    Svg: require('@site/static/img/undraw_stranded_traveler_pdbw.svg').default,
    description: (
      <>
        萬事俱備再出國：簽證申請步驟、銀行開戶手續、入境海關須知、留學/打工度假文件⋯⋯。
      </>
    ),
  },
  {
    title: '旅遊攻略',
    Svg: require('@site/static/img/undraw_adventure_re_ncqp.svg').default,
    description: (
      <>
        Everything Travel — 旅遊景點、行程安排、交通規劃、餐廳推薦、出關前退稅⋯⋯。
      </>
    ),
  },
  {
    title: '實用工具',
    Svg: require('@site/static/img/undraw_mobile_apps_re_3wjf.svg').default,
    description: (
      <>
        自己用過的那些好用工具：To-do 追蹤進度、推薦網銀 & 信用卡、訂票 App⋯⋯。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
