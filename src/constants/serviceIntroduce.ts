import OfficeIcon from "@/assets/svgs/building.svg";
import ToolIcon from "@/assets/svgs/tool.svg";
import SchoolIcon from "@/assets/svgs/school.svg";
import BoxIcon from "@/assets/svgs/box.svg";
import PaperIcon from "@/assets/svgs/paper.svg";

interface ServiceIntroduceType {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

// 서비스 소개 페이지 아이템
export const SERVICE_INTRODUCES: ServiceIntroduceType[] = [
  {
    title: "기업이사",
    description:
      "기업 환경에 맞춘 맞춤형 이전 서비스를 통해 업무 공백을 최소화하고 안정적인 이전을 제공합니다.",
    icon: OfficeIcon,
  },
  {
    title: "장비 / 중량물 이전",
    description: "정밀 장비 및 중요 설비를 안전하게 포장·운송·설치하여 현장 리스크를 최소화합니다.",
    icon: ToolIcon,
  },
  {
    title: "관공서·교육기관 이전",
    description:
      "공공기관 및 교육시설의 특성을 고려한 체계적인 일정 관리와 안정적인 작업을 수행합니다.",
    icon: SchoolIcon,
  },
  {
    title: "도서관 이전",
    description: "도서 분류 체계를 유지하며 이전하여 정확한 재배치와 효율적인 운영을 지원합니다.",
    icon: SchoolIcon,
  },
  {
    title: "문서보관",
    description: "중요 문서를 안전하게 보관할 수 있는 체계적인 보관 시스템을 제공합니다.",
    icon: BoxIcon,
  },
  {
    title: "창고보관",
    description: "기업 자산 및 물품을 안전하게 보관할 수 있는 효율적인 공간 운영을 제공합니다.",
    icon: PaperIcon,
  },
];
