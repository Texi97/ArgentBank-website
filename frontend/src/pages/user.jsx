import React from "react";
import AccountHeader from "../components/AccountHeader/AccountHeader";
import Account from "../components/Account/Account";

const user = () => {
  return (
    <div className="main bg-dark">
      <AccountHeader />
      <Account />
    </div>
  );
};

export default user;
