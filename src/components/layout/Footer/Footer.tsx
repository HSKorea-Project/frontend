import { css } from "@/styled-system/css";
import LogoIcon from "@/assets/svgs/logo.svg";
import Link from "next/link";

interface InfoType {
  label: string;
  value: string;
}

interface FooterInfoType {
  info: InfoType[];
  company: InfoType[];
  service: InfoType[];
}

export const FOOTER_INFO: FooterInfoType = {
  info: [
    { label: "상호", value: "(주)에이치에스코리아" },
    { label: "주소", value: "경기도 하남시 신평로 84, 305호(신장동)" },
    { label: "사업자등록번호", value: "899-88-02008" },
    { label: "대표 전화", value: "1551-2474" },
  ],
  company: [
    { label: "회사 소개", value: "/about" },
    { label: "서비스 소개", value: "/service" },
    { label: "개인정보처리방침", value: "/" }, // 임시
  ],
  service: [
    { label: "견적 문의", value: "/inquiry/new" },
    { label: "문의 목록", value: "/inquiry" },
  ],
};

// Footer
export default function Footer() {
  return (
    <footer
      className={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
      })}
    >
      <section
        className={css({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bg: "gray.800",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
        })}
      >
        <div
          className={css({
            bg: "gray.800",
            width: "100%",
            maxWidth: "980px",
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "1fr 1fr 1fr" },
            gap: { base: "24px", md: "40px" },
          })}
        >
          <article
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            })}
          >
            <LogoIcon
              className={css({
                fill: "white",
              })}
            />
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "4px",
              })}
            >
              {FOOTER_INFO.info.map((info, idx) => (
                <p
                  key={idx}
                  className={css({
                    color: "white/80",
                    fontSize: "12px",
                  })}
                >
                  {info.label} : {info.value}
                </p>
              ))}
            </div>
          </article>
          <article
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
              })}
            >
              <p
                className={css({
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "semibold",
                  letterSpacing: "1px",
                })}
              >
                COMPANY
              </p>
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "12px",
                })}
              >
                {FOOTER_INFO.company.map((c, idx) => (
                  <Link
                    key={idx}
                    href={c.value}
                    className={css({
                      color: "white/80",
                      fontSize: "12px",
                    })}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
          <article
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            })}
          >
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "16px",
              })}
            >
              <p
                className={css({
                  color: "white",
                  fontSize: "12px",
                  fontWeight: "semibold",
                  letterSpacing: "1px",
                })}
              >
                SERVICE
              </p>
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "12px",
                })}
              >
                {FOOTER_INFO.service.map((s, idx) => (
                  <Link
                    key={idx}
                    href={s.value}
                    className={css({
                      color: "white/80",
                      fontSize: "12px",
                    })}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>
      <section
        className={css({
          bg: "gray.900",
          paddingY: "16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <p
          className={css({
            width: "fit",
            color: "gray.500",
            fontSize: "12px",
          })}
        >
          © (주)에이치에스코리아. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
