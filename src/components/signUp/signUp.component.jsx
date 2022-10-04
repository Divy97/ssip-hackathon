import React from "react";
import "./signUp.styles.css";

const SignUp = () => {
  return (
    <>
      <div className="signUpBody">
        <form>
          <h3>SignUp Here</h3>

          <label htmlFor="firstName">First Name</label>
          <input type="text" placeholder="First Name" id="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Last Name" id="lastName" />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" id="email" />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="text" placeholder="Phone Number" id="phoneNumber" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
          />

          <button>Log In</button>
          <div className="social">
            <div className="go">
              <i className="fab fa-google"></i> Google
            </div>
            <div className="fb">
              <i className="fab fa-facebook"></i> Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
