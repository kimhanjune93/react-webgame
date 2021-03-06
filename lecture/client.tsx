import * as React from "react";
import * as ReactDom from "react-dom";
import App from "./App";
import {StoreProvider} from './Context';

ReactDom.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.querySelector("#root")
);