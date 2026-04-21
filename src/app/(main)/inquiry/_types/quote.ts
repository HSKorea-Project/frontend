// 폼 입력 타입 정의
export interface QuoteForm {
  clientCompany: string;
  clientName: string;
  agency: string;
  clientContact: string;
  certification: string;

  square: string;
  moveDate: Date | null;
  moveType: string;
  origin: string;
  originDetail: string;
  destination: string;
  destinationDetail: string;
  inquiry: string;
  waste: "included" | "excluded";
  airconditioner: "included" | "excluded";

  password: string;
  confirmPassword: string;

  privacy: boolean;
}
