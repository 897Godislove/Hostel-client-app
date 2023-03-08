import React from "react";
import { Grid, Stack, Typography } from '@mui/material'
import { Box } from "@mui/system";
import Post from "../../Homepage/components/post";

export const Wrap = () => {
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
        //   position: 'sticky',
        }}
      >
        My Favourite
      </Typography>
      <Box sx={{px: 3}}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Post/>
            </Grid>
          </Grid> 
        </Box>
    </Stack>
  );
};
