"use client";

import { createPortal } from "react-dom";
import { useModalStore } from "@/stores/modalStore";
import ConfirmModal from "./ConfirmModal";
import PrivacyModal from "./privacy/PrivacyModal";
import DeleteModal from "./DeleteModal";

export default function ModalProvider() {
  const { isOpen, modal } = useModalStore();

  if (typeof document === "undefined") return null;
  if (!isOpen || !modal) return null;

  return createPortal(
    <>
      {modal.type === "confirm" && <ConfirmModal modal={modal} />}
      {modal.type === "privacy" && <PrivacyModal modal={modal} />}
      {modal.type === "delete" && <DeleteModal modal={modal} />}
    </>,
    document.body
  );
}
