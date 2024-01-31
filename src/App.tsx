import {
  Breadcrumbs,
  Container,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { theme } from "./theme";
import Home from "./pages/Home";
import EditPage from "./pages/Edit";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="sm">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
            style={{ padding: "20px 0" }}
          >
            <Typography color="textPrimary">Task Management</Typography>
            <Link href="/" sx={{ textDecoration: "none" }}>
              Home
            </Link>
          </Breadcrumbs>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit" element={<EditPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}
