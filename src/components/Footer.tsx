import { Box } from "@mui/material";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box component={"section"} id="footer" sx={{ textAlign: "center" }}>
      <p style={{ fontSize: "12px" }}>
        &copy; {`${year} Serhii Pyloian`}
        <br />
        {"All rights reserved"}
      </p>
    </Box>
  );
};
