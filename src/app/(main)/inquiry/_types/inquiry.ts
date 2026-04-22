// 접수 현황 타입
export enum InquiryState {
  PENDING = "PENDING", // 접수 대기
  COMPLETED = "COMPLETED", // 접수 완료
  CANCELED = "CANCELED", // 접수 취소
}

// 라벨링
export const InquiryStateLabel: Record<InquiryState, string> = {
  [InquiryState.PENDING]: "접수 대기",
  [InquiryState.COMPLETED]: "접수 완료",
  [InquiryState.CANCELED]: "접수 취소",
};

// 현황별 뱃지 스타일
export const InquiryStateBadgeType: Record<InquiryState, "primary" | "gray" | "red"> = {
  [InquiryState.PENDING]: "gray",
  [InquiryState.COMPLETED]: "primary",
  [InquiryState.CANCELED]: "red",
};

// 문의내역 목록 한 행 타입 정의
export interface InquiryItem {
  id: number; // 번호
  companyName: string; // 고객사명
  customerName: string; // 고객명
  serviceType: string; // 서비스 유형
  moveDate: string; // 이사 예정일
  createdAt: string; // 문의 등록일
  state: InquiryState; // 접수 현황
  isNew?: boolean; // 새 문의글 여부
}
