import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

function Product() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

const inputStyle = {
  input: { color: "#fff" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.3)"
    },
    "&:hover fieldset": {
      borderColor: "#6C63FF"
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6C63FF"
    }
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.7)"
  }
};
  const handleSubmit = async () => {
    await axios.post("https://localhost:44305/Data/AddProduct", { name });
    navigate("/brand");
  };

  return (
    <Layout title="Add Product">
      <TextField label="Product Name" fullWidth sx={inputStyle}
        onChange={(e) => setName(e.target.value)} />

      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Continue →
      </Button>
    </Layout>
  );
}

export default Product;