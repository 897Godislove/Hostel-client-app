import { Box, Link, styled, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const SideBox = styled(Box)({
  height: "390px",
  // border: '1px solid',
  borderRadius: 5,
  boxShadow: '0 0 5px 5px rgba(231, 233, 235, 0.8)',
  padding: 7,
})
const AreaList = styled(Typography)({
  fontSize: 10,
  padding: 4,
  lineHeight: 1.2,
  cursor: 'pointer'
})
const AreaTitle = styled(Typography)({
  marginLeft: 18,
  marginTop: 8,
  marginBottom: 8,
})

const Sidebar = () => {
  return (
    <Box flex={0.6} sx={{
        display: {xs: 'none', sm: 'block'}
      }}>
      <Stack 
        direction={'column'} 
        spacing={5}>
        <SideBox>
          <Typography sx={{
            fontWeight: 700,
            mb: 3,
          }}>Filter By</Typography>
          <AreaTitle>Location</AreaTitle>
          <AreaList>BDPA</AreaList>
          <AreaList>EKOSODIN</AreaList>
          <AreaList>OSASOGIE</AreaList>
          <AreaList>ISIHOR</AreaList>
          <AreaList>USELU</AreaList>
          <AreaList>DOCTOR'S QUARTER</AreaList>
          <AreaList>SENIOR STAFF'S QUARTERS</AreaList>
          <AreaList>BLOCKS OF FLAT</AreaList>
          <AreaTitle>Specification</AreaTitle>
          <AreaList>A ROOM</AreaList>
          <AreaList>A ROOM Self.con</AreaList>
          <AreaList>A ROOM AND PARLOUR Self.con</AreaList>
          <AreaList>FLAT</AreaList>
        </SideBox>
        
        <SideBox></SideBox>
      </Stack>
    </Box>
  )
}

export default Sidebar
