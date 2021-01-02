import { authService } from "fbase";
import React from "react";
// import { useHistory } from "react-router-dom";

export default () => {
  //   const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    // history.push("/"); 7번과 9번줄을 사용해도 라우터에서 사용한 <Redirect> 태그와 같은 효과. 로그아웃해도 프로필에 남아있는 현상 해결 가능.
  };
  return <button onClick={onLogOutClick}>Log Out</button>;
};
