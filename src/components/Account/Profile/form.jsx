import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SmallAvatar = styled(Edit)(({ theme }) => ({
  width: 20,
  height: 20,
  padding: "10px",
  borderRadius: "50%",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
}));

const Linklist = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  padding: "3px",
  fontSize: '18px',
  // borderRadius: '50%'
})

export const Form = () => {
  return (
    <Stack
      direction={"column"}
      flex={4}
      sx={{
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          p: 3,
          boxShadow: "5px 3px 5px 3px rgba(231, 233, 235, 0.8)",
          borderTopRightRadius: 30,
          textAlign: "center",
        }}
      >
        My Profile
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2.5,
        }}
      >
        <Typography variant="h5"> Edit Profile </Typography>
        <form>
          <Box
            sx={{
            //   width: { sx: "100%", md: "500px" },
            }}
          >
            <Box
              sx={{
                my: 4,
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: {xs: 'block', md: 'flex'},
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<SmallAvatar alt="Remy Sharp" src="" />}
              >
                <Avatar
                  alt="Travis Howard"
                  src=""
                  sx={{ width: 130, height: 130 }}
                />
              </Badge>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                display: {xs: 'block', md: 'flex'},
              }}
            >
              <Box sx={{ marginBottom: 3.5 }}>
                <Typography sx={{ marginBottom: 1.5 }}>First Name</Typography>
                <TextField variant="outlined" size="small"></TextField>
              </Box>
              <Box sx={{ marginBottom: 3.5 }}>
                <Typography sx={{ marginBottom: 1.5 }}>Last Name</Typography>
                <TextField variant="outlined" size="small"></TextField>
              </Box>
            </Box>
            <Box sx={{ marginBottom: 3.5 }}>
              <Typography sx={{ marginBottom: 1.5 }}>Email</Typography>
              <TextField fullWidth variant="outlined" size="small"></TextField>
            </Box>
            <Box sx={{ marginBottom: 3.5 }}>
              <Typography sx={{ marginBottom: 1.5 }}>Contact Numbers</Typography>
              <TextField fullWidth variant="outlined" size="small"></TextField>
            </Box>
            <Box sx={{ marginBottom: 3.5 }}>
              <Typography sx={{ marginBottom: 1.5 }}>Address</Typography>
              <TextField fullWidth variant="outlined" size="small"></TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                display: {xs: 'block', md: 'flex'},
              }}
            >
              <Box sx={{ marginBottom: 3.5 }}>
                <Typography sx={{ marginBottom: 1.5 }}>City</Typography>
                <TextField variant="outlined" size="small"></TextField>
              </Box>
              <Box sx={{ marginBottom: 3.5 }}>
                <Typography sx={{ marginBottom: 1.5 }}>State</Typography>
                <TextField variant="outlined" size="small"></TextField>
              </Box>
            </Box>
            <Box sx={{ marginBottom: 3.5 }}>
              <Typography sx={{ marginBottom: 1.5 }}>Password</Typography>
              <TextField fullWidth variant="outlined" size="small"></TextField>
            </Box>
            <Box
            sx={{
                my: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: {xs: 'block', md: 'flex'},
              }}>

            <Button type="submit" variant="contained"><Linklist to={'/'}>Save</Linklist></Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};