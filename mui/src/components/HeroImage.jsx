import Box from '@mui/material/Box'

const HeroImage = ({src, alt}) => {
  return (
      <Box component={"img"}
          src={src}
          alt={alt}
          sx={{
              width: "100%",
              maxHeight:1200,
              display: "block",
              borderRadius:2,
          }}
      />      
  )
}

export default HeroImage
