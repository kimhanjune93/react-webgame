import * as React from "react";
import NumberBaseball from "../3.숫자야구ts/NumberBaseball";
import RSP from "../5.가위바위보ts/RSP";
import Lotto from "../6.로또ts/Lotto";
import { Outlet, useLocation, useNavigate } from "react-router";

const GameMatcher = () => {
  const match = <Outlet />;
  const location = useLocation();
  const navigate = useNavigate();
  if (!match) {
    return <div>일치하는 게임이 없습니다.</div>;
  }
  let urlSearchParams = new URLSearchParams(location.search.slice(1));
  console.log(urlSearchParams.get("page"));
  if (match.params.name === "number-baseball") {
    return <NumberBaseball />;
  } else if (match.params.name === "rock-scissors-paper") {
    return <RSP />;
  } else if (match.params.name === "lotto-generator") {
    return <Lotto />;
  } else {
    return <div>일치하는 게임이 없습니다.</div>;
  }
};

export default GameMatcher;
