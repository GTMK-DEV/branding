'use client';

import Image from 'next/image';
import styles from './WritonFunctionIntroduce.module.css';

import first_function from '@/public/first_function.png';
import second_function from '@/public/second_function.jpeg';
import third_function from '@/public/third_function.png';
import fourth_function from '@/public/fourth_function.jpeg';

// 기능 목록을 배열로 관리
const functionData = [
  {
    title: '양방향 지갑 시스템',
    description: `소비자는 BillLive를 통해 예치금을 충전하고, 사용한 만큼 차감됩니다.\n 가맹점도 선결제 금액을 안정적으로 관리하여 수입을 예측할 수 있습니다.`,
    image: first_function,
    alt: '양방향 지갑 시스템',
  },
  {
    title: '실시간 정산 및 결제 내역 확인',
    description: `소비자는 사용 내역을 즉시 확인할 수 있으며,\n 가맹점도 실시간 정산을 통해 수익을 관리할 수 있습니다.`,
    image: second_function,
    alt: '실시간 정산',
  },
  {
    title: '양도 및 환불 간편화',
    description: `사용하지 않은 회원권은 양도를 통해 다른 사람에게 공유할 수 있으며,\n 커뮤니티를 통해 안전하게 거래할 수 있습니다.`,
    image: third_function,
    alt: '양도 및 환불',
  },
  {
    title: '거래 히스토리 기록',
    description: `헬스장에서는 운동 부위, 피부과에서는 시술 내역 등 사용자의\n 서비스 이용 내역을 기록하고 확인할 수 있는 기능을 제공합니다.`,
    image: fourth_function,
    alt: '거래 히스토리 기록',
  },
];

export default function WritonFunctionIntroduce() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>빌리브가 제공하는 기능</p>
      <div className={styles.function_container}>
        {functionData.map((func, index) => (
          <div
            key={index}
            className={`${styles.function_item} ${index % 2 === 0 ? styles.function_item_left : ''}`}
          >
            {/* 이미지가 왼쪽/오른쪽 번갈아 배치되도록 index를 활용 */}
            {index % 2 === 1 && (
              <Image
                src={func.image}
                alt={func.alt}
                className={styles.function_image}
              />
            )}
            <div className={styles.function_item_text}>
              <h3>{func.title}</h3>
              <p>{func.description}</p>
            </div>
            {index % 2 === 0 && (
              <Image
                src={func.image}
                alt={func.alt}
                className={styles.function_image}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
