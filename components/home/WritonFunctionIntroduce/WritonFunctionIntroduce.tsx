'use client';

import Image from 'next/image';
import styles from './WritonFunctionIntroduce.module.css';

import dummy from '@/public/image/mainPage/functionSection/img-1-writing.png';

export default function WritonFunctionIntroduce() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>빌리브가 제공하는 기능</p>
      <div className={styles.function_container}>
        {/* 1️⃣ 양방향 지갑 시스템 */}
        <div className={styles.function_item}>
          <div className={styles.function_item_text}>
            <h3>양방향 지갑 시스템</h3>
            <p>
              소비자는 BillLive를 통해 예치금을 충전하고, 사용한 만큼
              차감됩니다. 가맹점도 선결제 금액을 안정적으로 관리하여 수입을
              예측할 수 있습니다.
            </p>
          </div>
          <Image
            src={dummy}
            alt="양방향 지갑 시스템"
            className={styles.function_image}
          />
        </div>

        {/* 2️⃣ 실시간 정산 및 결제 내역 확인 */}
        <div className={styles.function_item}>
          <Image
            src={dummy}
            alt="실시간 정산"
            className={styles.function_image}
          />
          <div className={styles.function_item_text}>
            <h3>실시간 정산 및 결제 내역 확인</h3>
            <p>
              소비자는 사용 내역을 즉시 확인할 수 있으며, 가맹점도 실시간 정산을
              통해 수익을 관리할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 3️⃣ 양도 및 환불 간편화 + 커뮤니티 연결 */}
        <div className={styles.function_item}>
          <div className={styles.function_item_text}>
            <h3>양도 및 환불 간편화</h3>
            <p>
              사용하지 않은 회원권은 양도를 통해 다른 사람에게 공유할 수 있으며,
              커뮤니티를 통해 안전하게 거래할 수 있습니다.
            </p>
          </div>
          <Image
            src={dummy}
            alt="양도 및 환불"
            className={styles.function_image}
          />
        </div>

        {/* 4️⃣ 거래 히스토리 기록 기능 (운동 내역, 피부과 방문 내역 등) */}
        <div className={styles.function_item}>
          <Image
            src={dummy}
            alt="거래 히스토리 기록"
            className={styles.function_image}
          />
          <div className={styles.function_item_text}>
            <h3>거래 히스토리 기록</h3>
            <p>
              헬스장에서는 운동 부위, 피부과에서는 시술 내역 등 사용자의 서비스
              이용 내역을 기록하고 확인할 수 있는 기능을 제공합니다.
            </p>
          </div>
        </div>

        {/* 
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
        </div> */}
      </div>
    </div>
  );
}
