"use client";

import { css } from "@/styled-system/css";
import { useState } from "react";
import Icon from "@/components/ui/Icon/Icon";
import Input from "@/components/ui/Input/Input";
import Button from "@/components/ui/Button/Button";
import CheckBox from "@/components/ui/CheckBox/CheckBox";
import Dropdown from "@/components/ui/Dropdown/Dropdown";
import Textarea from "@/components/ui/Textarea/Textarea";
import Radio from "@/components/ui/Radio/Radio";
import Upload from "./_components/Upload";

// 견적문의
export default function QuoteInquiryPage() {
  const [clientCompany, setClientCompany] = useState("");
  const [clientName, setClientName] = useState("");
  const [agency, setAgency] = useState("");
  const [clientContact, setClientContact] = useState("");
  const [certification, setCertification] = useState("");

  const [square, setSquare] = useState("");
  const [moveDate, setMoveDate] = useState("");
  const [moveType, setMoveType] = useState("");
  const [origin, setOrigin] = useState("");
  const [originDetail, setOriginDetail] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationDetail, setDestinationDetail] = useState("");
  const [inquiry, setInquiry] = useState("");
  const [waste, setWaste] = useState<"included" | "excluded">("excluded");
  const [airconditioner, setAirconditioner] = useState<"included" | "excluded">("excluded");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [privacy, setPrivacy] = useState(false);

  // const isMobile = useIsMobile();

  const handlePrivacyChange = () => {
    setPrivacy((prev) => !prev);
  };

  return (
    <div
      className={css({
        width: "100%",
        display: "grid",
        gridTemplateColumns: "minmax(20px, 1fr) minmax(300px, 650px) minmax(20px, 1fr)",
      })}
    >
      <div />
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          paddingY: "40px",
          width: "full",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            rowGap: "24px",
            width: "full",
          })}
        >
          {/* 제목 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            })}
          >
            <h3
              className={css({
                fontWeight: "bold",
                color: "gray.900",
                fontSize: {
                  base: "24px",
                },
              })}
            >
              이사 견적을 문의하세요
            </h3>
            <p
              className={css({
                color: "gray.500",
                fontSize: {
                  base: "12px",
                },
              })}
            >
              아래 양식을 작성하시면 빠른 시일 내에 견적을 안내해 드립니다.
              <br />* 표시 항목은 필수 입력 사항입니다.
            </p>
          </div>

          {/* 정보 입력 섹션 */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              rowGap: "16px",
            })}
          >
            {/* 고객 정보 */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                padding: {
                  base: "16px",
                  md: "32px",
                },
                backgroundColor: "white",
                rounded: "16px",
                width: "full",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  height: "30px",
                  borderBottom: "1px solid",
                  borderColor: "green.50",
                })}
              >
                <p
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "green.700",
                    fontSize: { base: "16px" },
                  })}
                >
                  <Icon name="user" />
                  고객 정보
                </p>
              </div>
              <Input
                value={clientCompany}
                onChange={(e) => setClientCompany(e.target.value)}
                label="고객사명"
                required
                placeholder="회사명 또는 기관명을 입력하세요"
              />
              <Input
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                label="고객명"
                required
                placeholder="담당자 이름을 입력하세요"
              />

              <div className={css({ display: "flex", flexDirection: "column", gap: "8px" })}>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: {
                      base: "column",
                      md: "row",
                    },
                    gap: "8px",
                    justifyContent: "center",
                    alignItems: "end",
                    width: "100%",
                  })}
                >
                  <div
                    className={css({
                      display: "flex",
                      flexDirection: {
                        base: "column",
                        md: "row",
                      },
                      gap: "8px",
                      alignItems: "end",
                      width: "100%",
                    })}
                  >
                    <Dropdown
                      value={agency}
                      onChange={(val) => setAgency(val)}
                      placeholder="통신사"
                      options={[
                        { label: "KT", value: "kt" },
                        { label: "SKT", value: "skt" },
                        { label: "LG U+", value: "lg" },
                        { label: "알뜰폰 KT", value: "al_kt" },
                        { label: "알뜰폰 SKT", value: "al_skt" },
                        { label: "알뜰폰 LG U+", value: "al_lg" },
                      ]}
                      className={css({
                        position: "relative",
                        width: {
                          base: "100%",
                          md: "120px",
                        },
                      })}
                      label="통신사"
                      required
                    />
                    <Input
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="010-0000-0000"
                      className={css({
                        width: "stretch",
                      })}
                    />
                  </div>

                  <Button
                    variant="primary"
                    disabled={!clientContact}
                    className={css({ height: "44px", width: { base: "stretch", md: "auto" } })}
                  >
                    인증
                  </Button>
                </div>

                <div
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    justifyContent: "center",
                    alignItems: "end",
                  })}
                >
                  <Input
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                    placeholder="인증번호 입력"
                  />
                  <Button
                    variant="primary"
                    disabled={!certification}
                    className={css({ height: "44px" })}
                  >
                    확인
                  </Button>
                </div>
              </div>
            </div>

            {/* 문의 정보 */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                padding: {
                  base: "16px",
                  md: "32px",
                },
                backgroundColor: "white",
                rounded: "16px",
                width: "full",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  height: "30px",
                  borderBottom: "1px solid",
                  borderColor: "green.50",
                })}
              >
                <p
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "green.700",
                    fontSize: { base: "16px" },
                  })}
                >
                  <Icon name="info" />
                  문의 정보
                </p>
              </div>

              <div
                className={css({
                  display: "flex",
                  flexDirection: { base: "column", md: "row" },
                  gap: "20px",
                })}
              >
                <Input
                  value={square}
                  onChange={(e) => setSquare(e.target.value)}
                  label="평수 / 인원 수"
                  required
                  placeholder="예: 50평 / 30명"
                />

                <Input
                  value={moveDate}
                  onChange={(e) => setMoveDate(e.target.value)}
                  label="이사 예정일"
                  required
                  placeholder="이사 예정일 입력"
                />
              </div>

              <Dropdown
                value={moveType}
                onChange={(val) => setMoveType(val)}
                label="이사 서비스"
                required
                placeholder="서비스 유형을 선택하세요"
                options={[
                  { label: "사무실/관공서 이사", value: "office_move" },
                  { label: "학교이사", value: "school_move" },
                  { label: "물류창고", value: "warehouse_move" },
                  { label: "병원이사", value: "hospital_move" },
                  { label: "실험실이사", value: "lab_move" },
                  { label: "공장이사", value: "factory_move" },
                  { label: "상업시설이사", value: "commercial_move" },
                  { label: "가정이사", value: "home_move" },
                ]}
              />

              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                })}
              >
                <Input
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  label="출발지 주소"
                  required
                  placeholder="주소 검색"
                />
                <Input
                  value={originDetail}
                  onChange={(e) => setOriginDetail(e.target.value)}
                  placeholder="상세주소 입력 (선택)"
                />
              </div>

              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                })}
              >
                <Input
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  label="도착지 주소"
                  required
                  placeholder="주소 검색"
                />
                <Input
                  value={destinationDetail}
                  onChange={(e) => setDestinationDetail(e.target.value)}
                  placeholder="상세주소 입력 (선택)"
                />
              </div>

              <Textarea
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                label="문의 내용"
                placeholder="추가 문의사항이 있으시면 입력해 주세요"
              />

              <div
                className={css({
                  display: "flex",
                  flexDirection: { base: "column", md: "row" },
                  gap: "16px",
                })}
              >
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                  })}
                >
                  <p
                    className={css({ fontWeight: "regular", fontSize: "12px", color: "gray.700" })}
                  >
                    폐기물 처리
                  </p>
                  <div className={css({ display: "flex", gap: "16px" })}>
                    <Radio
                      label="미포함"
                      checked={waste === "excluded"}
                      onClick={() => setWaste("excluded")}
                    />
                    <Radio
                      label="포함"
                      checked={waste === "included"}
                      onClick={() => setWaste("included")}
                    />
                  </div>
                </div>
                <div
                  className={css({
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    width: "100%",
                  })}
                >
                  <p
                    className={css({ fontWeight: "regular", fontSize: "12px", color: "gray.700" })}
                  >
                    에어컨 이전 설치
                  </p>
                  <div className={css({ display: "flex", gap: "16px" })}>
                    <Radio
                      label="미포함"
                      checked={airconditioner === "excluded"}
                      onClick={() => setAirconditioner("excluded")}
                    />
                    <Radio
                      label="포함"
                      checked={airconditioner === "included"}
                      onClick={() => setAirconditioner("included")}
                    />
                  </div>
                </div>
              </div>
              <Upload label="파일 업로드" />
            </div>

            {/* 게시물 비밀번호 */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                padding: {
                  base: "16px",
                  md: "32px",
                },
                backgroundColor: "white",
                rounded: "16px",
                width: "full",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  height: "30px",
                  borderBottom: "1px solid",
                  borderColor: "green.50",
                })}
              >
                <p
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "green.700",
                    fontSize: { base: "16px" },
                  })}
                >
                  <Icon name="password" /> 게시물 비밀번호
                </p>
              </div>
              <p
                className={css({
                  fontWeight: "regular",
                  color: "gray.500",
                  fontSize: { base: "12px" },
                  wordBreak: "keep-all",
                })}
              >
                문의 내역 확인 시 사용할 비밀번호를 설정해 주세요. (4자리 이상)
              </p>
              <div
                className={css({
                  display: "flex",
                  flexDirection: {
                    base: "column",
                    md: "row",
                  },
                  gap: "16px",
                })}
              >
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="비밀번호"
                  required
                  placeholder="비밀번호를 입력하세요"
                />
                <Input
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  label="비밀번호 확인"
                  required
                  placeholder="비밀번호를 다시 입력하세요"
                />
              </div>
            </div>

            {/* 약관 동의 */}
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                padding: {
                  base: "16px",
                  md: "32px",
                },
                backgroundColor: "white",
                rounded: "16px",
                width: "full",
                border: "1px solid",
                borderColor: "gray.200",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                  height: "30px",
                  borderBottom: "1px solid",
                  borderColor: "green.50",
                })}
              >
                <p
                  className={css({
                    display: "flex",
                    flexDirection: "row",
                    gap: "8px",
                    alignItems: "center",
                    fontWeight: "bold",
                    color: "green.700",
                    fontSize: { base: "16px" },
                  })}
                >
                  <Icon name="confirm" />
                  약관 동의
                </p>
              </div>

              <div
                className={css({
                  display: "flex",
                  flexDirection: "row",
                  gap: "8px",
                  alignItems: "center",
                  py: "12px",
                  px: "16px",
                  bg: "gray.50",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "gray.200",
                })}
              >
                <CheckBox checked={privacy} onClick={() => handlePrivacyChange()} />
                <p
                  className={css({
                    fontWeight: "regular",
                    color: "gray.700",
                    fontSize: { base: "12px" },
                  })}
                >
                  개인정보 수집 및 이용에 동의합니다.
                </p>
                <p
                  className={css({
                    color: "green.600",
                    textDecoration: "underline",
                    fontSize: { base: "12px" },
                  })}
                >
                  [상세보기]
                </p>
              </div>

              <hr
                className={css({
                  height: "1px",
                  bg: "gray.200",
                  border: "none",
                })}
              />

              <p
                className={css({
                  fontWeight: "regular",
                  color: "gray.500",
                  fontSize: { base: "12px" },
                  textAlign: "center",
                })}
              >
                문의 내용은 담당자 검토 후 빠른 시일 내 연락드립니다.
              </p>

              <Button
                variant="primary"
                fullWidth
                className={css({ maxWidth: "200px", marginX: "auto" })}
              >
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
