import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Home from "./components/Home";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
