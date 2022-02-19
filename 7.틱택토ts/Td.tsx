import * as React from "react";
import { FC, Dispatch, useCallback } from "react";
import { clickCell } from "./TicTacToe";

interface Props {
  dispatch: Dispatch<any>;
  rowIndex: number;
  cellIndex: number;
  cellData: string;
  children: string;
}

const Td: FC<Props> = ({ dispatch, rowIndex, cellIndex, cellData }) => {
  const onClickTd = useCallback(() => {
    if (cellData) {
      return;
    }
    dispatch(clickCell(rowIndex, cellIndex));
  }, [cellData]);
  return <td onClick={onClickTd}>{cellData}</td>;
};

export default Td;
