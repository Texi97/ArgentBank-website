import React from "react";
import Hero from "../components/Hero/Hero";
import FeatureItem from "../components/FeatureItem/FeatureItem";

const home = () => {
  return (
    <>
      <Hero
        title={"Features"}
        subtitles={["No Fees.", "No minimum deposit", "High interest rates"]}
        text={"Open a savings account with Argent Bank today!"}
      />
      <div className="features">
        <FeatureItem
          src="./icon-chat.webp"
          alt="Chat Icon"
          text="Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
          title="You are our #1 priority"
        />
        <FeatureItem
          src="./icon-money.webp"
          alt="Money Icon"
          text="The more you save with us, the higher your interest rate will be!"
          title="More savings means higher rates"
        />
        <FeatureItem
          src="./icon-security.webp"
          alt="Security Icon"
          text="We use top of the line encryption to make sure your data and money
        is always safe."
          title="Security you can trust"
        />
      </div>
    </>
  );
};

export default home;
