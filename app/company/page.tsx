import Header from '@/components/common/Header';
import styles from './company.module.css';
import Image from 'next/image';
import profile from '@/public/profile.png';
import DH from '@/public/profile/DH.png';
import HY from '@/public/profile/HY.png';
import BY from '@/public/profile/BY.png';
import JS from '@/public/profile/JS.png';
import KM from '@/public/profile/KM.png';

const profleData = [
  {
    image: BY,
    name: '안병준',
    role: '대표 및 특허 담당',
  },
  {
    image: KM,
    name: '김대헌',
    role: '서비스 전반적인 총괄',
  },
  {
    image: DH,
    name: '김대헌',
    role: '서비스 기획',
  },
  {
    image: HY,
    name: '최호연',
    role: '프론트엔드',
  },
  {
    image: JS,
    name: '박진석',
    role: '백엔드',
  },
];

export default function company() {
  return (
    <div>
      <Header scrollTop={1} />
      <div className={styles.container}>
        <section className={styles.company}>
          <div className={styles.legend}>
            <span className={styles.title}>COMPANY</span>
            <div className={styles.line}></div>
          </div>
          <div></div>
        </section>
        <section className={styles.team}>
          <div className={styles.legend}>
            <span className={styles.title}>TEAM</span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.people_container}>
            {profleData.map((item) => {
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
        <section className={styles.vision}>
          <div className={styles.legend}>
            <span className={styles.title}>VISION</span>
            <div className={styles.line}></div>
          </div>
          <div></div>
        </section>
        <section className={styles.value}>
          <div className={styles.legend}>
            <span className={styles.title}>VALUE</span>
            <div className={styles.line}></div>
          </div>
          <div></div>
        </section>
        <section className={styles.contact}>
          <div className={styles.legend}>
            <span className={styles.title}>CONTACT</span>
            <div className={styles.line}></div>
          </div>

          <div className={styles.contact_container}>
            <div className={styles.contact_item}>
              <span className={styles.contact_title}>Location.</span>
              <span className={styles.content}>
                서울특벽시 동작구 머시기머시기
              </span>
            </div>

            <div className={styles.contact_item}>
              <span className={styles.contact_title}>Phone.</span>
              <span className={styles.content}>+ 82) 2 111 0070</span>
            </div>

            <div className={styles.contact_item}>
              <span className={styles.contact_title}>Fax.</span>
              <span className={styles.content}>+ 82) 2 111 0070</span>
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
  );
}
