import * as React from "react";
import * as ReactDom from "react-dom";

import { Provider } from "react-redux";
import store from './store';
import App from "./App";

ReactDom.render(<App />, document.querySelector("#root"));
