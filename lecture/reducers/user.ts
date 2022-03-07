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

export interface UserState {
  isLoggingIn: boolean;
  data: {
    nickname: string;
  } | null;
}

const initialState: UserState = {
  isLoggingIn: false,
  data: null,
};
type UserReducerActions =
  | LogInFailureAction
  | LogInRequestAction
  | LogOutAction
  | LogInSuccessAction;
const userReducer = (prevState = initialState, action: UserReducerActions) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
    case LOG_IN_SUCCESS:
    case LOG_IN_FAILURE:
    case LOG_OUT:
      return {
        ...prevState,
        data: null,
      };

    default:
      return prevState;
  }
};

export default userReducer;
