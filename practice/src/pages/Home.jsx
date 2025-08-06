import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import {ThemeProvider} from '@mui/material/styles'


const Home = () => {

  return (
    <Container maxWidth='sm'>
      <ThemeProvider theme={{
      palette: {
        primary: {
          main: '#007fff',
          dark: '#0066cc',
        }
      }
    }}>
      
      
    </ThemeProvider>
    </Container>
  )
}

export default Home
