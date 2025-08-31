import Typography from '@mui/material/Typography';

const HeroHeading = ({children}) => {
  return (
      <Typography variant='h4' fontWeight={"bold"} gutterBottom>
          {children}
      </Typography>
  )
}

export default HeroHeading
