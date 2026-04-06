"use client";

import { css } from "@/styled-system/css";
import InquiryTable from "./_components/InquiryTable";
import InquirySearchBar from "./_components/InquirySearchBar";
import { useState } from "react";
import { InquiryItem } from "./_types/inquiry";
import Pagination from "./_components/Pagination";
import { inquiryMockData } from "@/constants/mocks/InquiryMockData";

// 문의내역
export default function InquiryListPage() {
  const ITEMS_PER_PAGE = 10;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // 검색 필터 로직: 고객사명이나 고객명에 검색어가 포함되어 있으면 반환
  const filterData: InquiryItem[] = inquiryMockData.filter((item) => {
    return item.companyName.includes(search) || item.customerName.includes(search);
  });

  // 페이지네이션 데이터
  const paginatedData = filterData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // 총 페이지 수
  const totalPages = Math.ceil(filterData.length / ITEMS_PER_PAGE);

  return (
    <div
      className={css({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr minmax(300px, 1052px) 1fr",
      })}
    >
      <div />
      {/* 문의 목록 */}
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          rowGap: "28px",
          paddingY: "48px",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
          })}
        >
          {/* 제목 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            })}
          >
            <h3
              className={css({
                fontWeight: "bold",
                color: "gray.900",
                fontSize: {
                  base: "20px",
                  md: "22px",
                },
              })}
            >
              견적 문의 목록
            </h3>
            <p
              className={css({
                color: "gray.500",
                fontSize: {
                  base: "12px",
                  md: "14px",
                },
              })}
            >
              총 183건의 문의가 있습니다
            </p>
          </div>
          {/* 검색 */}
          <InquirySearchBar value={search} onChange={setSearch} />
        </div>

        {/* 문의내역 목록 */}
        <div
          className={css({
            height: "535px",
          })}
        >
          <InquiryTable data={paginatedData} />
        </div>

        {/* 페이지네이션 */}
        <div
          className={css({
            width: "100%",
            display: "flex",
            justifyContent: "center",
          })}
        >
          <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
        </div>
      </div>
      <div />
    </div>
  );
}
