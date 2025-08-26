import React, { useState } from "react";
import LoginModal from "./Login";
import RegisterModal from "./Register";
import ForgotModal from "./Forgot";

interface Props {
  onClose: () => void;
}

const Authentication: React.FC<Props> = ({ onClose }) => {
  const [active, setActive] = useState<"login" | "register" | "forgot">(
    "login"
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] relative">
      <div className="absolute top-2 right-2">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-black text-xl font-bold"
          aria-label="Đóng"
        >
          ×
        </button>
      </div>
      {active === "login" && (
        <LoginModal
          onClose={onClose}
          onSwitchToLogin={() => setActive("login")}
          onSwitchToRegister={() => setActive("register")}
          onSwitchToForgot={() => setActive("forgot")}
          active={active}
        />
      )}
      {active === "register" && (
        <RegisterModal
          onClose={onClose}
          onSwitchToLogin={() => setActive("login")}
          onSwitchToRegister={() => setActive("register")}
          onSwitchToForgot={() => setActive("forgot")}
        />
      )}
      {active === "forgot" && (
        <ForgotModal
          onClose={onClose}
          onSwitchToLogin={() => setActive("login")}
          onSwitchToRegister={() => setActive("register")}
          onSwitchToForgot={() => setActive("forgot")}
        />
      )}
    </div>
  );
};

export default Authentication;
