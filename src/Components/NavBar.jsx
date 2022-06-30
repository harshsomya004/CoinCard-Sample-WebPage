import React from "react";
import { css } from "@emotion/css";
import AppLogo from "../Images/CoinCard_Logo_Transparent.png";
import "@fontsource/plus-jakarta-sans";

export default function NavBar() {
  return (
    <>
      <div
        className={css`
          background-color: rgba(30, 30, 44, 0.25);
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-items: center;
          flex: 1;
          border-bottom: 1px solid rgba(72, 115, 255, 0.25);
        `}
      >
        <div>
          <img
            src={AppLogo}
            className={css`
              width: 22%;
              padding-top: 2.5%;
              padding-bottom: 2.5%;
              margin-left: 25%;
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
            gap: 1in;
            margin-right: auto;
          `}
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
            gap: 20px;
            margin-left: 20%;
            padding-right: 12%;
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
              padding: 10%;
              border-radius: 12px;
              margin-right: 20%;
              font-family: sans-serif;
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
