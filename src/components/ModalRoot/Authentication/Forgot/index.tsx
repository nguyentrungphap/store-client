import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Sidebar from "../Sidebar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

interface ForgotModalProps {
  open?: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToForgot?: () => void;
  onSwitchToLogin?: () => void;
  active?: string | null;
  modal?: string | null;
}

const ForgotModal: React.FC<ForgotModalProps> = ({
  open = true,
  onClose,
  onSwitchToRegister,
  onSwitchToForgot,
  onSwitchToLogin,
  active,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleForgot = () => {
    // TODO: Add Forgot logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <div className="relative p-3">
        <div className="flex flex-row-reverse">
          <div className="w-[70%]">
            <DialogTitle>Quên mật khẩu</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleForgot}
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  mb: 2,
                  backgroundColor: "#222",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "16px",
                  height: "48px",
                  "&:hover": { backgroundColor: "#444" },
                }}
              >
                Gửi
              </Button>
            </DialogContent>
          </div>
          <Sidebar
            active={active}
            onSwitchToLogin={onSwitchToLogin}
            onSwitchToForgot={onSwitchToForgot}
            onSwitchToRegister={onSwitchToRegister}
          />
        </div>
        <div className="absolute top-0  right-0 cursor-pointer">
          <DialogActions sx={{ justifyContent: "space-between" }}>
            <Button onClick={onClose} color="warning">
              X
            </Button>
          </DialogActions>
        </div>
      </div>
    </Dialog>
  );
};

export default ForgotModal;
