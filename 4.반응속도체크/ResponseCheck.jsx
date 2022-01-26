import React, { useState, useRef } from "react";
const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");

      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
      startTime.current = new Date();
    } else if (state === "ready") {
      // 성급하게 클릭
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요");

      clearTimeout(timeout.current);
    } else if (state === "now") {
      endTime.current = new Date();
      // 반응속도 체크
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, (endTime.current - startTime.current)];
      });
    }
  };

  const onReset = () => {
    setState("waiting");
    setMessage("클릭해서 시작하세요");
    setResult([]);
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {result.length === 0 ? null : (
        <>
          <div>
            평균 시간:
            {result.reduce((a, c) => a + c) / result.length}
            ms
          </div>
          <button onClick={onReset}>리셋</button>
        </>
      )}
    </>
  );
};

export default ResponseCheck;
