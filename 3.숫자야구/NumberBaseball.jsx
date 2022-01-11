import React, { Component } from "react";
import { getAvailableNumberOfCores } from "../2.끝말잇기/node_modules/terser-webpack-plugin/types";

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = () => {};
  onChangeInput = () => {};
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>{tries.map(()=>{
            return(
                <li></li>
            )
        })}</ul>
      </>
    );
  }
}

export default NumberBaseball;
