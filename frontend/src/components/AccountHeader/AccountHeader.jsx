import React from "react";
import "./AccountHeader.css";

const AccountHeader = () => {
  return (
    <div class="header">
      <div>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button class="edit-button">Edit Name</button>
      </div>
      <h2 class="sr-only">Accounts</h2>
    </div>
  );
};

export default AccountHeader;
