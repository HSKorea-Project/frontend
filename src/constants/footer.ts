// Footer 메뉴 아이템 데이터 타입
export interface FooterMenuItem {
  label: string;
  href: string;
}

// 회사 정보 데이터 타입
export interface CompanyInfoItem {
  label: string;
  value: string;
}

// Footer 데이터 타입
export interface FooterData {
  menu: {
    company: FooterMenuItem[];
    service: FooterMenuItem[];
  };
  companyInfo: CompanyInfoItem[];
}

// footer 데이터
export const FOOTER_DATA: FooterData = {
  companyInfo: [
    { label: "상호", value: "(주)에이치에스코리아" },
    { label: "주소", value: "경기도 하남시 신평로 84, 305호(신장동)" },
    { label: "사업자등록번호", value: "899-88-02008" },
    { label: "대표 전화", value: "1551-2474" },
  ],
  menu: {
    company: [
      { label: "회사 소개", href: "/about" },
      { label: "서비스 소개", href: "/service" },
      { label: "개인정보처리방침", href: "/" }, // 임시
    ],
    service: [
      { label: "견적 문의", href: "/inquiry/new" },
      { label: "문의 목록", href: "/inquiry" },
    ],
  },
};
