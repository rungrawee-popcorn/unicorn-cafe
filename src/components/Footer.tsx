import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 8,
        py: 3,
        textAlign: "center",
        bgcolor: "#f8f8f8",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <Typography variant="body2">© 2026 Unicorn Cafe</Typography>

      <Typography variant="caption" color="text.secondary">
        Food illustrations and images sourced from Freepik and Vecteezy.
      </Typography>
    </Box>
  );
};

export default Footer;
