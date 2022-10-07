import React from "react";
import SideBar from "./sidebar/sideBar.component";
import MainPage from "./mainPage/mainPage.component";
import Chart from "./chart/chart.component";

const HomePage = () => {
  return (
    <>
      <div className="homePage_section">
        <div className="left">
          <SideBar />
        </div>

        <div className="right">
          <MainPage />
        </div>
      </div>
      <Chart />
    </>
  );
};

export default HomePage;
