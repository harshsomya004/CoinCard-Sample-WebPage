import React, { useRef } from "react";
import "./styles.css";
import { css } from "@emotion/css";
import NavBar from "./Components/NavBar";
import WelcomeComp from "./Components/WelcomeComp";
import CardComp from "./Components/CradComp";
import FAQComp from "./Components/FAQComp";
import ReviewsComp from "./Components/ReviewsComp";
import BaseComp from "./Components/BaseComp";
import FeatureComp from "./Components/FeatureComp";

export default function App() {
  const FeatureRef = useRef();
  const FAQRef = useRef();
  const AboutRef = useRef();
  const OrderRef = useRef();
  const ScreenWidth = window.innerWidth;

  const handleClick = (val) => {
    let ref;
    if (val === "feature") {
      ref = FeatureRef;
    } else if (val === "FAQ") {
      ref = FAQRef;
    } else if (val === "about") {
      ref = AboutRef;
    } else if (val === "order") {
      ref = OrderRef;
    }
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={css`
          background-color: rgba(30, 30, 44, 0.25);
          border-bottom: 1px solid rgba(72, 115, 255, 0.25);
          padding-left: 10%;
          padding-right: 10%;
          padding-top: 0.5%;
          padding-bottom: 0.5%;
        `}
      >
        <NavBar handleClick={handleClick} />
      </div>
      <div
        className={css`
          display: flex;
          align-items: center;
          margin-top: 10%;
          margin-left: 10%;
          margin-right: 10%;
          gap: ${ScreenWidth > 768 ? "2.15in" : "75px"};
          flex-direction: ${ScreenWidth > 769 ? "row" : "column"};
        `}
        ref={OrderRef}
      >
        <WelcomeComp />
        <CardComp />
      </div>
      <div
        className={css`
          margin-top: 12%;
          margin-left: 10%;
          margin-right: 10%;
        `}
        ref={FeatureRef}
      >
        <FeatureComp />
      </div>
      <div
        className={css`
          margin-top: 12%;
          margin-left: 10%;
          margin-right: 10%;
        `}
        ref={FAQRef}
      >
        <FAQComp />
      </div>

      <div
        className={css`
          margin-top: 12%;
          margin-left: 10%;
          margin-right: 10%;
        `}
        ref={AboutRef}
      >
        <ReviewsComp />
      </div>
      <div
        className={css`
          margin-top: 6%;
          padding-left: 10%;
          padding-right: 10%;
          background-color: #020440;
        `}
      >
        <BaseComp />
        <div
          className={css`
            background: rgba(190, 190, 190, 0.5);
            width: 100%;
            height: 2px;
            opacity: 0.25;
            margin-bottom: ${ScreenWidth > 768 ? "2%" : "8%"};
          `}
        />
        <div
          className={css`
            padding-bottom: ${ScreenWidth > 768 ? "2%" : "8%"};
            font-size: 14.6956px;
            line-height: 19px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-content: center;
            color: #ffffff;
            text-align: center;
            gap: 20px;
          `}
        >
          Copyright © 2022 CoinCard. All Rights Reserved
          {ScreenWidth > 768 ? (
            <div
              className={css`
                width: 5px;
                height: 5px;
                background: white;
                border-radius: 999px;
                align-self: center;
              `}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
