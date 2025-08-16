import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  const siteName = "Site Name";

  return (
    <Box minHeight="100vh" bgcolor="grey.50">
      <Header siteName={siteName}/>
      <Container maxWidth="lg" sx={{py:8}}>

      </Container>
      <Footer siteName={siteName}/>
    </Box>
  )
}

export default App
