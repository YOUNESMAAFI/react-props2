import React from "react";
import "./App.css";
import Profile from "./profile/Profile";
import image from "./logo.svg";

let user = {
  name: "Younes",
  profession: "WebDev",
  bio: "Iam Younes a newbie WebDev",
};

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        profession={user.profession}
        bio={user.bio}
      ></Profile>
    </div>
  );
}

export default App;
