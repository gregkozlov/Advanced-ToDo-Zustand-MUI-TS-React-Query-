import {
  Breadcrumbs,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { theme } from "./theme";
import Home from "./pages/Home";
import EditPage from "./pages/Edit";
import History from "./pages/History";
import useTodoStore from "./store";

export default function App() {
  const { breadcrumb } = useTodoStore();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          style={{ padding: "20px 0" }}
        >
          <Typography color="textPrimary">
            <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
              Task Management
            </Link>
          </Typography>
          <Typography color="textPrimary">{breadcrumb}</Typography>
        </Breadcrumbs>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
