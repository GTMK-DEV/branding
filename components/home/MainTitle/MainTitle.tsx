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
        빌리브&nbsp;
        <br />
        빌리브
      </span>
      <span className={styles.sub_text}>
        빌리브에서 팀 회고를 작성하고 관리하세요.
        <br />
        그리고 팀에 맞춤화 된 프라이빗한 공간을 누리세요.
      </span>
      <StartButton backgroundColor="purple" />
    </motion.div>
  );
}
