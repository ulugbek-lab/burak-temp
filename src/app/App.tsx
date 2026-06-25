import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React app on Typscript redux
          </Typography>
        </Box>
        <Button variant="contained">contained</Button>
      </Stack>
    </Container>
  );
}

export default App;
