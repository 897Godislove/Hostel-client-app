import { ArrowDropDown, ExpandMore, Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import Post from './post'

const Feed = () => {
  return (
    <Box flex={4}>
      <Stack direction={'column'} spacing={2}>
        <Box sx={{
          boxShadow: '0 0 5px 5px rgba(231, 233, 235, 0.8)',
          borderRadius: 1,
          py: 1,
          px: 3,
          display: 'flex',
          alignItems: 'center'
        }}>
          <Typography>Sort By Duration:</Typography>
          <Typography sx={{
            bgcolor: 'rgba(231, 233, 235, 0.8)',
            px: 2,
            mx: 3,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center'
          }}>Min to school<ArrowDropDown sx={{fontSize: 22, marginLeft: 1.5, cursor: 'pointer'}}/></Typography>
        </Box>

        <Box>
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
    </Box>
  )
}

export default Feed
