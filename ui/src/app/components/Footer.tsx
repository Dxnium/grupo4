'use client'
import { Container, Typography, Box } from "@mui/material";
import { useUserContext } from "../context/UserContext";

export default function footer() {
  const { user } = useUserContext();
  return (
    <Box
      component="footer"
      style={{ background: user?.role_id === 3 ? "#000" : "#1976d2" }}
      sx={{
        width: "100%",
        py: 2,
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "white",
        mt: "auto",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body2">
          DANIEL UMAÑA <br />
          EDWIN SOLORZANO <br />
          DAVID ZAMORA <br />
          EDUARDO SANCHEZ
        </Typography>

        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Shopeasy. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
