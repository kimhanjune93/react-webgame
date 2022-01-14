import React, { Component } from "react";
import Try from "./Try";
function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
}

class NumberBaseball extends Component {
  state = {
    result: "",
    value: "",
    answer: getNumbers(),
    tries: [],
  };
  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.value === this.state.answer.join('')) {

    } else {

    }
  };
  onChangeInput = () => {};

  fruits = [
    { fruit: "사과", taste: "맛있다" },
    { fruit: "배", taste: "맛있다" },
  ];
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
        <ul>
          {this.fruits.map((v, i) => {
            return (
              <Try value = {v} index = {i} key = {v.fruit + v.taste}/>
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball;
