import { useModalStore } from "@/store/modalStore";
import React from "react";
import Authentication from "./Authentication";

const MODAL_COMPONENTS: Record<string, React.FC<any>> = {
  authentication: Authentication,
};

const ModalRoot: React.FC = () => {
  const { modal, props, hideModal } = useModalStore();

  if (!modal) return null;

  const ModalComponent = MODAL_COMPONENTS[modal];
  if (!ModalComponent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-70">
      <ModalComponent {...props} onClose={hideModal} />
    </div>
  );
};

export default ModalRoot;
