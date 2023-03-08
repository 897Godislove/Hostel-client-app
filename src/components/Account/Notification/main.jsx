import { Circle } from "@mui/icons-material";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

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
      <Typography
        variant="h4"
        sx={{
          p: 3,
          boxShadow: "5px 3px 5px 3px rgba(231, 233, 235, 0.8)",
          borderTopRightRadius: 30,
          textAlign: "center",
        }}
      >
        Notifications
      </Typography>
      <Box
        sx={{
          my: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "lightgrey",
          px: {xs: '0px', md: '60px'},
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
            cursor: 'pointer',
          }}
        >
          <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5} display={{xs: 'block', md: 'flex'}}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box marginY={{xs: 3, md: 0}}>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle marginLeft
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
            <hr/>

            <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
            <hr/>

            <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
            <hr/>

            <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
            <hr/>

            <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
            <hr/>

            <Stack flexDirection={"row"} justifyContent={"space-evenly"} marginY={5}>
            <Avatar
              alt="Travis Howard"
              src=""
              sx={{ width: 80, height: 80, marginRight: 3 }}
            />
            <Box>
              <Typography variant="h5">Title of Notification</Typography>
              <Stack flexDirection={"row"} sx={{ color: "lightgray" }}>
                <Typography>Time ago</Typography>
                <Circle sx={{ mx: 1, width: 13 }} />
                <Typography>Type of Notification</Typography>
              </Stack>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem labore libero...</Typography>
            </Box>
            <Circle
              sx={{
                marginLeft: "100px",
              }}
            />
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
