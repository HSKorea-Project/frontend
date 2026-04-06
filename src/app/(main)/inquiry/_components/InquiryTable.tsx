import { css } from "@/styled-system/css";
import { InquiryItem } from "../_types/inquiry";
import InquiryTableRow from "./InquiryTableRow";
import TableCell from "./TableCell";
import TableRow from "./TableRow";

interface InquiryTableProps {
  data: InquiryItem[];
}

// 문의내역 목록
export default function InquiryTable({ data }: InquiryTableProps) {
  return (
    <div
      className={css({
        width: "100%",
        height: "fit",

        border: "1px solid",
        borderRadius: "lg",
        borderColor: "gray.200",

        overflow: "hidden",

        shadow: "0px 1px 3px 0px #00000006",
      })}
    >
      <table
        className={css({
          width: "100%",
        })}
      >
        {/* Table Header */}
        <thead
          className={css({
            bg: "green.50",
            borderBottom: "1.5px solid",
            borderColor: "green.300",

            fontWeight: "bold",
            color: "green.700",
          })}
        >
          <TableRow>
            <TableCell
              className={css({
                width: "94px",
              })}
            >
              No.
            </TableCell>
            <TableCell
              className={css({
                width: "250px",
              })}
            >
              고객사명
            </TableCell>
            <TableCell>고객명</TableCell>
            <TableCell>서비스 유형</TableCell>
            <TableCell>이사 예정일</TableCell>
            <TableCell>등록일</TableCell>
          </TableRow>
        </thead>

        {/* Table Body */}
        <tbody
          className={css({
            bg: "white",
          })}
        >
          {data.map((item) => (
            <InquiryTableRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
