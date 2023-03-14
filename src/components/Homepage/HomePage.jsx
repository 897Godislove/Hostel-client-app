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
      <hr/>
        <Navbar/>
      </Stack>
      <Stack direction={'row'} spacing={2} mx={{xs: 1, sm: 1, md: 3}} marginTop={{xs: '25px',sm: '85px', md: '160px'}} marginBottom={{xs: 2, sm: 2, md: 4}}>
        <Sidebar/>
        <Feed/>
      </Stack>
    </Box>    
)
}
