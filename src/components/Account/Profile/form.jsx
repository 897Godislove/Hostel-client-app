import { Edit, } from "@mui/icons-material";
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
import { AccountHead } from "../AccountHead";

const SmallAvatar = styled(Edit)({
  width: 40,
  height: 40,
  padding: "8px",
  borderRadius: "50%",
  backgroundColor: "blue",
  color: "white",
  cursor: "pointer",
  marginTop: "5px",
  marginLeft: "35px",
});

const Linklist = styled(Link)({
  color: "white",
  textDecoration: "none",
  padding: "3px",
  fontSize: "18px",
});


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
      <AccountHead/>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 2.5,
        }}
      >
        <Typography variant="h5" sx={{fontSize: '28px'}}> Edit Profile </Typography>
        <form>
          <Box
            sx={
              {
                //   width: { sx: "100%", md: "500px" },
              }
            }
          >
            <Box
              sx={{
                my: 4,
                // display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "block", md: "flex" },
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
                  important
                />
              </Badge>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                display: { xs: "block", md: "flex" },
              }}
            >
              <Box sx={{ marginBottom: "3.5 !important" }}>
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
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type={"email"}
              ></TextField>
            </Box>
            <Box sx={{ marginBottom: 3.5 }}>
              <Typography sx={{ marginBottom: 1.5 }}>
                Contact Numbers
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type={"number"}
              ></TextField>
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
                display: { xs: "block", md: "flex" },
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
              <TextField
                fullWidth
                variant="outlined"
                size="small"
                type={"password"}
              ></TextField>
            </Box>
            <Box
              sx={{
                my: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "block", md: "flex" },
              }}
            >
              <Button type="submit" variant="contained">
                <Linklist to={"/login"}>Save</Linklist>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Stack>
  );
};
