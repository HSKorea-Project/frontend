// 다음 주소 검색 결과 데이터 타입
export interface DaumPostcodeData {
  zonecode: string;
  address: string;
  roadAddress: string;
  jibunAddress: string;
  userSelectedType: "R" | "J";
  bname: string;
  buildingName: string;
  apartment: "Y" | "N";
}

// 다음 주소 검색 생성자 옵션 타입
interface DaumPostcodeOptions {
  oncomplete: (data: DaumPostcodeData) => void;
}

// 다음 주소 검색 인스턴스 타입
interface DaumPostcodeInstance {
  open: () => void;
}

// 다음 주소 검색 전역 객체 타입 확장
declare global {
  interface Window {
    daum?: {
      Postcode: new (options: DaumPostcodeOptions) => DaumPostcodeInstance;
    };
  }
}
