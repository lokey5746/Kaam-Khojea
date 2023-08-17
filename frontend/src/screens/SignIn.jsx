import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <h1>SignIn Page</h1>
      <Link to="/signup">SignUp Page</Link>
    </div>
  );
};

export default SignIn;
