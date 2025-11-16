import {
  ThemeProvider,
  CssBaseline,
  Container,
  Typography,
  Grid,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import { Dashboard as DashboardIcon } from "@mui/icons-material";
import theme from "./theme";
import ProfileCard from "./components/ProfileCard";
import UserList from "./components/UserList";
import AvatarBadge from "./components/AvatarBadge";
import DataTable from "./components/DataTable";
import FAQAccordion from "./components/FAQAccordion";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          background: "#ffebee",
          minHeight: "100vh",
          py: 5,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 80%, rgba(211, 47, 47, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 152, 0, 0.3) 0%, transparent 50%)",
            pointerEvents: "none",
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* HEADER */}
          <Box textAlign="center" mb={6} sx={{ animation: "fadeInUp 1s ease-out" }}>
            <DashboardIcon
              sx={{
                fontSize: 60,
                color: "primary.main",
                mb: 2,
                filter: "drop-shadow(0px 4px 8px rgba(211, 47, 47, 0.3))",
              }}
            />
            <Typography
              variant="h3"
              fontWeight={1000}
              gutterBottom
              sx={{
                background: "linear-gradient(45deg, #d32f2f 30%, #ff9800 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              EARIST Chorale
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Culture and Arts Division
            </Typography>
          </Box>

          {/* MAIN GRID */}
          <Grid container spacing={4} sx={{ animation: "fadeInUp 1s ease-out 0.2s both" }}>
            {/* Left Column - Profile */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 5,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(211, 47, 47, 0.1)",
                }}
              >
                <ProfileCard />
              </Paper>
            </Grid>

            {/* Middle Column - List + Badge */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 4,
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 152, 0, 0.1)",
                }}
              >
                <Box>
                  <Typography variant="h6" mb={3} sx={{ color: "primary.main", fontWeight: 600 }}>
                    OFFICERS
                  </Typography>
                  <UserList />
                </Box>

                <Box textAlign="center" mt={4}>
                  <AvatarBadge />
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - Data Table */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  display: "flex",
                  flexDirection: "column",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(211, 47, 47, 0.1)",
                }}
              >
                <Typography variant="h6" mb={3} sx={{ color: "secondary.main", fontWeight: 600 }}>
                  POSITIONS
                </Typography>
                <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                  <DataTable />
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* FAQ SECTION */}
          <Box mt={6} sx={{ animation: "fadeInUp 1s ease-out 0.4s both" }}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 4,
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 152, 0, 0.1)",
              }}
            >
              <Typography
                variant="h6"
                textAlign="center"
                mb={3}
                sx={{
                  color: "primary.main",
                  fontWeight: 600,
                  background: "linear-gradient(45deg, #d32f2f 30%, #ff9800 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Frequently Asked Questions
              </Typography>
              <FAQAccordion />
            </Paper>
          </Box>

          {/* FOOTER */}
          <Divider sx={{ my: 6, borderColor: "rgba(211, 47, 47, 0.2)" }} />
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{
              mt: 3,
              fontWeight: 500,
              animation: "fadeIn 1s ease-out 0.6s both",
            }}
          >
            © 2025 EC Dashboard | EARIST
          </Typography>
        </Container>
      </Box>

      {/* Keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </ThemeProvider>
  );
}

export default App;

