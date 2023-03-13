import { AppBar, Box, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavigateTypo = styled(Link)({
  fontSize: 32,
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
    <AppBar sx={{marginTop: '60px', bgcolor:'white', 
    color:'black', boxShadow:'none',}}>
    <Stack direction={'row'} justifyContent={'center'} spacing={{sm: 10, md: 15}} sx={{
      mb: 2,
      display:{xs: 'none', sm: 'none', md: 'flex'},
      py: 1,
    }}>
      <NavigateTypo to={'/'} sx={{color: '#739bff'}}> Home </NavigateTypo>
      <NavigateTypo>Service</NavigateTypo>
      <NavigateTypo>Community</NavigateTypo>
      <NavigateTypo>About</NavigateTypo>
    </Stack>
    </AppBar>
  )
}

export default Navbar
