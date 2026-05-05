"use client";

import Badge from "@/components/ui/Badge/Badge";
import TableCell from "./TableCell";
import { InquiryItem, InquiryStateBadgeType, InquiryStateLabel } from "../_types/inquiry";
import { css } from "@/styled-system/css";
import { useMaskedName } from "@/utils/maskName";
import { useRouter } from "next/navigation";
import TableRow from "./TableRow";

// 문의내역 테이블 행 props 타입 정의
interface InquiryTableRowProps {
  item: InquiryItem;
}

// 문의내역 테이블 행 UI + 로직
export default function InquiryTableRow({ item }: InquiryTableRowProps) {
  const router = useRouter();
  const { maskName } = useMaskedName();

  // 문의글 비밀번호 입력 페이지로 이동
  const handleClick = (id: number) => {
    router.push(`/inquiry/password/${id}`);
  };

  return (
    <TableRow
      onClick={() => handleClick(item.id)}
      className={css({
        cursor: "pointer",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "gray.200",
        _hover: {
          bg: "orange.50",
        },
      })}
    >
      <TableCell
        className={css({
          color: "gray.400",
        })}
      >
        {item.id}
      </TableCell>
      <TableCell
        className={css(
          item.isNew && {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "4px",
          }
        )}
      >
        {item.companyName}
        {item.isNew && <Badge content="NEW" size="small" type="full" />}
      </TableCell>
      <TableCell>{maskName(item.customerName)}</TableCell>
      <TableCell
        className={css({
          display: "flex",
          justifyContent: "center",
        })}
      >
        <Badge content={item.serviceType} />
      </TableCell>
      <TableCell>{item.moveDate}</TableCell>
      <TableCell>{item.createdAt}</TableCell>
      <TableCell
        className={css({
          display: "flex",
          justifyContent: "center",
        })}
      >
        <Badge content={InquiryStateLabel[item.state]} type={InquiryStateBadgeType[item.state]} />
      </TableCell>
    </TableRow>
  );
}
