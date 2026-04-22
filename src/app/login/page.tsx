"use client";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { css } from "@/styled-system/css";
import { useRouter } from "next/navigation";
import { useState } from "react";

// 로그인
export default function LoginPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState<boolean>(false);

  // 로그인
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // API 연동
    if (id === "hskorea" && password === "hskorea123") {
      router.push("/inquiry");
    } else {
      setIsError(true);
    }
  }

  return (
    <div
      className={css({
        width: "100%",
        height: "100%",
        overflowY: "hidden",

        paddingX: "30px",

        background: "linear-gradient(to bottom right, #FEF7E6 0%, #FFFFFF 60%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "420px",
          overflowY: "hidden",

          border: "1px solid",
          borderColor: "orange.100",
          borderRadius: "16px",

          bg: "white",
          shadow: "0px 8px 32px 0px #00000010",

          px: { base: "30px", md: "40px" },
          py: { base: "30px", md: "48px" },

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
            rowGap: "24px",
          })}
        >
          <img
            src="/logo.svg"
            className={css({
              height: "100%",
            })}
          />
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "8px",
            })}
          >
            <h3
              className={css({
                fontWeight: "bold",
                color: "gray.900",
                fontSize: "24px",
              })}
            >
              관리자 로그인
            </h3>
            <p
              className={css({
                color: "gray.500",
                fontSize: "12px",
              })}
            >
              관리자 계정으로 로그인하세요
            </p>
          </div>
        </div>

        {/* 아이디/비밀번호 입력 폼 */}
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
            value={id}
            onChange={(e) => {
              setId(e.target.value);
              setIsError(false);
            }}
            type="text"
            label="아이디"
            aria-label="아이디 입력"
            required
            placeholder="아이디를 입력하세요"
            error={isError ? "존재하지 않는 아이디입니다" : undefined}
          />
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsError(false);
            }}
            type="password"
            label="비밀번호"
            aria-label="비밀번호 입력"
            required
            placeholder="비밀번호를 입력하세요"
            error={isError ? "비밀번호가 일치하지 않습니다" : undefined}
          />
          <Button
            fullWidth
            className={css({
              py: "12px",
            })}
            disabled={!id || !password}
          >
            로그인
          </Button>
        </form>

        <p
          className={css({
            color: "gray.500",
            fontSize: "12px",
          })}
        >
          관리자 계정 문의는 시스템 담당자에게 연락하세요
        </p>
      </div>
    </div>
  );
}
