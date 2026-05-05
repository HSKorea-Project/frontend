// 서비스 포함 여부 타입
export enum IncludeState {
  TRUE = "TRUE", // 포함
  FALSE = "FALSE", // 미포함
}

// 라벨링
export const IncludeStateLabel: Record<IncludeState, string> = {
  [IncludeState.TRUE]: "포함",
  [IncludeState.FALSE]: "미포함",
};

// 서비스 포함 여부 스타일
export const IncludeStateBadgeType: Record<IncludeState, "primary" | "gray"> = {
  [IncludeState.TRUE]: "primary",
  [IncludeState.FALSE]: "gray",
};

// 문의 상세 내역 타입 정의
export interface InquiryDetailItem {
  inquiryId: string; // 문의 번호(UUID)
  companyName: string; // 고객사명
  customerName: string; // 고객명
  phone: string; // 연락처
  serviceType: string; // 서비스 유형
  moveDate: string; // 이사 예정일
  createdAt: string; // 문의 등록일
  updatedAt: string | null; // 문의 수정일

  spaceInfo: string; // 평수 / 인원수
  wasteDisposal: boolean; // 폐기물 처리 여부
  acInstallation: boolean; // 에어컨 이전 설치 여부
  fileName: string | null; // 파일명
  fileUrl: string | null; // 파일 URL
  fromAddress: string; // 출발지 주소
  toAddress: string; // 도착지 주소
  contents: string | null; // 문의 내용
}
