import { ArrowBack, HolidayVillage, List } from "@mui/icons-material";
import { Stack, styled, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const Logo = styled(Link)({
  color: "black",
  textDecoration: "none",
});

const ListLink = styled(Link)({
  textDecoration: "none",
  color: "black",
});

export const AccountHead = () => {
  const [more, setMore] = useState(false);
  return (
    <Stack
      direction={"row"}
      justifyContent={{
        xs: "space-between",
        sm: "space-between",
        md: "center",
      }}
      alignItems={"center"}
      sx={{
        p: 3,
        boxShadow: "5px 3px 5px 3px rgba(231, 233, 235, 0.8)",
        borderTopRightRadius: 30,
        // textAlign: "center",
      }}
    >
      <Logo to={"/homepage"}>
        <HolidayVillage
          sx={{
            fontSize: "44px",
            display: { xs: "block", sm: "block", md: "none" },
          }}
        />
      </Logo>
      <Typography variant="h4">Account</Typography>
      <List
        onClick={(e) => setMore(true)}
        sx={{
          fontSize: "34px",
          cursor: "pointer",
          display: { xs: "flex", sm: "flex", md: "none" },
        }}
      />
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={more}
        onClose={(e) => setMore(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          mt: 4,
        }}
      >
        <MenuItem>
          <ListLink to={""}> Dashboard</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/profile"}> Profile</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/favourite"}> Favourite</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/notification"}> Notification</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/helpcenter"}> Service & Help</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/login"}> Logout</ListLink>
        </MenuItem>
        <MenuItem>
          <ListLink to={"/homepage"}>
            <ArrowBack />
          </ListLink>
        </MenuItem>
      </Menu>
    </Stack>
  );
};
