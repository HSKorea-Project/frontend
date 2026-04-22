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
            bg: "orange.50",
            borderBottom: "1px solid",
            borderColor: "orange.200",
            fontWeight: "bold",
          })}
        >
          <TableRow>
            <TableCell
              className={css({
                width: "70px",
                color: "orange.500",
              })}
            >
              No.
            </TableCell>
            <TableCell
              className={css({
                width: "200px",
                color: "orange.500",
              })}
            >
              고객사명
            </TableCell>
            <TableCell
              className={css({
                color: "orange.500",
              })}
            >
              고객명
            </TableCell>
            <TableCell
              className={css({
                color: "orange.500",
              })}
            >
              서비스 유형
            </TableCell>
            <TableCell
              className={css({
                color: "orange.500",
              })}
            >
              이사 예정일
            </TableCell>
            <TableCell
              className={css({
                color: "orange.500",
              })}
            >
              등록일
            </TableCell>
            <TableCell
              className={css({
                color: "orange.500",
              })}
            >
              접수 현황
            </TableCell>
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
