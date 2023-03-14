import {
  ArrowBack,
  ArrowBackIos,
  ArrowBackIosNew,
  ContactSupport,
  Dashboard,
  Favorite,
  Feed,
  History,
  Message,
  NotificationsActive,
  Person,
} from "@mui/icons-material";
import { Box, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Ref = styled(Link)({
  display: "flex",
  flexDirection: "row",
  color: "lightGrey",
  margin: "25px 0",
  textDecoration: 'none',
  "&:hover": {
    borderRight: "3px solid white",
    color: "white",
    cursor: "pointer",
  },
  "&:active": {
    borderRight: "3px solid white",
    color: "white",
    cursor: "pointer",
  },
});

const Logo = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontSize: '40px',
  fontWeight: 600,
})

export const Sidebar = () => {
  return (
    <Box
      flex={1.2}
      sx={{
        bgcolor: "Blue",
        color: "white",
        // maxHeight: "100vh",
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        pt: 2,
        pl: 4,
        display: { xs: "none", md: "block" },
        // position: 'fixed',
      }}
    >
      <Logo to={'/homepage'}>Roojo Logo</Logo>
      <Stack
        sx={{
          mt: 8,
        }}
      >
        <Ref>
          <Dashboard sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Dashboard</Typography>
        </Ref>
        <Ref to={'/profile'}>
          <Person sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Profile</Typography>
        </Ref>
        <Ref to={'/favourite'}>
          <Favorite sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Favourite</Typography>
        </Ref>
        <Ref to={'/notification'}>
          <NotificationsActive sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Notification</Typography>
        </Ref>
        <Ref>
          <Message sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Messages</Typography>
        </Ref>
        <Ref>
          <History sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">History</Typography>
        </Ref>
        <Ref to={"/helpcenter"}>
          <ContactSupport sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">Service & Help</Typography>
        </Ref>
        <Ref>
          <Feed sx={{ marginTop: 0.5, marginRight: 4 }} />
          <Typography variant="h6">About Us</Typography>
        </Ref>
        <Ref to={'/homepage'}>
          <ArrowBack sx={{ mx: 6, fontSize: '35px'}} />
        </Ref>
      </Stack>
    </Box>
  );
};
