import React from "react";
import { Theme, GlobalStyle } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import Toast from "./components/Toast/Toast";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Toast />
      </ThemeProvider>
    </>
  );
};

export default App;
