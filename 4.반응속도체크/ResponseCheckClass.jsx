import React, { Component } from "react";

class ResponseCheck extends Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  };
  
  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { message, state, result } = this.state;
    if (state === "waiting") {
      this.setState({ state: "ready", message: "초록색이 되면 클릭하세요." });
      this.timeout = setTimeout(() => {
        this.setState({ state: "now", message: "지금 클릭" });
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 foseja
      this.startTime = new Date();
    } else if (state === "ready") {
      // 성급하게 클릭
      this.setState({
        state: "waiting",
        message: "너무 성급하시군요! 초록색이 된 후에 클릭하세요.",
      });
      clearTimeout(this.timeout);
    } else if (state === "now") {
      this.endTime = new Date();
      // 반응속도 체크
      this.setState((prevState) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요",
          result: [...prevState.result, this.endTime - this.startTime],
        };
      });
    }
  };

  reset = () => {
    this.setState({
      state: "waiting",
      message: "클릭해서 시작하세요",
      result: [],
    });
  };
  
  render() {
    const { message, state, result } = this.state;
    return (
      <>
        <div id="screen" className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.state.result.length === 0 ? null : (
          <>
            <div>
              평균 시간:
              {result.reduce((a, c) => a + c) / result.length}
              ms
            </div>
            <button onClick={this.reset}>리셋</button>
          </>
        )}
      </>
    );
  }
}

export default ResponseCheck;
