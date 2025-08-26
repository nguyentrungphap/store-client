import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Sidebar from "../Sidebar";

interface RegisterModalProps {
  open?: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToForgot?: () => void;
  onSwitchToLogin?: () => void;
  active?: string | null;
  modal?: string | null;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  open = true,
  onClose,
  onSwitchToRegister,
  onSwitchToForgot,
  onSwitchToLogin,
  active,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // TODO: Add Register logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <div className="relative p-3">
        <div className="flex flex-row-reverse">
          <div className="w-[70%]">
            <DialogTitle>Đăng ký</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Họ của bạn"
                type="text"
                fullWidth
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Tên của bạn"
                type="text"
                fullWidth
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                label="Số điện thoại"
                type="text"
                fullWidth
                variant="outlined"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
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
              <TextField
                autoFocus
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleRegister}
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
                Đăng ký
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

export default RegisterModal;
