import { Box, Link, Stack, styled, Typography } from '@mui/material'
import React from 'react'

const NavigateTypo = styled(Typography)({
  fontSize: 22,
  
  '&:hover' : {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
  },
  '&:active' : {
    color: '#739bff',
  }
})

const Navbar = () => {
  return (
    <Stack direction={'row'} justifyContent={'center'} spacing={{sm: 10, md: 15}} sx={{
      mb: 2,
      display:{xs: 'none', sm: 'flex'}
    }}>
      <NavigateTypo sx={{color: '#739bff'}}>Home</NavigateTypo>
      <NavigateTypo>Service</NavigateTypo>
      <NavigateTypo>Community</NavigateTypo>
      <NavigateTypo>About</NavigateTypo>
    </Stack>
  )
}

export default Navbar
