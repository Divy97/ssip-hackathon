import React, { useRef, useEffect } from "react";
import "./community.styles.scss";

const Community = () => {
  return (
    <>
      <div class="community_container">
        <div class="row no-gutters">
          <div class="col-md-4 border-right">
            <div class="settings-tray">
              <span class="settings-tray--right">
                <i class="material-icons">
                  <i class="fa-solid fa-arrows-rotate"></i>
                </i>
                <i class="material-icons">
                  <i class="fa-sharp fa-solid fa-comment"></i>
                </i>
                <i class="material-icons">
                  <i class="fa-solid fa-bars"></i>
                </i>
              </span>
            </div>
            <div class="search-box">
              <div class="input-wrapper">
                <i class="material-icons">search</i>
                <input
                  class="community_input"
                  placeholder="Search here"
                  type="text"
                />
              </div>
            </div>
            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZX7ZSMnko64sGuea6mH9i9jcNAwqdJUhbNClyelH&s"
                alt=""
              />
              <div class="text">
                <h6>Amar</h6>
                <p class="text-muted">Hey, How are you?</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr />
            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000"
                alt=""
              />
              <div class="text">
                <h6>Akbar</h6>
                <p class="text-muted">Wanna grab a beer?</p>
              </div>
              <span class="time text-muted small">00:32</span>
            </div>
            <hr />
            <div class="friend-drawer friend-drawer--onhover ">
              <img
                class="profile-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGwZm4csjRf515O4msow11QhsGtM5QLyUC2vMZ9Tc&s"
                alt=""
              />
              <div class="text">
                <h6>Lisa</h6>
                <p class="text-muted">Seen that canned piece of s?</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr />
            <div class="friend-drawer friend-drawer--onhover">
              <img
                class="profile-image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVTFVqYBT6lSUSaVrFZlscqxzj-RtmoexXADZG5a0&s"
                alt=""
              />
              <div class="text">
                <h6>Anthony</h6>
                <p class="text-muted">Im studying spanish...</p>
              </div>
              <span class="time text-muted small">13:21</span>
            </div>
            <hr />
            {/* <div class="col-md-8">
      <div class="settings-tray">
        <div class="friend-drawer no-gutters friend-drawer--grey">
          <img
            class="profile-image"
            src="http://www.allmyfriends.it/robocop.jpg"
            alt=""
          />
          <div class="text">
            <h6>Robo Cop</h6>
            <p class="text-muted">
              Layin' down the law since like before Christ...
            </p>
          </div>
          <span class="settings-tray--right">
            <i class="material-icons">cached</i>
            <i class="material-icons">message</i>
            <i class="material-icons">menu</i>
          </span>
        </div>
      </div>
      <div class="chat-panel">
        <div class="row no-gutters">
          <div class="col-md-3">
            <div class="chat-bubble chat-bubble--left">Hello dude!</div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              Hello dude!
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              Hello dude!
            </div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3">
            <div class="chat-bubble chat-bubble--left">Hello dude!</div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3">
            <div class="chat-bubble chat-bubble--left">Hello dude!</div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3">
            <div class="chat-bubble chat-bubble--left">Hello dude!</div>
          </div>
        </div>
        <div class="row no-gutters">
          <div class="col-md-3 offset-md-9">
            <div class="chat-bubble chat-bubble--right">
              Hello dude!
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="chat-box-tray">
              <i class="material-icons">sentiment_very_satisfied</i>
              <input
                class="community_input"
                type="text"
                placeholder="Type your message here..."
              />
              <i class="material-icons">mic</i>
              <i class="material-icons">send</i>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
