import React from 'react'
import { Box, AppBar, Toolbar, Typography, InputBase, styled, Menu, MenuItem } from '@mui/material'
import { AccountBox, ArrowDropDown, ArrowRight, HolidayVillage, Mail, MoreVert } from '@mui/icons-material';
import { useState } from 'react';
import {Link} from 'react-router-dom'


const MobileMoreVert = styled(MoreVert)(({theme})=>({
    display: 'flex',
    [theme.breakpoints.up('sm')]:{
        display: 'none'
    }
}))

const ListLink = styled(Link)({
  textDecoration: 'none',
  color: 'black',
})

const Header = () => {

    const [profile, setProfile] = useState(false)
    const [more, setMore] = useState(false)
    const [help, setHelp] = useState(false)

  return (
    <AppBar position='sticky' sx={{
      bgcolor:'white', 
      color:'black', 
      boxShadow:'none'
    }}>
        <Toolbar sx={{
          display: 'flex',
            justifyContent: 'space-between'
        }}>
           <Typography  variant={'h5'} sx={{
                display: {xs: 'none', sm: 'block'}, cursor: 'pointer',
           }}> HOUSING </Typography>

           <HolidayVillage sx={{
                fontSize: '44px',
                display: {xs: 'block', sm: 'none'},
                cursor: 'pointer',
           }}></HolidayVillage>

           <Box sx={{
            bgcolor:'white',
            py: 0,
            px: 2,
            border: '2px solid grey',
            borderRadius: 5,
            width: '50%'
           }}>
            <InputBase placeholder='Search for location or building spec'/>
           </Box>

            <Mail sx={{
                display: {xs: 'none', sm: 'block'},
                fontSize: 30,
                cursor: 'pointer',
            }}/>

            <Box sx={{
              display: {xs: 'none', sm: 'flex'}, gap: {sm: '5px', md: '20px'}, alignItems: 'center'}}>
                <Box onClick={(e) => setProfile(true)}>
                  <AccountBox sx={{ fontSize: '34px', cursor: 'pointer' }}/>
                  <ArrowDropDown sx={{ fontSize: '30px', mb: 1, cursor: 'pointer' }}/>
                </Box>
                <MoreVert onClick={(e) => setMore(true)}
                sx={{ fontSize: '34px', cursor: 'pointer' }}/>
            </Box>
            <MobileMoreVert onClick={(e) => setMore(true)}
            sx={{ fontSize: '30px', cursor: 'pointer' }}/>
        </Toolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={profile}
        onClose={(e)=>setProfile(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 4
        }}
      >
        <Box display={'flex'}>
          <AccountBox sx={{ fontSize: '30px', color: '#739bff', m: 1 }}/>
          <Box sx={{m: 1}}>
            <Typography>USER NAME</Typography>
            <Typography sx={{ fontSize: '10px', color: '#739bff' }}>username@user.com</Typography>
          </Box>          
        </Box>
        <hr/>
        <MenuItem ><ListLink to="profi"> Edit profile</ListLink></MenuItem>
        <MenuItem ><ListLink> Upgrade account</ListLink></MenuItem>
        <MenuItem ><ListLink> Logout</ListLink></MenuItem>
      </Menu>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={more}
        onClose={(e)=>setMore(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 4
        }}
      >
        <MenuItem onClick={(e)=>setHelp(true)}>Help<ArrowRight/> </MenuItem>
        <MenuItem ><ListLink to={'/profi'}> Account</ListLink></MenuItem>
        <MenuItem ><ListLink> About Us</ListLink></MenuItem>
        <MenuItem ><ListLink> Logout</ListLink></MenuItem>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={help}
        onClose={(e)=>setHelp(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          mt: 4
        }}
      >
        <MenuItem ><ListLink> Help center</ListLink></MenuItem>
        <hr/>
        <MenuItem ><ListLink> Report an issue...</ListLink></MenuItem>
      </Menu>
      </Menu>
    </AppBar>
  )
}

export default Header
