'use client';

import styles from './MainTitle.module.css';
import { StartButton } from '@/components/atom/start-button';
import { motion } from 'framer-motion';
export default function MainTitle() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <span className={styles.main_text}>
        BillLive&nbsp;
        <br />
      </span>
      <span className={styles.sub_text}>
        믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼
        <br />
        {/* 그리고 팀에 맞춤화 된 프라이빗한 공간을 누리세요. */}
      </span>
      <StartButton backgroundColor="purple" />
    </motion.div>
  );
}
