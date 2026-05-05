"use client";

import { css } from "@/styled-system/css";
import { useModalStore } from "@/stores/modalStore";
import BaseModal from "./BaseModal";
import Button from "../ui/Button/Button";

// DeleteModal Props 타입 정의
type DeleteModalProps = {
  modal: {
    title?: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
};

// DeleteModal(견적 문의 삭제 확인 모달) 컴포넌트
export default function DeleteModal({ modal }: DeleteModalProps) {
  const { closeModal } = useModalStore();

  const handleCancel = () => {
    try {
      modal.onCancel?.();
    } finally {
      closeModal();
    }
  };

  const handleConfirm = () => {
    try {
      modal.onConfirm?.();
    } finally {
      closeModal();
    }
  };

  return (
    <BaseModal onClose={handleCancel}>
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "20px",
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
          이사 견적 문의를 삭제하시겠습니까?
        </h2>

        <p
          className={css({
            fontSize: "12px",
            fontWeight: "regular",
            color: "gray.700",
            textAlign: "center",
          })}
        >
          삭제 후에는 문의 내역 복구가 어렵습니다.
        </p>

        <div
          className={css({
            display: "flex",
            gap: "8px",
          })}
        >
          <Button type="button" onClick={handleCancel} fullWidth variant="outline">
            취소
          </Button>

          <Button type="button" onClick={handleConfirm} fullWidth variant="primary">
            확인
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}
