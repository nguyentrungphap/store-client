import { useModalStore } from "@/store/modalStore";
import LoginModal from "./Login";
import RegisterModal from "./Register";
import ForgotModal from "./Forgot";
import { useState } from "react";

const ModalRoot: React.FC = () => {
  const { modal, props, hideModal, showModal } = useModalStore();
  const [active, setActive] = useState<string | null>("login");

  if (!modal) return null;
  console.log({ active });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] relative">
        <div className="absolute top-2 right-2">
          <button
            onClick={hideModal}
            className="text-gray-500 hover:text-black text-xl font-bold"
          >
            ×
          </button>
        </div>
        {modal === "login" && (
          <LoginModal
            {...props}
            onClose={hideModal}
            onSwitchToLogin={() => {
              showModal("login");
              setActive("login");
            }}
            onSwitchToRegister={() => {
              showModal("register");
              setActive("register");
            }}
            onSwitchToForgot={() => {
              showModal("forgot");
              setActive("forgot");
            }}
            active={active}
            modal={modal}
          />
        )}
        {modal === "register" && (
          <RegisterModal
            {...props}
            onClose={hideModal}
            onSwitchToLogin={() => showModal("login")}
          />
        )}
        {modal === "forgot" && (
          <ForgotModal
            {...props}
            onClose={hideModal}
            onSwitchToForgot={() => showModal("forgot")}
          />
        )}
      </div>
    </div>
  );
};

export default ModalRoot;
