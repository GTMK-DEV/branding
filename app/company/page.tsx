'use client';

import Header from '@/components/common/Header';
import styles from './company.module.css';
import Image from 'next/image';
import main from '@/public/companyMain.jpeg';
import DH from '@/public/profile/DH.png';
import HY from '@/public/profile/HY.png';
import BY from '@/public/profile/BY.png';
import JS from '@/public/profile/JS.png';
import KM from '@/public/profile/KM.png';
import value from '@/public/vision.png';
import gtmk_logo from '@/public/gtmk_logo.png';
import { useEffect, useRef, useState } from 'react';

const profileData = [
  {
    image: BY,
    name: '안병준',
    role: '대표이사',
  },
  {
    image: KM,
    name: '김기만',
    role: 'ICT 비즈니스 플랫폼 총괄',
  },
  {
    image: DH,
    name: '김대헌',
    role: '사업 및 서비스 기획 담당',
  },
  {
    image: HY,
    name: '최호연',
    role: '프론트엔드 개발 및 채널 서비스 담당',
  },
  {
    image: JS,
    name: '박진석',
    role: '백엔드 개발 및 시스템 인프라 담당',
  },
];

export default function company() {
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
      {' '}
      <Header scrollTop={scrollTop} page={'company'} />
      <div ref={ref}>
        <section className={styles.main}>
          <Image className={styles.main_image} src={main} alt="배경" />
          <p>새로운 관점을 향한 틈</p>
          <span>GTMK</span>
        </section>
        <div className={styles.container}>
          <section className={styles.company}>
            <div className={styles.legend}>
              <span className={styles.title}>COMPANY</span>
              <div className={styles.line}></div>
              <div className={styles.company_container}>
                <Image
                  className={styles.company_image}
                  src={gtmk_logo}
                  alt="gtmk_logo"
                />
                <div className={styles.company_introduce}>
                  <span className={styles.company_title}>
                    GTMK :
                    <span className={styles.highlight}>
                      {'   '}Go To MarKet
                    </span>
                  </span>
                  <span className={styles.company_descriptions}>
                    <span className={styles.company_description}>
                      GTMK는{'   '}
                      <span className={styles.keyword}>
                        효율적인 시장 진입 전략
                      </span>
                      을 통해{'   '}
                      <span className={styles.keyword}>
                        비즈니스와 소비자를 연결하는 플랫폼
                      </span>
                      입니다.
                    </span>
                    <span className={styles.company_description}>
                      우리는 <span className={styles.value}>신뢰</span>,{' '}
                      <span className={styles.value}>유연성</span>,
                      <span className={styles.value}>확장성</span>을 기반으로,
                      보다{'   '}
                      <span className={styles.keyword}>스마트한 거래 환경</span>
                      을 만들어갑니다.
                    </span>
                    <span className={styles.company_description}>
                      단순한 결제 시스템을 넘어,{' '}
                      <span className={styles.keyword}>
                        가맹점과 소비자 모두에게 최적화된 금융 솔루션
                      </span>
                      을 제공합니다.
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div></div>
          </section>
          <section className={styles.value}>
            <div className={styles.legend}>
              <span className={styles.title}>VALUE</span>
              <div className={styles.line}></div>
              <Image className={styles.value_image} src={value} alt="가치" />
            </div>
          </section>
          <section className={styles.team}>
            <div className={styles.legend}>
              <span className={styles.title}>TEAM</span>
              <div className={styles.line}></div>
            </div>
            <div className={styles.people_container}>
              {profileData.map((item) => {
                return (
                  <div className={styles.people}>
                    <Image
                      className={styles.profile}
                      src={item.image}
                      alt="profile"
                    />
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.role}>{item.role}</span>
                  </div>
                );
              })}
            </div>
          </section>
          {/* <section className={styles.vision}>
            <div className={styles.legend}>
              <span className={styles.title}>VISION</span>
              <div className={styles.line}></div>
            </div>
            <div></div>
          </section> */}

          <section className={styles.contact}>
            <div className={styles.legend}>
              <span className={styles.title}>CONTACT</span>
              <div className={styles.line}></div>
            </div>

            <div className={styles.contact_container}>
              <div className={styles.contact_item}>
                <span className={styles.contact_title}>Location.</span>
                <span className={styles.content}>
                  서울특별시 동작구 상도로62길 25, 제2층 205호
                </span>
              </div>

              <div className={styles.contact_item}>
                <span className={styles.contact_title}>Phone.</span>
                <span className={styles.content}>+ 82) 2 742 0070</span>
              </div>

              <div className={styles.contact_item}>
                <span className={styles.contact_title}>Fax.</span>
                <span className={styles.content}>+ 82) 2 742 0070</span>
              </div>

              <div className={styles.contact_item}>
                <span className={styles.contact_title}>Email.</span>
                <span className={styles.content}>gtmk00700@gmail.com</span>
                <span className={styles.content}>gtmk001@naver.com</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
