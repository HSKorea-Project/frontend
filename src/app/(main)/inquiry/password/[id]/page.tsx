"use client";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { css } from "@/styled-system/css";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

// 문의내역 비밀번호 입력 페이지
export default function InquiryPasswordPage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const id = params.id;
  const [password, setPassword] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // 목록으로 이동
  const goToInquiryList = () => {
    router.push("/inquiry");
  };

  // 확인: 비밀번호 일치 시 이동
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 임시
    if (password === "1234") {
      router.push(`/inquiry/${id}`);
    } else {
      setIsError(true);
    }
  };

  return (
    <div
      className={css({
        width: "100%",
        height: "90dvh",

        paddingX: "30px",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "560px",
          maxHeight: "430px",
          height: { base: "75vh", md: "50vh" },
          overflowY: "hidden",

          border: "1px solid",
          borderColor: "gray.200",
          borderRadius: "16px",

          bg: "white",
          shadow: "0px 8px 32px 0px #00000010",

          p: { base: "30px", md: "80px" },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          rowGap: "36px",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "4px",

            width: "100%",
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
            비밀번호를 입력해 주세요
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
            이 게시글은 비밀글입니다.
          </p>
          <p
            className={css({
              color: "gray.500",
              fontSize: {
                base: "12px",
                md: "14px",
              },
            })}
          >
            비밀번호를 입력하면 내용을 확인할 수 있습니다.
          </p>
        </div>
        {/* 문의글 비밀번호 입력 폼 */}
        <form
          onSubmit={handleSubmit}
          className={css({
            width: "100%",

            display: "flex",
            flexDirection: "column",
            rowGap: "24px",
          })}
        >
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
            type="password"
            label="비밀번호"
            aria-label="비밀번호 확인"
            required
            placeholder="비밀번호를 입력하세요"
            error={isError ? "비밀번호가 일치하지 않습니다." : undefined}
          />
          <div
            className={css({
              display: "flex",
              columnGap: "12px",
            })}
          >
            <Button fullWidth type="button" variant="outline" onClick={goToInquiryList}>
              ← 목록으로
            </Button>
            <Button fullWidth type="submit" disabled={!password}>
              확인
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
