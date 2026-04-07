import { css } from "@/styled-system/css";
import { InquiryItem } from "../_types/inquiry";
import Badge from "@/components/ui/Badge/Badge";
import { useMaskedName } from "@/utils/maskName";
import { useRouter } from "next/navigation";

interface InquiryCardProps {
  item: InquiryItem;
}

// 문의내역 목록 카드
export default function InquiryCard({ item }: InquiryCardProps) {
  const router = useRouter();
  const { maskName } = useMaskedName();

  // 문의글 비밀번호 입력 페이지로 이동
  const handleClick = (id: number) => {
    router.push(`/inquiry/password/${id}`);
  };

  return (
    <div
      onClick={() => handleClick(item.id)}
      className={css({
        width: "100%",

        border: "1px solid",
        borderColor: "gray.200",
        borderRadius: "12px",

        shadow: "0px 1px 3px 0px #00000006",

        bg: "white",
        padding: "16px",

        display: "flex",
        flexDirection: "column",
        gap: "8px",
      })}
    >
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          No.
        </p>
        <p
          className={css({
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          {item.id}
        </p>
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          고객사명
        </p>
        <div
          className={css({
            display: "flex",
            gap: "8px",
            color: "gray.800",
            fontSize: "12px",
          })}
        >
          {item.companyName}
          {item.isNew && <Badge content="NEW" type="primary" size="small" />}
        </div>
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          고객명
        </p>
        <p
          className={css({
            color: "gray.800",
            fontSize: "12px",
          })}
        >
          {maskName(item.customerName)}
        </p>
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          서비스 유형
        </p>
        <Badge content={item.serviceType} />
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          이사예정일
        </p>
        <p
          className={css({
            color: "gray.800",
            fontSize: "12px",
          })}
        >
          {item.moveDate}
        </p>
      </div>
      <div
        className={css({
          display: "flex",
        })}
      >
        <p
          className={css({
            width: "80px",
            fontWeight: "bold",
            color: "gray.400",
            fontSize: "12px",
          })}
        >
          등록일
        </p>
        <p
          className={css({
            color: "gray.800",
            fontSize: "12px",
          })}
        >
          {item.createdAt}
        </p>
      </div>
    </div>
  );
}
