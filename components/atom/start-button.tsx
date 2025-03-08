'use client';

import start_arrow from '@/public/image/icon/start_arrow.svg';
import start_arrow_purple from '@/public/image/icon/start_arrow_purple.svg';
import styles from '@/styles/atom/start-button.module.css';
import Image from 'next/image';
import { useState } from 'react';
export function StartButton({ backgroundColor }: { backgroundColor: string }) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      onClick={() => alert('아직 준비 중입니다.')}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`${styles.button} ${backgroundColor === 'purple' ? styles.purple : styles.white} ${isHovered && styles.hover}`}
    >
      <span>사전 신청하기</span>
      <Image
        src={backgroundColor === 'purple' ? start_arrow : start_arrow_purple}
        alt="->"
      />
    </button>
  );
}

export function HeaderStartButton({
  backgroundColor,
  scrollTop,
}: {
  backgroundColor: string;
  scrollTop: number;
}) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <button
      onClick={() => alert('아직 준비 중입니다.')}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`${styles.header_button} ${backgroundColor === 'purple' ? styles.purple : styles.white} ${scrollTop !== 0 ? styles.scroll_top : ''}  ${isHovered && styles.hover}`}
    >
      <span>사전 신청하기</span>
      <Image src={start_arrow} alt="->" />
    </button>
  );
}
