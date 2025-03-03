import { writonRecommendDataType } from '@/types';

const image_highfive = '/image/mainPage/icon-highfive.svg';
const image_talking = '/image/mainPage/icon-talking.svg';

export const WritonRecommendData: writonRecommendDataType[] = [
  {
    name: 'highfive',
    image: image_highfive,
    main_title: `스마트한 소비를 원하는 고객`,
    sub_title: `• 먹튀 걱정 없이 선결제를 안전하게 하고 싶은 분\n• 헬스장, 마사지샵, 피부과 등 다양한 서비스를 패키지로 묶어 유연하게 사용하고 싶은 분\n• 남은 회원권을 쉽게 확인하고, 양도/환불을 편리하게 하고 싶은 분`,
  },

  {
    name: 'talking',
    image: image_talking,
    main_title: `서비스를 제공하는 가맹점`,
    sub_title: `• 고객에게 더 편리한 결제 옵션을 제공하고 싶은 매장\n• 횟수권, 회원권, 패키지 상품을 효율적으로 관리하고 싶은 가맹점\n• 환불 및 양도 과정을 간편하게 운영하고 싶은 사업자`,
  },
];
