import React from "react";
import "./AccountHeader.css";

const AccountHeader = () => {
  return (
    <div className="header">
      <div>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default AccountHeader;
