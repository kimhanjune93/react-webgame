import * as React from "react";
import { useEffect, useReducer, useMemo, Dispatch } from "react";

export const CODE = {
  MINE: -7,
  NORMAL: -1,
  QUESTION: -2,
  FLAG: -3,
  QUESTION_MINE: -4,
  FLAG_MINE: -5,
  CLICKED_MINE: -6,
  OPENED: 0,
} as const;

interface ReducerState {
  tableData: number[][];
  data: {
    row: number;
    cell: number;
    mine: number;
  };
  timer: number;
  result: string;
  halted: boolean;
  opendCount: number;
}

const initialState: ReducerState = {
  tableData: [],
  data: {
    row: 0,
    cell: 0,
    mine: 0,
  },
  timer: 0,
  result: "",
  halted: true,
  opendCount: 0,
};

const plantMine = (row: number, cell: number, mine: number) => {
  const candidate = Array(row * cell)
    .fill(undefined)
    .map((arr, i) => {
      return i;
    });
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }
  const data = [];
  for (let i = 0; i < row; i++) {
    const rowData: number[] = [];
    data.push(rowData);
    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  for (let k = 0; k < shuffle.length; k++) {
    const ver = Math.floor(shuffle[k] / cell);
    const hor = shuffle[k] % cell;
    data[ver][hor] = CODE.MINE;
  }
  return data;
};

export const START_GAME = "START_GAME";
export const OPEN_CELL = "OPEN_CELL";
export const CLICK_MINE = "CLICK_MINE";
export const FLAG_CELL = "FLAG_CELL";
export const QUESTION_CELL = "QUESTION_CELL";
export const NORMALIZE_CELL = "NORMALIZE_CELL";
export const INCREMENT_TIMER = "INCREMENT_TIMER";

interface StartGameAction {
  type: typeof START_GAME;
  row: number;
  cell: number;
  mine: number;
}

const startGame = (
  row: number,
  cell: number,
  mine: number
): StartGameAction => {
  return {
    type: START_GAME,
    row,
    cell,
    mine,
  };
};
interface OpenCellAction {
  type: typeof OPEN_CELL;
  row: number;
  cell: number;
}

const openCell = (row: number, cell: number): OpenCellAction => {
  return {
    type: OPEN_CELL,
    row,
    cell,
  };
};

interface ClickMineAction {
  type: typeof CLICK_MINE;
  row: number;
  cell: number;
}

const clickMine = (row: number, cell: number): ClickMineAction => {
  return {
    type: CLICK_MINE,
    row,
    cell,
  };
};
interface FlagMineAction {
  type: typeof FLAG_CELL;
  row: number;
  cell: number;
}

const flagMine = (row: number, cell: number): FlagMineAction => {
  return {
    type: FLAG_CELL,
    row,
    cell,
  };
};

interface QuestionCellAction {
  type: typeof QUESTION_CELL;
  row: number;
  cell: number;
}

const questionCell = (row: number, cell: number): QuestionCellAction => {
  return {
    type: QUESTION_CELL,
    row,
    cell,
  };
};

interface NormalizeCellAction {
  type: typeof NORMALIZE_CELL;
  row: number;
  cell: number;
}

const normalizeCell = (row: number, cell: number): NormalizeCellAction => {
  return {
    type: NORMALIZE_CELL,
    row,
    cell,
  };
};

interface IncrementTimerAction {
  type: typeof INCREMENT_TIMER;
}

const incrementTimer = (): IncrementTimerAction => {
  return {
    type: INCREMENT_TIMER,
  };
};

type ReducerActions =
  | StartGameAction
  | OpenCellAction
  | ClickMineAction
  | FlagMineAction
  | QuestionCellAction
  | NormalizeCellAction
  | IncrementTimerAction;

const reducer = (
  state = initialState,
  action: ReducerActions
): ReducerState => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        data: {
          row: action.row,
          cell: action.cell,
          mine: action.mine,
        },
        opendCount: 0,
        tableData: plantMine(action.row, action.cell, action.mine),
        halted: false,
        timer: 0,
      };
    case OPEN_CELL:
    case CLICK_MINE: {
      const tableData = [...state.tableData];
      tableData[action.row] = [...state.tableData[action.row]];
      tableData[action.row][action.cell] = CODE.CLICKED_MINE;
      return {
        ...state,
        tableData,
        halted: true,
      };
    }
    default:
      return state;
  }
};

const MineSearch = () => {
  return <></>;
};

export default MineSearch;
