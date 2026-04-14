import { useEffect, useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

function Brand() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", productId: "" });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://localhost:44305/Data/GetProducts")
      .then(res => setProducts(res.data));
  }, []);

  const handleSubmit = async () => {
    await axios.post("https://localhost:44305/Data/AddBrand", form);
    navigate("/register");
  };

  return (
    <Layout title="Add Brand">
      <TextField
        label="Brand Name"
        fullWidth
        sx={{ mb: 2 }}
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <TextField
        select
        label="Product"
        fullWidth
        sx={{ mb: 2 }}
        value={form.productId || ""}
        onChange={(e) =>
          setForm({ ...form, productId: e.target.value })
        }
      >
        {products.map(p => (
          <MenuItem key={p.id} value={p.id}>
            {p.name}
          </MenuItem>
        ))}
      </TextField>

      <Button fullWidth variant="contained" onClick={handleSubmit}>
        Continue →
      </Button>
    </Layout>
  );
}

export default Brand;