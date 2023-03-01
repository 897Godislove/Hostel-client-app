import React from 'react'
import Header from './components/header'
import Navbar from './components/navbar'
import Feed from './components/feed'
import Sidebar from './components/sidebar'

import {Box, Stack} from '@mui/material'

export const HomePage = () => {

  return (
    <Box>
      <Stack direction={'column'}>
        <Header/>
        <Navbar/>
      </Stack>
      <hr/>
      <Stack direction={'row'} spacing={2} mt={6} mx={4}>
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>    
)
}