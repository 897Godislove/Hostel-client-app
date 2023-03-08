import { Stack } from '@mui/material'
import React from 'react'
import { Sidebar } from '../sidebar'
import { Main } from './main'

export const Notification = () => {
  return (
    <Stack direction={"row"} sx={{p: 0.5, m: 1, border: '4px solid lightGrey', borderRadius: 12}}>
      <Sidebar />
      <Main />
    </Stack>
  )
}