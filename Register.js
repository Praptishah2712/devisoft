import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Typography,
  MenuItem,
  Grid
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";

function Register() {
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    date: "",
    productId: "",
    brandId: "",
    quantity: "",
    description: "",
    paymentMethod: "",
    remark: ""
  });

  const [photo, setPhoto] = useState(null);

  // 🔥 INPUT STYLE (MATCH PRODUCT UI)
  const inputStyle = {
    input: { color: "#fff" },
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
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

  useEffect(() => {
    axios.get("https://localhost:44305/Data/GetProducts")
      .then(res => setProducts(res.data));
  }, []);

  const handleProduct = (id) => {
    const productId = parseInt(id);
    setForm({ ...form, productId, brandId: "" });

    axios.get(`https://localhost:44305/Data/GetBrands?productId=${productId}`)
      .then(res => setBrands(res.data));
  };

  const handleSubmit = async () => {

    if (!form.date || !form.productId || !form.brandId || !form.quantity) {
      alert("Please fill required fields");
      return;
    }

    const data = new FormData();

    data.append("date", new Date(form.date).toISOString());
    data.append("productId", form.productId);
    data.append("brandId", form.brandId);
    data.append("quantity", form.quantity);
    data.append("description", form.description);
    data.append("paymentMethod", form.paymentMethod);
    data.append("remark", form.remark);

    if (photo) data.append("photo", photo);

    try {
      await axios.post(
        "https://localhost:44305/Data/SaveRegistration",
        data
      );

      alert("Saved Successfully");
      localStorage.removeItem("isLogin");
      navigate("/");
    } catch (err) {
      console.log(err.response);
      alert("Error saving data");
    }
  };

  return (
    <Layout title="Registration">

      <Typography variant="h6" mb={2}>
        Fill Registration Details
      </Typography>

      <Grid container spacing={2}>

        {/* DATE */}
        <Grid item xs={12}>
          <TextField
            type="date"
            label="Date"
            fullWidth
            InputLabelProps={{ shrink: true }}
            sx={inputStyle}
            value={form.date}
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />
        </Grid>

        {/* PRODUCT */}
        <Grid item xs={12}>
          <TextField
            select
            label="Product"
            fullWidth
            sx={inputStyle}
            value={form.productId || ""}
            onChange={(e) => handleProduct(e.target.value)}
          >
            {products.map(p => (
              <MenuItem key={p.id} value={p.id}>
                {p.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* BRAND */}
        <Grid item xs={12}>
          <TextField
            select
            label="Brand"
            fullWidth
            sx={inputStyle}
            value={form.brandId || ""}
            onChange={(e) =>
              setForm({ ...form, brandId: e.target.value })
            }
          >
            {brands.map(b => (
              <MenuItem key={b.id} value={b.id}>
                {b.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* QUANTITY */}
        <Grid item xs={6}>
          <TextField
            label="Quantity"
            type="number"
            fullWidth
            sx={inputStyle}
            value={form.quantity}
            onChange={(e) =>
              setForm({ ...form, quantity: e.target.value })
            }
          />
        </Grid>

        {/* PAYMENT */}
        <Grid item xs={6}>
          <TextField
            select
            label="Payment"
            fullWidth
            sx={inputStyle}
            value={form.paymentMethod || ""}
            onChange={(e) =>
              setForm({ ...form, paymentMethod: e.target.value })
            }
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="GPay">GPay</MenuItem>
          </TextField>
        </Grid>

        {/* REMARK */}
        <Grid item xs={12}>
          <TextField
            label="Remark"
            fullWidth
            sx={inputStyle}
            value={form.remark}
            onChange={(e) =>
              setForm({ ...form, remark: e.target.value })
            }
          />
        </Grid>

        {/* PHOTO */}
        <Grid item xs={12}>
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "#fff"
            }}
          >
            Upload Photo
            <input
              type="file"
              hidden
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </Button>
        </Grid>

        {/* SUBMIT */}
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              height: 50,
              fontWeight: "bold",
              background: "linear-gradient(135deg, #6C63FF, #8f7cff)"
            }}
            onClick={handleSubmit}
          >
            Submit & Logout
          </Button>
        </Grid>

      </Grid>

    </Layout>
  );
}

export default Register;