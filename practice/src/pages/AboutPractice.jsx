import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import HeaderPractice from '../components/HeaderPractice';
import FooterPractice from '../components/FooterPractice'

const AboutPractice = () => {
  return (
    <Box minHeight={'100vh'} bgcolor={'grey.200'}>
        <Container maxWidth={'lg'}  sx={{background:'white'}}>
            <HeaderPractice/>
        </Container>
                    <FooterPractice/>

    </Box>
  )
}

export default AboutPractice
