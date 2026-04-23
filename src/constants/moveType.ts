import OfficeIcon from "@/assets/svgs/building.svg";
import CommercialIcon from "@/assets/svgs/market.svg";
import LabIcon from "@/assets/svgs/flask.svg";
import SchoolIcon from "@/assets/svgs/school.svg";
import WarehouseIcon from "@/assets/svgs/box.svg";
import HospitalIcon from "@/assets/svgs/hospital.svg";
import FactoryIcon from "@/assets/svgs/industry.svg";
import HomeIcon from "@/assets/svgs/house.svg";

interface MoveType {
  label: string;
  value: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// 이사 유형
export const MOVE_TYPE: MoveType[] = [
  { label: "사무실/관공서 이사", value: "office_move", icon: OfficeIcon },
  { label: "상업시설이사", value: "commercial_move", icon: CommercialIcon },
  { label: "실험실이사", value: "lab_move", icon: LabIcon },
  { label: "학교이사", value: "school_move", icon: SchoolIcon },
  { label: "물류창고", value: "warehouse_move", icon: WarehouseIcon },
  { label: "병원이사", value: "hospital_move", icon: HospitalIcon },
  { label: "공장이사", value: "factory_move", icon: FactoryIcon },
  { label: "가정이사", value: "home_move", icon: HomeIcon },
];
