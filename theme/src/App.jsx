import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Home from "./pages/Home";
import Login from "./Login";
import { getTheme } from "./theme";
import Layout from "./layout";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout toggleTheme={toggleTheme} mode={mode}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;
