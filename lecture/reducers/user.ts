import {
  LOG_IN_REQUEST,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_OUT,
  LogInFailureAction,
  LogInRequestAction,
  LogInSuccessAction,
  LogOutAction,
} from "../actions/user";

const initialState = {
  isLoggingIn: false,
  data: null,
};
type UserReducerAction =
  | LogInFailureAction
  | LogInRequestAction
  | LogOutAction
  | LogInSuccessAction;
const userReducer = (prevState, action) => {
  switch (action.type) {
    default:
      return prevState;
  }
};

export default userReducer;
