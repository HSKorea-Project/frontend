import { create } from "zustand";
import { ReactNode } from "react";

type ModalPayload = {
  type: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  content?: ReactNode;
  closeOnClickOutside?: boolean;
};

type ModalState = {
  isOpen: boolean;
  modal: ModalPayload | null;
  openModal: (modal: ModalPayload) => void;
  closeModal: () => void;
};

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  modal: null,

  openModal: (modal) =>
    set({
      isOpen: true,
      modal,
    }),

  closeModal: () =>
    set({
      isOpen: false,
      modal: null,
    }),
}));
