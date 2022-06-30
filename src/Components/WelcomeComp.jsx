import React from "react";
import { css } from "@emotion/css";
import BlueStar from "../Images/Blue_Star.png";
import { BsArrowRightShort, BsFillStarFill } from "react-icons/bs";
import ReviewImg from "../Images/Reviews_img.png";

export default function WelcomeComp() {
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-items: center;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: flex-start;
            align-items: center;
            align-self: flex-start;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-items: flex-start;
              align-items: center;
            `}
          >
            <div
              className={css`
                font-weight: 700;
                font-size: 18px;
                letter-spacing: 0.5px;
                color: #ffffff;
                opacity: 0.5;
                font-family: sans-serif;
                white-space: nowrap;
              `}
            >
              {" "}
              WELCOME TO COINCARD
            </div>
            <div
              className={css`
                opacity: 0.5;
                border-bottom: 1px solid #ffffff;
                width: 75px;
                height: 0px;
                display: flex;
                flex: 1;
                margin-left: 2%;
              `}
            />
          </div>

          <img
            alt=""
            src={BlueStar}
            className={css`
              width: 37.5px;
              height: 37.5px;
              margin-left: 25%;
            `}
          />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: flex-start;
            align-items: center;
            flex: 1;
            margin-top: 5%;
          `}
        >
          <div>
            <div
              className={css`
                font-size: 76px;
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
                white-space: nowrap;
              `}
            >
              <img
                alt=""
                src={BlueStar}
                className={css`
                  width: 25px;
                  height: 25px;
                  position: absolute;
                  left: 6.5%;
                  opacity: 0.5;
                `}
              />
              Get a <span style={{ color: "#4873FF" }}>VCC</span> in
            </div>
            <div
              className={css`
                font-size: 76px;
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
                white-space: nowrap;
              `}
            >
              Just <span style={{ color: "#4873FF" }}>5 Minutes</span>
            </div>
          </div>
        </div>
        <div
          className={css`
            flex: 1;
            align-self: flex-start;
            margin-top: 4%;
          `}
        >
          <div
            className={css`
              color: white;
              font-weight: 400;
              font-size: 20px;
              line-height: 26px;
              letter-spacing: 0.5px;
              opacity: 0.5;
              font-family: sans-serif;
              white-space: nowrap;
            `}
          >
            Lorem ipsum dolor sit amet, consect adipiscing elit.
          </div>
          <div
            className={css`
              color: white;
              font-weight: 400;
              font-size: 20px;
              line-height: 26px;
              letter-spacing: 0.5px;
              opacity: 0.5;
              font-family: sans-serif;
              white-space: nowrap;
            `}
          >
            Curabitur consectetur sapien ante, ac congue libero.
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: flex-start;
            align-items: center;
            align-self: flex-start;
            margin-top: 4%;
          `}
        >
          <button
            className={css`
              background: #4873ff;
              border-radius: 16.2846px;
              color: white;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              padding: 13.0588px 42px;
              gap: 5px;
              font-family: sans-serif;
              margin-right: 75px;
              &:hover {
                color: #4873ff;
                background: white;
              }
            `}
          >
            Get Started
            <BsArrowRightShort size={20} />
          </button>
          <div
            className={css`
              font-family: sans-serif;
              font-weight: 700;
              font-size: 18px;
              line-height: 23px;
              color: white;
              white-space: nowrap;
            `}
          >
            Learn More
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-items: space-evenly;
            align-items: center;
            align-self: flex-start;
            margin-top: 4%;
            justify-content: space-evenly;
          `}
        >
          <img
            alt=""
            src={ReviewImg}
            className={css`
              width: 198px;
              height: auto;
            `}
          />
          <div
            className={css`
              width: 2px;
              background: white;
              height: 62px;
              margin-right: 30px;
              margin-left: 30px;
            `}
          />
          <div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                justify-items: center;
                align-items: center;
                color: white;
                font-weight: 700;
                font-size: 16px;
                text-align: center;
                font-family: sans-serif;
              `}
            >
              Rated 4.9{" "}
              <BsFillStarFill
                color={"#00B67A"}
                className={css`
                  margin-left: 3px;
                  margin-right: 3px;
                `}
              />{" "}
              on TrustPilot
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
