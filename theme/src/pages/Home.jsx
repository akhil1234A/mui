import Container from '@mui/material/Container'
import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProTip from './ProTip';
import Copyright from './Copyright';

const Home = () => {
  return (
    <Container maxWidth='sm'>
        <Box sx={{my:4}}>
            <Typography variant='h4' component='h1' sx={{mb:2}}>
                This is a Headng
            </Typography>
            <ProTip/>
            <Copyright/>
        </Box>
    </Container>
  )
}

export default Home
