import { Card, CardContent, Avatar, Typography, Box, Button, Stack } from "@mui/material";
import { Person, Email } from "@mui/icons-material";
import profileImg from "../assets/profile.jpg"; // your photo

// ProfileCard component displays the president's profile information with image, name, title, description, and action buttons
function ProfileCard() {
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(211, 47, 47, 0.05) 100%)",
        border: "1px solid rgba(211, 47, 47, 0.1)",
        borderRadius: 3,
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(211, 47, 47, 0.1) 100%)",
          transform: "scale(1.02)",
        },
      }}
    >
      {/* Profile Image */}
      <Avatar
        src={profileImg}
        alt="Profile"
        sx={{
          width: 130,
          height: 130,
          mb: 3,
          border: "5px solid",
          borderColor: "primary.main",
          boxShadow: "0px 8px 16px rgba(211, 47, 47, 0.3)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: "0px 12px 24px rgba(211, 47, 47, 0.4)",
          },
        }}
      />

      {/* Name and Title */}
      <CardContent sx={{ p: 0, width: "100%" }}>
        <Typography
          variant="h5"
          fontWeight={900}
          sx={{
            mb: 1,
            background: "linear-gradient(45deg, #d32f2f 30%, #ff9800 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ELIZA CUANICO
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={1} fontWeight={800}>
          President
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3} fontWeight={500} sx={{ fontSize: "0.75rem" }}>
          Committed to developing a strong, united,<br />
          and high-performing EARIST Chorale.
        </Typography>

        {/* Buttons */}
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<Person />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: 600,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 16px rgba(211, 47, 47, 0.3)",
              },
            }}
          >
            View Profile
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<Email />}
            sx={{
              borderRadius: 2,
              px: 3,
              py: 1,
              fontWeight: 600,
              borderWidth: 2,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                borderColor: "secondary.main",
                color: "secondary.main",
                boxShadow: "0px 8px 16px rgba(255, 152, 0, 0.3)",
              },
            }}
          >
            Contact
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
