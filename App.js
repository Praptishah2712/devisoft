import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Brand from "./pages/Brand";
import Register from "./pages/Register";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;