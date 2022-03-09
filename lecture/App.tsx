import * as React from "react";
// import { Component } from "react";  // class형
import { FC } from "react";
// import { Dispatch } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { logIn, logOut, ThunkDispatch } from "./actions/user";
import { RootState } from "./reducers";
import { UserState } from "./reducers/user";

const App: FC = () => {
  const { isLoggingIn, data } = useSelector<RootState, UserState>(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(
      logIn({
        id: "kimhanjune",
        password: "비밀번호",
      })
    );
  };
  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      {isLoggingIn ? (
        <div>로그인 중</div>
      ) : data ? (
        <div>{data.nickname}</div>
      ) : (
        "로그인 해주세요."
      )}
      {!data ? (
        <button onClick={onClick}>로그인</button>
      ) : (
        <button onClick={onLogout}>로그아웃</button>
      )}
    </div>
  );
};
export default App;

// class형

// interface StateToProps {
//   user: UserState;
// }

// interface DispatchToProps {
//   dispatchLogIn: ({ id, password }: { id: string; password: string }) => void;
//   dispatchLogOut: () => void;
// }

// class App extends Component<StateToProps & DispatchToProps> {
//   onClick = () => {
//     this.props.dispatchLogIn({
//       id: "kimhanjune",
//       password: "비밀번호",
//     });
//   };
//   onLogout = () => {
//     this.props.dispatchLogOut();
//   };
//   render() {
//     const { user } = this.props;
//     console.log(user);
//     return (
//       <div>
//         {user.isLoggingIn ? (
//           <div>로그인 중</div>
//         ) : user.data ? (
//           <div>{user.data.nickname}</div>
//         ) : (
//           "로그인 해주세요."
//         )}
//         {!user.data ? (
//           <button onClick={this.onClick}>로그인</button>
//         ) : (
//           <button onClick={this.onLogout}>로그아웃</button>
//         )}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state: RootState) => ({
//   user: state.user,
//   posts: state.posts,
// }); //reselect

// const mapDispatchToProps = (dispatch: ThunkDispatch) => ({
//   dispatchLogIn: (data: { id: string; password: string }) =>
//     dispatch(logIn(data)),
//   dispatchLogOut: () => dispatch(logOut()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
