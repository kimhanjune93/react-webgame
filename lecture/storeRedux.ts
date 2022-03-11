import {
  createStore,
  MiddlewareAPI,
  Dispatch,
  AnyAction,
  applyMiddleware,
  compose,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers";

const initialState = {
  user: {
    isLoggingIn: false,
    data: null,
  },
  posts: [],
};

const firstMiddleware =
  (store: MiddlewareAPI) =>
  (next: Dispatch<AnyAction>) =>
  (action: AnyAction) => {
    console.log("로깅", action);
    next(action);
  };

const thunkMiddleware =
  (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    // redux-thunk 를 install 해도 됨.
    // redux-thunk는 짧기때문에 직접구현 하는 방법을 사용함.
    // dependency에 추가 하게되면 version up 시 충돌날수도 있음
    if (typeof action === "function") {
      // 비동기
      return action(store.dispatch, store.getState);
    }
    return next(action); // 동기
  };

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware(firstMiddleware, thunkMiddleware))
    : composeWithDevTools(applyMiddleware(firstMiddleware, thunkMiddleware));

const store = createStore(reducer, initialState, enhancer);

export default store;
