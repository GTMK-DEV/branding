'use client';

import styles from './home.module.css';
import MainTitle from '@/components/home/MainTitle/MainTitle';
import WritonFunctionIntroduce from '@/components/home/WritonFunctionIntroduce/WritonFunctionIntroduce';
import WritonInvite from '@/components/home/WritonInvite/WritonInvite';
import WritonUse from '@/components/home/WritonUse/WritonUse';
import WritonRecommend from '@/components/home/WritonRecommend/WritonRecommend';
import WritonFAQ from '@/components/home/WritonFAQ/WritonFAQ';
import WritonClick from '@/components/home/WritonClick/WritonClick';
import { useEffect, useRef, useState } from 'react';
import Header from '@/components/common/Header';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState<number>(0);
  useEffect(() => {
    setScrollTop(window.scrollY);

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    if (ref.current) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [ref]);
  return (
    <>
      <Header scrollTop={scrollTop} />
      <div
        ref={ref}
        className={`${styles.container}  ${scrollTop !== 0 ? styles.scroll_top : ''}`}
      >
        <section id="writon_unique" className={styles.first_section}>
          <video
            className={styles.video}
            width="100%"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="main.mp4" type="video/mp4" />
          </video>
          {scrollTop !== 0 && <MainTitle />}
        </section>
        <section className={styles.second_section}>
          <section
            id="function_introduce"
            className={styles.second_white_section}
          >
            <WritonFunctionIntroduce />
          </section>
        </section>
        <section className={styles.third_section}>
          <section className={styles.third_white_section}>
            <WritonInvite />
          </section>
        </section>

        <section className={styles.forth_section}>
          <WritonUse />
        </section>
        <section className={styles.fifth_section}>
          <WritonRecommend />
        </section>
        <section id="FAQ" className={styles.sixth_section}>
          <WritonFAQ />
        </section>
        <section className={styles.seventh_section}>
          <WritonClick />
        </section>
      </div>
    </>
  );
}
