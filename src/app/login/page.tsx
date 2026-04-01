import { css } from "@/styled-system/css";

// 로그인
export default function Page() {
  return (
    <div
      className={css({
        width: "100%",
        height: "100%",
        overflowY: "hidden",

        background: "linear-gradient(to bottom right, #F0FAF4 0%, #FFFFFF 60%)",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "420px",
          height: "80vh",
          overflowY: "hidden",

          border: "1px solid",
          borderColor: "green.100",
          borderRadius: "16px",

          bg: "white",
          shadow: "0px 8px 32px 0px #00000010",
        })}
      ></div>
    </div>
  );
}
