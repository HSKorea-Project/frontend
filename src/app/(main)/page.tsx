import Button from "@/components/ui/Button/Button";
import SectionTitle from "@/components/ui/SectionTitle/SectionTitle";
import { MOVE_TYPE } from "@/constants/moveType";
import { css } from "@/styled-system/css";
import Link from "next/link";
import ServiceCard from "../../components/ui/ServiceCard/ServiceCard";
import { REASONS } from "@/constants/reason";
import { PROCESS_STEP } from "@/constants/processStep";
import { INFOS } from "@/constants/info";
import RightWingIcon from "@/assets/svgs/right-wing.svg";
import OrangeCircle from "@/assets/svgs/orange-circle.svg";
import WhiteCircle from "@/assets/svgs/white-circle.svg";
import CallCircle from "@/assets/svgs/call-circle.svg";

// 온보딩 페이지
export default function Onboarding() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        width: "100%",
      })}
    >
      {/* 배너 */}
      <section
        className={css({
          display: "flex",
          position: "relative",
          justifyContent: { base: "start", md: "center" },
          width: "100%",
          height: "400px",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
          background:
            "linear-gradient(135deg, rgba(10, 31, 92, 0.90) 0%, rgba(26, 58, 140, 0.90) 55%, rgba(10, 31, 92, 0.90) 100%)",
        })}
      >
        <OrangeCircle
          className={css({
            position: "absolute",
            right: 0,
            top: -10,
          })}
        />
        <WhiteCircle
          className={css({
            position: "absolute",
            right: 20,
            bottom: -10,
          })}
        />
        <article
          className={css({
            width: "100%",
            maxWidth: "980px",
          })}
        >
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              rowGap: "16px",
              width: "100%",
              maxWidth: { base: "100%", md: "350px" },
            })}
          >
            {/* 제목 */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
              })}
            >
              <p
                className={css({
                  color: "white",
                  fontSize: { base: "20px", md: "24px" },
                })}
              >
                기업이전의 시작과 끝
              </p>
              <h1
                className={css({
                  fontWeight: "bold",
                  color: "orange.400",
                  fontSize: { base: "28px", md: "32px" },
                })}
              >
                에이치에스코리아
              </h1>
            </div>
            <p
              className={css({
                fontSize: "12px",
                color: "white",
                opacity: "80",
              })}
            >
              사무실 이전부터 장비 운송, 문서보관, 폐기까지
              <br />
              기업 운영에 필요한 모든 이전 서비스를 안전하고 체계적으로 수행합니다.
            </p>
            <p
              className={css({
                display: "flex",
                alignItems: "center",
                columnGap: "4px",
                fontWeight: "semibold",
                fontSize: "12px",
                color: "white",
                opacity: "80",
              })}
            >
              <CallCircle />
              전화상담 : 1551-2474
            </p>
            <Link href="/inquiry/new">
              <Button
                fullWidth
                className={css({
                  fontWeight: "bold",
                })}
              >
                무료견적 문의하기
              </Button>
            </Link>
          </div>
        </article>
        {/* 서비스 소개 */}
        <article></article>
      </section>

      {/* 주요 서비스 */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "24px",
          bg: "white",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
        })}
      >
        <SectionTitle align="center" gap={24} barWidth={50}>
          주요 서비스
        </SectionTitle>
        <article
          className={css({
            width: "100%",
            maxWidth: "980px",
            display: "grid",
            gridTemplateColumns: { base: "1fr", md: "1fr 1fr" },
            gap: { base: "10px", md: "20px" },
          })}
        >
          {MOVE_TYPE.map((item, idx) => (
            <ServiceCard key={idx} borderColor="gray" align="center" icon={item.icon}>
              <p
                className={css({
                  color: "gray.900",
                  fontWeight: "bold",
                  fontSize: "16px",
                })}
              >
                {item.label}
              </p>
            </ServiceCard>
          ))}
        </article>
      </section>
      {/* 왜 에이치에스코리아인가 */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "32px",
          bg: "#F4F6FA",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
        })}
      >
        <SectionTitle align="center" gap={32} barWidth={50}>
          왜 에이치에스코리아인가?
        </SectionTitle>
        <article
          className={css({
            display: "grid",
            gridTemplateColumns: {
              lg: "1fr",
              xl: "minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr)",
            },
            gap: { base: "10px", md: "20px" },
            width: "100%",
            maxWidth: "980px",
          })}
        >
          {REASONS.map((reason, idx) => (
            <div
              key={idx}
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "12px",
                bg: "white",
                border: "1px solid",
                borderColor: "gray.300",
                borderRadius: "8px",
                p: "32px",
                width: "100%",
              })}
            >
              <div
                className={css({
                  bg: "orange.400",
                  borderRadius: "4px",
                  paddingX: "8px",
                  paddingY: "4px",
                  color: "orange.50",
                  fontSize: "12px",
                  fontWeight: "bold",
                  width: "fit",
                  height: "fit",
                })}
              >
                REASON {String(idx + 1).padStart(2, "0")}
              </div>
              <h3
                className={css({
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "gray.900",
                })}
              >
                {reason.title}
              </h3>
              <p
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  color: "gray.700",
                  fontSize: "12px",
                })}
              >
                {reason.description.map((desc, idx) => (
                  <span key={idx}>{desc}</span>
                ))}
              </p>
            </div>
          ))}
        </article>
      </section>

      {/* 작업 프로세스 */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "24px",
          bg: "#0A1F5C",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
        })}
      >
        <SectionTitle align="center" gap={24} barWidth={50} color="white">
          체계적인 작업 프로세스
        </SectionTitle>
        <article
          className={css({
            display: "flex",
            width: "100%",
            flexDirection: { base: "column", xl: "row" },
            justifyContent: "center",
            rowGap: { base: "20px", xl: "0px" },
          })}
        >
          {PROCESS_STEP.map((step, idx) => (
            <div
              key={idx}
              className={css({
                display: "flex",
                alignItems: "center",
                columnGap: "4px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  columnGap: "8px",
                  justifyContent: "center",
                  alignItems: "center",
                })}
              >
                <p
                  className={css({
                    display: "flex",
                    width: "32px",
                    height: "32px",
                    border: "2px solid",
                    borderColor: "orange.400",
                    borderRadius: "full",
                    color: "orange.400",
                    fontSize: "12px",
                    fontWeight: "bold",
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  {idx + 1}
                </p>
                <p
                  className={css({
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "semibold",
                    alignItems: "center",
                    justifyContent: "center",
                  })}
                >
                  {step}
                </p>
              </div>
              {/* 마지막 제외 */}
              {idx !== PROCESS_STEP.length - 1 && (
                <RightWingIcon
                  width={24}
                  height={24}
                  className={css({
                    display: { base: "none", xl: "block" },
                    marginX: "4px",
                  })}
                />
              )}
            </div>
          ))}
        </article>
      </section>

      {/* CTA */}
      <section
        className={css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "24px",
          bg: "orange.400",
          paddingX: { base: "20px", md: "150px" },
          paddingY: "40px",
        })}
      >
        <SectionTitle align="center" gap={24} color="white" showBar={false}>
          기업이사, 기관 이전, 보관까지 한 번에 해결하세요!
        </SectionTitle>
        <p
          className={css({
            color: "white",
            fontSize: "16px",
          })}
        >
          지금 바로 무료로 견적을 받아보세요.
        </p>
        <article
          className={css({
            display: "grid",
            gridTemplateColumns: {
              md: "1fr",
              lg: "minmax(300px, 1fr) minmax(300px, 1fr) minmax(300px, 1fr)",
            },
            gap: { base: "10px", md: "20px" },
            width: "100%",
            maxWidth: "980px",
          })}
        >
          {INFOS.slice(1, 4).map((info, idx) => (
            <div
              key={idx}
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "8px",
                color: "white",
                border: "1px solid",
                borderColor: "white/30",
                p: "16px",
                borderRadius: "8px",
                bg: "white/20",
              })}
            >
              <p
                className={css({
                  fontSize: "12px",
                  fontWeight: "semibold",
                })}
              >
                {info.label}
              </p>
              <p
                className={css({
                  fontSize: "16px",
                  fontWeight: "bold",
                })}
              >
                {info.value}
              </p>
            </div>
          ))}
        </article>
        <Link
          href="/inquiry/new"
          className={css({
            width: { base: "100%", md: "300px" },
          })}
        >
          <Button
            fullWidth
            variant="white"
            className={css({
              width: "100%",
            })}
          >
            온라인 문의하기
          </Button>
        </Link>
      </section>
    </div>
  );
}
