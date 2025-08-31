import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";


const InfoCard = ({ image, title, body }) => {
  return (
      <Card sx={{ height: "100%" }}>
          <image src={image} />
          <CardMedia component="img" image={image} alt={title} sx={{aspectRatio: "1 / 1", objectFit: "cover"}}/>
              <CardContent>
                  <Typography variant="h6" gutterBottom>
                        {title}
                  </Typography>
                  <Typography color="text.secondary">{body}</Typography>
              </CardContent>
    </Card>
  )
}

export default InfoCard
