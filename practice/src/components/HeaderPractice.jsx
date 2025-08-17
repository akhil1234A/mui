import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

const HeaderPractice = () => {
  return (
    <AppBar position='static' color='default'>
        <Toolbar sx={{px:0, mx:0 , justifyContent:'space-between'}} >
            <Typography>Site name</Typography>
            <Box display={'flex'} alignItems={'center'} gap={3}>
                {[1,2,3].map((val,idx)=>(
                  <Link key={idx} color='text.secondary' underline='none'>{`page ${val}`}</Link>
                ))}
                <Button variant='contained' sx={{backgroundColor:'black'}}>Button</Button>
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default HeaderPractice
