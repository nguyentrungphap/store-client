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

interface LoginModalProps {
  open?: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
  onSwitchToForgot?: () => void;
  onSwitchToLogin?: () => void;
  active?: string | null;
  modal?: string | null;
}

const LoginModal: React.FC<LoginModalProps> = ({
  open = true,
  onClose,
  onSwitchToRegister,
  onSwitchToForgot,
  onSwitchToLogin,
  active,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Add login logic here
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <div className="relative p-3">
        <div className="flex flex-row-reverse">
          <div className="w-[70%]">
            <DialogTitle>Đăng nhập</DialogTitle>
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
              <TextField
                margin="dense"
                label="Mật khẩu"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleLogin}
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
                Đăng nhập
              </Button>
              <Box sx={{ textAlign: "center", mb: 2 }}>
                Hoặc đăng nhập bằng:
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                  mb: 2,
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<FacebookIcon />}
                  sx={{
                    backgroundColor: "#3b5998",
                    color: "#fff",
                    minWidth: "120px",
                    "&:hover": { backgroundColor: "#2d4373" },
                  }}
                >
                  Facebook
                </Button>
                <Button
                  variant="contained"
                  startIcon={<GoogleIcon />}
                  sx={{
                    backgroundColor: "#db4437",
                    color: "#fff",
                    minWidth: "120px",
                    "&:hover": { backgroundColor: "#c33d2e" },
                  }}
                >
                  Google
                </Button>
              </Box>
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

export default LoginModal;
