import {
  Box,
  Grid,
  Paper,
  Typography,
  Fade
} from "@mui/material";
import bgImage from "../assets/bg.png";

function Layout({ title, children }) {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg, #ffffff 0% 100%)"
      }}
    >
      <Grid container sx={{ height: "100%" }}>

        {/* LEFT PANEL */}
        <Grid
  item
  xs={12}
  md={6}
  sx={{
    position: "relative",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: 6,
    color: "#fff",

    // 🔥 BACKGROUND IMAGE
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>

  {/* 🔥 DARK OVERLAY */}
  <Box
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)"
    }}
  />

  {/* 🔥 CONTENT */}
  <Box
    sx={{
      position: "relative",
      zIndex: 1,
      textAlign: "center"
    }}
  >

   

    {/* COMPANY NAME */}
    <Typography variant="h3" fontWeight="bold">
      Devisoft
    </Typography>

    {/* TAGLINE */}
    <Typography mt={2}>
   Smart Scanners and Softwares
    </Typography>

  </Box>
</Grid>
        {/* RIGHT PANEL */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 4
          }}
        >
          <Fade in timeout={600}>
            <Paper
              sx={{
                width: "450px",
                minHeight: 480,
                p: 5,
                borderRadius: 4,
                background:
                  "linear-gradient(145deg, rgba(73, 143, 189, 0.98))",
                color: "#fff",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                mx: "auto"
              }}
            >
              {/* 🔥 HEADER PARTITION */}
              <Box
                sx={{
                  textAlign: "center",
                  mb: 3,
                  pb: 2,
                  borderBottom: "1px solid rgba(255,255,255,0.3)"
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    letterSpacing: "1px"
                  }}
                >
                  {title}
                </Typography>
              </Box>

              {/* 🔥 FORM CONTENT */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2
                }}
              >
                {children}
              </Box>

            </Paper>
          </Fade>
        </Grid>

      </Grid>
    </Box>
  );
}

export default Layout;