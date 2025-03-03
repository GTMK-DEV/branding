import type { Metadata } from 'next';
import '@/styles/global.css';
import ChannelTalkScript from '@/third-party/ChannelTalkScript';
import Footer from '@/components/common/Footer';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export const viewport = {
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gtmk.net'),
  title: 'BillLive : 믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼',
  description:
    'BillLive는 믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼 입니다.',
  keywords: [
    '라이톤',
    'Writon',
    'writon',
    '목표달성',
    '회고',
    '챌린지',
    '커뮤니티',
    '목표달성',
    '자기계발',
    '도전',
    '응원',
    '글',
    '성장',
    '공유',
    '회고 플랫폼',
    '팀회고',
    '팀',
    '단체',
    '글쓰기플랫폼',
    '라이톤',
    '성장',
    '회고 챌린지',
  ],
  openGraph: {
    title: 'BillLive : 믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼',
    description:
      'BillLive는 믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼 입니다',
    siteName: 'BillLive : 믿고 사용할 수 있는 실시간 청구 & 결제 플랫폼',
    locale: 'ko_KR',
    type: 'website',
    url: 'https://www.gtmk.net',
    images: {
      url: '/image/icon/openGraph.png',
    },
  },

  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0',

  icons: [{ rel: 'icon', url: '/image/icon/card_icon.svg', sizes: '48x48' }],

  manifest: '/manifest.json',
  verification: {
    google: '4LZBJp_5GFiVVDo4NcgegnofhCWdDYPhxMdup2l0Ih8',
    other: {
      'naver-site-verification': ['5841f14781f9e413e1b2fcf9866d6d55bf8ba62a'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <Footer />
        <GoogleAnalytics gaId="G-464TRRT3QH" />
        <GoogleTagManager gtmId="GTM-N3PB54VW" />
        <ChannelTalkScript />
      </body>
    </html>
  );
}
