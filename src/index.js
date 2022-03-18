import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./state/store";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./resources/theme";

// import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

