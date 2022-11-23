import React from "react";
import "./App1.css";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import FullName from "./components/Profile/FullName";
import Address from "./components/Profile/Address";
const App1 = () => {
  return (
    <div>
      <ProfilePhoto />
      <p>
        <FullName />
        <Address />
      </p>
    </div>
  );
};

export default App1;
