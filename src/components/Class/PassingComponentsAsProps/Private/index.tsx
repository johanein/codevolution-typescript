import React from "react";
import Login from "../Login";
import { ProfileProps } from "../Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

function Private({ isLoggedIn, Component }: PrivateProps) {
  return isLoggedIn ? <Component name="Albert" /> : <Login />;
}

export default Private;
