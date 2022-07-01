import React from "react";
import { css } from "@emotion/css";
import AppLogo from "../Images/CoinCard_Logo_Transparent.png";
import "@fontsource/plus-jakarta-sans";

export default function NavBar() {
  const ScreenWidth = window.innerWidth;
  return (
    <>
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: ${ScreenWidth > 769 ? "row" : "column"};
          justify-content: ${ScreenWidth > 769 ? "center" : "center"};
          align-content: ${ScreenWidth > 769 ? "center" : "center"};
        `}
      >
        <div>
          <img
            src={AppLogo}
            className={css`
              padding-top: 2.5%;
              padding-bottom: 2.5%;
              margin-bottom: ${ScreenWidth > 480 ? "0px" : "8px"};
              width: ${ScreenWidth > 480 ? "30%" : "50%"};
            `}
            alt=""
          />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            margin-right: auto;
          `}
          style={{ gap: ScreenWidth > 480 ? "1in" : "15px" }}
        >
          <div
            className={css`
              color: white;
              font-size: 80%;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
              }
            `}
          >
            Order
          </div>
          <div
            className={css`
              color: white;
              font-size: 80%;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
              }
            `}
          >
            Features
          </div>
          <div
            className={css`
              color: white;
              font-size: 80%;
              white-space: nowrap;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
              }
            `}
          >
            About Us
          </div>
          <div
            className={css`
              color: white;
              font-size: 80%;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
              }
            `}
          >
            FAQs
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: center;
            align-items: center;
            justify-self: flex-end;
            margin-left: ${ScreenWidth > 480 ? "20%" : "0px"};
            gap: ${ScreenWidth > 480 ? "20px" : "20%"};
            margin-bottom: ${ScreenWidth > 480 ? "0%" : "5%"};
            margin-top: ${ScreenWidth > 480 ? "0%" : "5%"};
          `}
        >
          <div
            className={css`
              color: white;
              font-size: 80%;
              white-space: nowrap;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
              }
            `}
          >
            Log In
          </div>
          <button
            className={css`
              color: white;
              background: #4873ff;
              font-size: 80%;
              white-space: nowrap;
              border-radius: 12px;
              font-family: sans-serif;
              border-style: none;
              padding: ${ScreenWidth > 480 ? "10%" : "4%"};
              &:hover {
                background: white;
                color: #4873ff;
              }
            `}
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
