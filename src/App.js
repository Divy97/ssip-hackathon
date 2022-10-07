import React from "react";

import NavigationBar from "./components/navigation/navigation.component";
import HomePage from "./components/homePage/homePage.component";

import LogIn from "./components/logIn/login.component";
import SignUp from "./components/signUp/signUp.component";

import Admission from "./components/admission/admission.component";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Payment from "./components/payment/payment.component";
const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </Router>
      {/* <SignUp /> */}
    </>
  );
};

export default App;
