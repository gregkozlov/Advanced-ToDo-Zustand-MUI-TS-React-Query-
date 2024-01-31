import {
  Breadcrumbs,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Routes, Route, useLocation } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { theme } from "./theme";
import Home from "./pages/Home";
import EditPage from "./pages/Edit";

export default function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          style={{ padding: "20px 0" }}
        >
          <Typography color="textPrimary">Task Management</Typography>
          <Typography color="textPrimary">
            {location.pathname === "/" ? "Home" : "Edit"}
          </Typography>
        </Breadcrumbs>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
