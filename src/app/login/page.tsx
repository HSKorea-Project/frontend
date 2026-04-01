"use client";

import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { css } from "@/styled-system/css";
import { useState } from "react";

// 로그인
export default function Page() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  // 로그인
  function handleLogin() {
    // API 연동
  }

  return (
    <div
      className={css({
        width: "100%",
        height: "100%",
        overflowY: "hidden",

        paddingX: "30px",

        background: "linear-gradient(to bottom right, #F0FAF4 0%, #FFFFFF 60%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "560px",
          height: { base: "75vh", md: "65vh" },
          overflowY: "hidden",

          border: "1px solid",
          borderColor: "green.100",
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
          })}
        >
          <div
            className={css({
              width: "56px",
              height: "56px",

              bg: "green.100",
              borderRadius: "lg",

              fontSize: "24px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            🔐
          </div>
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
            관리자 로그인
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
            관리자 계정으로 로그인하세요
          </p>
        </div>

        {/* 아이디/비밀번호 입력 폼 */}
        <form
          className={css({
            width: "100%",

            display: "flex",
            flexDirection: "column",
            rowGap: "24px",
          })}
        >
          <Input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            label="아이디"
            required
            placeholder="아이디를 입력하세요"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            label="비밀번호"
            required
            placeholder="비밀번호를 입력하세요"
          />
          <Button
            onClick={handleLogin}
            fullWidth
            className={css({
              py: "12px",
            })}
          >
            로그인
          </Button>
        </form>

        <p
          className={css({
            color: "gray.500",
            fontSize: { base: "12px", md: "14px" },
          })}
        >
          관리자 계정 문의는 시스템 담당자에게 연락하세요
        </p>
      </div>
    </div>
  );
}
