import React from 'react'
import Header from '../header'
import Navbar from '../navbar'
import Feed from './components/feed'
import Sidebar from './components/sidebar'

import {Box, Stack} from '@mui/material'
import Footer from '../footer/footer'

export const HomePage = () => {

  return (
    <Box>
      <Stack direction={'column'}>
        <Header/>
        <Navbar/>
      </Stack>
      <hr/>
      <Stack direction={'row'} spacing={2} mt={6} mx={4} marginTop={{xs: '35px',sm: '90px', md: '150px'}} marginBottom={5}>
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>    
)
}
