import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type ModalType = string | null;
export type ModalProps = Record<string, any>;

interface ModalState {
  modal: ModalType;
  props: ModalProps;
  showModal: (modal: ModalType, props?: ModalProps) => void;
  hideModal: () => void;
}

export const useModalStore = create<ModalState>()(
  devtools((set) => ({
    modal: null,
    props: {},
    showModal: (modal, props = {}) => set({ modal, props }),
    hideModal: () => set({ modal: null, props: {} }),
  }))
);
