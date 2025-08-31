import Typography from "@mui/material/Typography";

const SectionHeading = ({children}) => {
    return (
        <Typography variant="h5" component={"h2"} fontWeight={600} gutterBottom>
            {children}
      </Typography>
  )
};

export default SectionHeading;
