import React, { Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";
import { ROUTES } from "./utils/routes";
import Loading from "./components/Loading";
type AppProps = {
  children?: React.ReactNode;
};

const App = ({ children }: AppProps) => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Router>
          <Suspense fallback={<Loading />}>
            <Routes>
              {ROUTES.map(({ path, Component }, i) => (
                <Route key={i} path={path} element={<Component />} />
              ))}
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
