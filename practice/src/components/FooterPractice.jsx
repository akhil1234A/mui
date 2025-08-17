import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { LinkedIn } from "@mui/icons-material";
import { Link } from "@mui/material";

const FooterPractice = () => {
  return (
    <Box bgcolor={'grey.100'} sx={{p:5, mt:5}} display={'flex'} justifyContent={'space-between'}>
      <Box>
        <Typography gutterBottom>Site name</Typography>
        <Box display={'flex'} gap={2}>
            {[Facebook, LinkedIn, Instagram, Youtube].map((Icon,idx)=>(
            <Icon size={20} key={idx}/>
        ))}
        </Box>
      </Box>
        {[1,2,3].map((val)=>(
            <Box  key={val} display={'flex'} flexDirection={'column'} gap={1}>
                <Typography>Topic</Typography>
                {[1,2,3].map((value,idx)=>(
                    <Link underline='none' color="default" key={idx}>{`Page ${value}`}</Link>
                ))}
            </Box>

        ))}
      </Box>
  )
}

export default FooterPractice
