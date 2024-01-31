import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { theme } from "./theme";
import Home from "./components/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<div>edit</div>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
