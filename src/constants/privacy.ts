export type PrivacySection = {
  title: string;
  paragraphs?: string[];
  items?: PrivacyItem[];
  paragraphFirst?: boolean;
};

export type PrivacyItem = {
  text: string;
  children?: string[];
};

export const privacyIntro =
  "에이치에스코리아는 이사 상담 및 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용합니다.";

export const privacySections: PrivacySection[] = [
  {
    title: "1. 수집 항목",
    items: [
      {
        text: "필수 항목",
        children: [
          "고객사명, 고객명, 연락처",
          "평수/인원수, 이사 예정일, 이사 서비스 유형",
          "출발지 주소, 도착지 주소",
          "폐기물 처리 여부, 에어컨 이전 설치 여부",
        ],
      },
      {
        text: "선택 항목",
        children: ["문의 내용, 파일 업로드(사진 등)"],
      },
    ],
    paragraphs: ["※ 필수 항목 미입력 시 서비스 이용이 제한될 수 있습니다."],
  },
  {
    title: "2. 이용 목적",
    items: [
      { text: "이사 상담 및 견적 제공" },
      { text: "서비스 일정 조율 및 안내" },
      { text: "고객 문의 응대 및 관리" },
      { text: "서비스 품질 개선" },
    ],
  },
  {
    paragraphFirst: true,
    title: "3. 보유 및 이용 기간",
    paragraphs: [
      "개인정보는 수집 및 이용 목적 달성 시 지체 없이 파기됩니다. \n단, 관련 법령에 따라 아래 기간 동안 보관될 수 있습니다.",
    ],
    items: [
      { text: "계약 및 거래 관련 기록: 5년" },
      { text: "소비자 불만 및 분쟁 처리 기록: 3년" },
    ],
  },
  {
    title: "4. 제3자 제공",
    paragraphs: [
      "회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. \n다만, 서비스 제공을 위해 필요한 경우 이사 수행 업체 등 협력사에 최소한의 정보가 제공될 수 있습니다.",
    ],
  },
  {
    title: "5. 이용자 권리",
    paragraphs: ["이용자는 언제든지 개인정보 열람, 수정, 삭제 및 처리 정지를 요청할 수 있습니다."],
  },
  {
    title: "6. 동의 거부 안내",
    paragraphs: [
      "이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있으며, 필수 항목에 대한 동의를 거부할 경우 서비스 이용이 제한될 수 있습니다.",
    ],
  },
];
