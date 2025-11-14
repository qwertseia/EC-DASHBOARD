import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from "@mui/material";

// Array of user objects containing name, role, and avatar background color for each officer
const users = [
  { name: "Jefferson Tambis", role: "Vice President", color: "#d32f2f" },
  { name: "Mikylla Marie Bulan", role: "Secretary", color: "#ff9800" },
  { name: "Yme Heriz Arma", role: "Treasurer", color: "#f57c00" },
];

// UserList component renders a list of chorale officers with avatars, names, and roles
function UserList() {
  return (
    <List sx={{ p: 0 }}>
      {users.map((user, index) => (
        <ListItem
          key={index}
          sx={{
            mb: 1,
            borderRadius: 2,
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "rgba(255, 152, 0, 0.1)",
              transform: "translateX(8px)",
              boxShadow: "0px 4px 8px rgba(255, 152, 0, 0.2)",
            },
          }}
        >
          <ListItemAvatar>
            <Avatar
              sx={{
                bgcolor: user.color,
                fontWeight: 600,
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: `0px 4px 8px ${user.color}40`,
                },
              }}
            >
              {user.name.charAt(0)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={user.role}
            primaryTypographyProps={{
              fontWeight: 600,
              color: "text.primary",
            }}
            secondaryTypographyProps={{
              color: "text.secondary",
              fontWeight: 500,
            }}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default UserList;
