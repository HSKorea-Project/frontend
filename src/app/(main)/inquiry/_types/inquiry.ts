// 문의내역 목록 한 행 타입 정의
export interface InquiryItem {
  id: number; // 번호
  companyName: string; // 고객사명
  customerName: string; // 고객명
  serviceType: string; // 서비스 유형
  moveDate: string; // 이사 예정일
  createdAt: string; // 문의 등록일
  isNew?: boolean; // 새 문의글 여부
}
