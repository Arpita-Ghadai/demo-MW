import { useState } from "react";

function AuthForm() {
  let [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => {
              setIsLogin(true);
            }}
          >
            Login
          </button>
          <button
            className={isLogin ? "" : "active"}
            onClick={() => {
              setIsLogin(false);
            }}
          >
            SignUp
          </button>
        </div>

        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <a href="#">Forgot Password</a>
              <button type="submit">Login</button>
              <p>
                Not a member?
                <a
                  href="#"
                  onClick={() => {
                    setIsLogin(false);
                  }}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp Form</h2>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="password" placeholder="Enter your password" />
              <input type="password" placeholder="Confirm your password" />
              <button type="submit">Sign Up</button>
              <p>
                Already a member?
                <a
                  href="#"
                  onClick={() => {
                    setIsLogin(true);
                  }}
                >
                  Login
                </a>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default AuthForm;
