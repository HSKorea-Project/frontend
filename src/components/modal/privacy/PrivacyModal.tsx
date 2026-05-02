"use client";

import { css } from "@/styled-system/css";
import { useModalStore } from "@/stores/modalStore";
import BaseModal from "../BaseModal";
import CloseIcon from "@/assets/svgs/close.svg";
import { privacyIntro, privacySections } from "@/constants/privacy";
import { sectionTitleStyle, textStyle } from "./PrivacyModal.styles";
import PrivacyItemList from "./PrivacyItemList";

// PrivacyModal Props 타입 정의
type PrivacyModalProps = {
  modal: {
    onCancel?: () => void;
  };
};

// PrivacyModal(개인정보 수집 및 이용 동의 모달) 컴포넌트
export default function PrivacyModal({ modal }: PrivacyModalProps) {
  const { closeModal } = useModalStore();

  const handleClose = () => {
    modal.onCancel?.();
    closeModal();
  };

  return (
    <BaseModal onClose={handleClose}>
      <button
        type="button"
        onClick={handleClose}
        aria-label="닫기"
        className={css({
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifySelf: "flex-end",
          cursor: "pointer",
          marginBottom: "16px",
        })}
      >
        <CloseIcon className={css({ width: "12px", height: "12px" })} />
      </button>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          overflowY: "auto",
          maxHeight: "60vh",
        })}
      >
        <h2
          className={css({
            fontSize: "16px",
            fontWeight: "bold",
            color: "gray.900",
            textAlign: "center",
          })}
        >
          [개인정보 수집 및 이용 동의]
        </h2>

        <p className={textStyle}>{privacyIntro}</p>

        {privacySections.map((section) => (
          <section
            key={section.title}
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            })}
          >
            <p className={sectionTitleStyle}>{section.title}</p>

            {section.paragraphFirst ? (
              <>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className={textStyle}>
                    {paragraph}
                  </p>
                ))}

                {section.items && <PrivacyItemList items={section.items} />}
              </>
            ) : (
              <>
                {section.items && <PrivacyItemList items={section.items} />}

                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className={textStyle}>
                    {paragraph}
                  </p>
                ))}
              </>
            )}
          </section>
        ))}
      </div>
    </BaseModal>
  );
}
