import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import GoogleIcon from "@mui/icons-material/Google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import { Box, Typography } from "@mui/material";
function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();

 const inputStyle = {
  input: { color: "#fff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "hsl(0, 0%, 100%)"
    },
    "&:hover fieldset": {
      borderColor: "#e27b1a"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#e27b1a"
    }
  },
  "& .MuiInputLabel-root": {
    color: "rgb(255, 255, 255)"
  }
};

  const handleLogin = async () => {
    const res = await axios.post("https://localhost:44305/Account/Login", {
      Username: user.username,
      Password: user.password
    });

    if (res.data === "Success") navigate("/product");
    else alert("Invalid login");
  };

  return (
    <Layout title="Login">
      <TextField label="Username" fullWidth sx={inputStyle}
        onChange={(e) => setUser({ ...user, username: e.target.value })} />

      <TextField label="Password" type="password" fullWidth sx={inputStyle}
        onChange={(e) => setUser({ ...user, password: e.target.value })} />

      <Button
  variant="contained"
  fullWidth
  sx={{ mt: 2 }}
  onClick={handleLogin}
>
  Login
</Button>
      {/* DIVIDER */}
<Box sx={{ my: 3 }}>
  <Divider sx={{ borderColor: "rgb(255, 255, 255)" }}>
    <Typography variant="body2" sx={{ color: "#ffffff" }}>
      OR CONTINUE WITH
    </Typography>
  </Divider>
</Box>

{/* SOCIAL BUTTONS */}
<Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>

  {/* GOOGLE */}
<Button
  variant="outlined"
  startIcon={<GoogleIcon />}
  onClick={() =>
    window.open("https://devisoft.co.in", "_blank")
  }
  sx={{
    flex: 1,
    color: "#fff",
    borderColor: "#ffffff",
    backgroundColor: "rgba(66,133,244,0.1)",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#105a97",
      color: "#fff",
      borderColor: "#4285F4"
    }
  }}
>
  Google
</Button>

  {/* WHATSAPP */}
<Button
  variant="outlined"
  startIcon={<WhatsAppIcon />}
  onClick={() =>
    window.open("https://wa.me/919825145601", "_blank")
  }
  sx={{
    flex: 1,
    color: "#ffffff",
    borderColor: "#ffffff",
    backgroundColor: "rgba(37,211,102,0.1)",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#25D366",
      color: "#fff",
      borderColor: "#25D366"
    }
  }}
>
  WhatsApp
</Button>

  {/* INSTAGRAM */}
<Button
  variant="outlined"
  startIcon={<InstagramIcon />}
  onClick={() =>
    window.open("https://instagram.com/Devisoft", "_blank")
  }
  sx={{
    flex: 1,
    color: "#fff",
    borderColor: "#ffffff",
    backgroundColor: "rgba(225,48,108,0.1)",
    transition: "all 0.3s ease",

    "&:hover": {
      backgroundColor: "#E1306C",
      color: "#fff",
      borderColor: "#E1306C"
    }
  }}
>
  Instagram
</Button>

</Box>
    </Layout>
  );
}

export default Login;