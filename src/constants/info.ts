import OfficeIcon from "@/assets/svgs/building.svg";
import ChairIcon from "@/assets/svgs/chair.svg";
import CallIcon from "@/assets/svgs/call.svg";
import WarehouseIcon from "@/assets/svgs/box.svg";
import TruckIcon from "@/assets/svgs/truck.svg";

// 기업 정보 타입
interface CompanyInfoType {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// 기업 정보
export const INFOS: CompanyInfoType[] = [
  { label: "회사명", value: "주식회사 에이치에스코리아", icon: OfficeIcon },
  { label: "대표 전화", value: "1551-2474", icon: CallIcon },
  { label: "사무실", value: "경기도 하남시", icon: ChairIcon },
  { label: "직영 창고", value: "경기도 남양주시 / 구리시", icon: WarehouseIcon },
  {
    label: "주요 사업",
    value: "기업이사, 장비이전, 문서보관, 문서폐기, 창고보관",
    icon: TruckIcon,
  },
];
