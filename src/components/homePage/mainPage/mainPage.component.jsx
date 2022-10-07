import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./mainPage.styles.scss";

const MainPage = () => {
  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              background:
                " url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
            }}
          ></div>
        </div>
        <div className="description">
          <h1>Guidance</h1>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <Link to="/guidance">Explore More</Link>
          </p>
        </div>
      </div>
      <div className="blog-card alt">
        <div className="meta">
          <div
            className="photo"
            style={{
              background:
                " url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)",
            }}
          ></div>
        </div>
        <div className="description">
          <h1>Library</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum
            dolorum architecto obcaecati enim dicta praesentium, quam nobis!
            Neque ad aliquam facilis numquam. Veritatis, sit.
          </p>
          <p className="read-more">
            <Link to="/eBooks">Explore More</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
