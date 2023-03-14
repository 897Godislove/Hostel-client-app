import { Circle } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import { AccountHead } from "../AccountHead";

export const Main = () => {
  return (
    <Stack
      direction={"column"}
      flex={4}
      sx={{
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
      }}
    >

      <AccountHead />
      
      <Typography
        sx={{
          p: 3.3,
          fontSize: "28px",
          // fontWeight: 400,
          paddingBottom: 0,
        }}
      >
        Notification
      </Typography>
      <hr />
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "lightgrey",
          px: { xs: "0px", md: "60px" },
          //   height: "200vh",
        }}
      >
        <Stack
          flexDirection={"column"}
          sx={{
            width: "100%",
            bgcolor: "white",
            padding: 3,
            boxSizing: "border-box",
            cursor: "pointer",
          }}
        >
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
          <hr />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
          <hr />
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
          <hr />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
          <hr />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
          <hr />

          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            marginY={5}
            display={{ xs: "block", sm: "flex", md: "flex" }}
          >
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{ xs: 3, md: 0 }}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem labore libero...
              </Typography>
            </Box>
            <Circle
              marginLeft
              sx={{
                marginLeft: "100px",
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
