import { Avatar, Badge, Box } from "@mui/material";
import { Notifications } from "@mui/icons-material";

// AvatarBadge component displays a notification avatar with a badge showing the number of notifications
function AvatarBadge() {
  return (
    <Box sx={{ position: "relative" }}>
      <Badge
        overlap="circular"
        badgeContent={
          <Box
            sx={{
              bgcolor: "secondary.main",
              color: "white",
              borderRadius: "50%",
              width: 24,
              height: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              fontWeight: 600,
              animation: "pulse 2s infinite",
              boxShadow: "0px 2px 4px rgba(255, 152, 0, 0.3)",
            }}
          >
            5
          </Box>
        }
        sx={{
          "& .MuiBadge-badge": {
            top: -4,
            right: -4,
            p: 0,
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: "primary.main",
            width: 56,
            height: 56,
            fontWeight: 600,
            fontSize: "1.25rem",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 8px 16px rgba(211, 47, 47, 0.3)",
            },
          }}
        >
          <Notifications sx={{ fontSize: "1.5rem" }} />
        </Avatar>
      </Badge>

      {/* Pulse animation keyframes */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
}

export default AvatarBadge;
