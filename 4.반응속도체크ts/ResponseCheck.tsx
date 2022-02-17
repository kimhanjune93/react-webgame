import * as React from "react";
import { useState, useRef, useCallback } from "react";

const ResponseCheck = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState<number[]>([]);
  const timeout = useRef<number | null>(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen = useCallback(() => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요.");

      timeout.current = window.setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
      startTime.current = new Date().getTime();
    } else if (state === "ready") {
      // 성급하게 클릭
      setState("waiting");
      setMessage("너무 성급하시군요! 초록색이 된 후에 클릭하세요");
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    } else if (state === "now") {
      endTime.current = new Date().getTime();
      // 반응속도 체크
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prevResult) => {
        return [...prevResult, endTime.current - startTime.current];
      });
    }
  }, [state]);

  const onReset = useCallback(() => {
    setResult([]);
  }, []);

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>
          평균 시간:
          {result.reduce((a, c) => a + c) / result.length}
          ms
        </div>
        <button onClick={onReset}>리셋</button>
      </>
    );
  };
  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheck;
