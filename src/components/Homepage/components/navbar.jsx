import { Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigateTypo = styled(Link)({
  fontSize: 22,
  textDecoration: 'none',
  
  '&:hover' : {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    cursor: 'pointer',
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
      <NavigateTypo to={'/'} sx={{color: '#739bff'}}> Home </NavigateTypo>
      <NavigateTypo>Service</NavigateTypo>
      <NavigateTypo>Community</NavigateTypo>
      <NavigateTypo>About</NavigateTypo>
    </Stack>
  )
}

export default Navbar
