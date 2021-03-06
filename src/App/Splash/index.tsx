import React from 'react';

import Hero from '__components__/Hero';
import Block from '__components__/Block';

import { ReactComponent as HeroSvg } from '__media__/splash.svg';
import me from '__media__/IMG_5491_mini.jpg';

import styles from './index.module.scss';


const Splash: React.FC<{}> = () => {
  return (
    <div className={styles['splash-container']}>
      <Hero>
        <HeroSvg />
      </Hero>
      <Block className={styles['me-block']}>
        <div className={styles['me-text']}>
          <h1 className={styles['me-title']}>Hello World</h1>
          <p className={styles['me-paragraph']}>
            {`
              I'm a life-long programmer from St Louis, MO and a professional software engineer.
            `}
          </p>
        </div>
        <img className={styles['me-image']} src={me} alt="My face" />
      </Block>
    </div>
  );
};

export default Splash;
