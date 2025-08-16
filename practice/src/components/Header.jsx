import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Header = ({siteName}) => {
  return (
    <AppBar position="static" color='default' elevation={0} sx={{borderBottom:1, borderColor: "divider"}}>
      <Toolbar sx={{justifyContent:"space-between"}}>
        <Typography variant='h6'>{siteName}</Typography>
        <Box display="flex" gap={3} alignItems="center">
          <Link href="#" underline='none' color='text.primary'>Page</Link>
          <Link href="#" underline='none' color='text.primary'>Page</Link>
          <Link href="#" underline='none' color='text.primary'>Page</Link>
          <Button variant='contained' sx={{bgcolor:"black", "&:hover": {bgcolor: "grey.800"}}}>Button</Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
