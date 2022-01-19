import React from "react";
import ReactDom from "react-dom";
import { hot } from "react-hot-loader/root";

import ResponseCheckClass from "./ResponseCheckClass";

const Hot = hot(ResponseCheckClass);

ReactDom.render(<Hot />, document.querySelector("#root"));
