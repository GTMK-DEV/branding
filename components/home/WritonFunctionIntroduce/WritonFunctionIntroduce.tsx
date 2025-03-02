'use client';

import Image from 'next/image';
import styles from './WritonFunctionIntroduce.module.css';

import dummy from '@/public/image/mainPage/functionSection/img-1-writing.png';

export default function WritonFunctionIntroduce() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>빌리브가 제공하는 기능</p>
      <div className={styles.function_container}>
        <div className={styles.function_item}>
          <div className={styles.function_item_text}>
            <h3>첫번째 기능입니다.</h3>
            <p>
              살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴
            </p>
          </div>
          <Image
            src={dummy}
            alt="function"
            quality={100}
            className={styles.function_image}
          />
        </div>
        <div className={styles.function_item}>
          <Image
            src={dummy}
            alt="function"
            quality={100}
            className={styles.function_image}
          />
          <div className={styles.function_item_text}>
            <h3>두번째 기능입니다.</h3>
            <p>
              살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴
            </p>
          </div>
        </div>
        <div className={styles.function_item}>
          <div className={styles.function_item_text}>
            <h3>세번째 기능입니다.</h3>
            <p>
              살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴살랴
            </p>
          </div>
          <Image
            src={dummy}
            alt="function"
            quality={100}
            className={styles.function_image}
          />
        </div>
      </div>
    </div>
  );
}
