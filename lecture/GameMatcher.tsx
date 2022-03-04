import * as React from "react";
import NumberBaseball from "./NumberBaseball";
import RSP from "./RSP";
import Lotto from "./Lotto";
import { useLocation, useNavigate, Routes, Route,useParams } from "react-router";

const GameMatcher = () => {
  let params = useParams().name;
  // const location = useLocation().pathname.split('/')[2];
  // const navigate = useNavigate();
  // let urlSearchParams = new URLSearchParams(location.search.slice(1));
  // console.log(urlSearchParams.get('page'));
  return (
    <Routes>
      <Route path="/game/number-baseball" element={<NumberBaseball />} />
      <Route path="rock-scissors-paper" element={<RSP />} />
      <Route path="lotto-generator" element={<Lotto />} />
      <Route path="*" element={<div>일치하는 게임이 없습니다.</div>} />
    </Routes>
  );
};

export default GameMatcher;
