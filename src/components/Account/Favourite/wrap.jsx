import React from "react";
import { Grid, Stack, Typography } from '@mui/material'
import { Box } from "@mui/system";
import Post from "../../Homepage/components/post";
import { AccountHead } from "../AccountHead";

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
      <AccountHead/>
      <Typography
        sx={{
          p: 3.3,
          fontSize: '28px',
          // fontWeight: 400,
          paddingBottom: 0,
        }}
      >
        My Favourite
      </Typography>
      <Box sx={{px: 3, marginBottom: 4,}}>
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
