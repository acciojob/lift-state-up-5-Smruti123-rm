
import React from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <h2>Successfully Logged In!</h2>;
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
