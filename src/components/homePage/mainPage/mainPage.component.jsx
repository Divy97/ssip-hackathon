import React, { useState } from "react";
import "./mainPage.styles.css";

const MainPage = () => {
  const [feesPaid, setFeesPaid] = useState(10000);
  const [pendingAssignments, setPendingAssignments] = useState(2);
  const [completedAssignments, setCompletedAssignments] = useState(8);

  return (
    <>
      <div
        className="row"
        style={{
          marginLeft: "17rem",
        }}
      >
        <div
          className="col-sm-4"
          style={{
            width: "20rem",
            height: "8rem",
          }}
        >
          <div className="card">
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  textAlign: "center",
                }}
              >
                Fees Paid
              </h5>
              <p className="card-text">
                <i
                  class="fa-sharp fa-solid fa-indian-rupee-sign"
                  style={{
                    fontSize: "3rem",
                  }}
                ></i>
                <h1
                  style={{
                    marginTop: "-50px",
                    marginLeft: "4rem",
                  }}
                >
                  {" "}
                  {feesPaid}
                </h1>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{
            width: "20rem",
            height: "5rem",
          }}
        >
          <div className="card">
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  textAlign: "center",
                }}
              >
                Attendance
              </h5>
              <p className="card-text">
                <i
                  class="fa-solid fa-clipboard-user"
                  style={{
                    fontSize: "3rem",
                  }}
                ></i>
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "2.2rem",
                    textAlign: "center",
                    marginLeft: "3rem",
                  }}
                >
                  75%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-4"
          style={{
            width: "20rem",
            height: "5rem",
          }}
        >
          <div className="card">
            <div className="card-body">
              <h5
                className="card-title"
                style={{
                  textAlign: "center",
                }}
              >
                {" "}
                Assignments
              </h5>
              <p
                className="card-text"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Pending:{" "}
                <span
                  style={{
                    fontWeight: "normal",
                    marginLeft: "3.2rem",
                  }}
                >
                  {pendingAssignments}
                </span>
              </p>
              <h5 className="card-title"></h5>
              <p
                className="card-text"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.3rem",
                }}
              >
                Completed:
                <span
                  style={{
                    fontWeight: "normal",
                    marginLeft: "2rem",
                  }}
                >
                  {completedAssignments}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
