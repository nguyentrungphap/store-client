import { useModalStore } from "@/store/modalStore";
import React from "react";

// Example modal components
// import OtherModal from "@/components/modals/OtherModal";

const MODAL_COMPONENTS: Record<string, React.FC<any>> = {
  // example: ExampleModal,
  // otherModal: OtherModal,
};

const ModalRoot: React.FC = () => {
  const { modal, props, hideModal } = useModalStore();

  if (!modal) return null;

  const ModalComponent = MODAL_COMPONENTS[modal];
  if (!ModalComponent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <ModalComponent {...props} onClose={hideModal} />
    </div>
  );
};

export default ModalRoot;
