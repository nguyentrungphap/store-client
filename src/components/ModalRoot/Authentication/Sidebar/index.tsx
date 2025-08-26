import { Button } from "@mui/material";
import Logo from "@/assets/logo.webp";

type Props = {
  active?: string | null;
  onSwitchToLogin?: () => void;
  onSwitchToForgot?: () => void;
  onSwitchToRegister?: () => void;
};

const Sidebar = ({
  active,
  onSwitchToLogin,
  onSwitchToForgot,
  onSwitchToRegister,
}: Props) => {
  return (
    <div className="flex items-start flex-col w-[30%] border-r pr-10">
      <img src={Logo} alt="Logo" className="w-36 h-15 mb-4" />
      <Button
        onClick={onSwitchToLogin}
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "left",
          justifyContent: "flex-start",
          background: active === "login" ? "#F7FAFD" : "",
        }}
        fullWidth
      >
        Đăng Nhập
      </Button>
      <Button
        onClick={onSwitchToForgot}
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "left",
          justifyContent: "flex-start",
          background: active === "forgot" ? "#F7FAFD" : "",
        }}
        fullWidth
      >
        Quên mật khẩu
      </Button>
      <Button
        onClick={onSwitchToRegister}
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "16px",
          textAlign: "left",
          justifyContent: "flex-start",
          background: active === "register" ? "#F7FAFD" : "",
        }}
        fullWidth
      >
        Đăng ký
      </Button>
    </div>
  );
};

export default Sidebar;
