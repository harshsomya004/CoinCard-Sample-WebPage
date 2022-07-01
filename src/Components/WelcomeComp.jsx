import React, { useEffect } from "react";
import { css } from "@emotion/css";
import BlueStar from "../Images/Blue_Star.png";
import { BsArrowRightShort, BsFillStarFill } from "react-icons/bs";
import ReviewImg from "../Images/Reviews_img.png";
import { gsap } from "gsap";
import { TimelineMax, SteppedEase } from "gsap/all";

export default function WelcomeComp() {
  const ScreenWidth = window.innerWidth;
  const tl = new TimelineMax({ paused: true });
  useEffect(() => {
    tl.fromTo(
      ".text",
      2,
      { width: 0 },
      { width: "100%", ease: SteppedEase.config(12) },
      0
    );
    tl.fromTo(
      ".text",
      0.5,
      { "border-right-color": "#elelel" },
      {
        "border-rght-color": "#f7f7f7",
        repeat: -1,
        ease: SteppedEase.config(12)
      },
      0
    );
    tl.play();
  }, []);
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-items: center;
          justify-items: ${ScreenWidth > 768 ? "flex-start" : "center"};
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
              align-items: center;
              justify-items: flex-start;
            `}
          >
            <div
              className={css`
                font-weight: 700;
                font-size: 100%;
                letter-spacing: 0.5px;
                color: #ffffff;
                opacity: 0.5;
                font-family: sans-serif;
                white-space: nowrap;
              `}
            >
              WELCOME TO COINCARD
            </div>
            {ScreenWidth > 768 ? (
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
            ) : null}
          </div>

          <img
            alt=""
            src={BlueStar}
            style={{
              width: ScreenWidth > 768 ? "37.5px" : "8%",
              height: ScreenWidth > 768 ? "37.5px" : "8%",
              marginLeft: ScreenWidth > 768 ? "25%" : "10px"
            }}
          />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: column;
            justify-items: center;
            align-items: flex-start;
            margin-top: 5%;
            justify-content: flex-start;
            align-self: flex-start;
          `}
        >
          <div
            className={
              (css`
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
                white-space: nowrap;
              `,
              "text")
            }
            style={{
              fontSize: ScreenWidth > 768 ? "76px" : "150%"
            }}
          >
            {ScreenWidth > 768 ? (
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
            ) : null}
            Get a <span style={{ color: "#4873FF" }}>VCC</span> in
          </div>
          <div
            className={
              (css`
                color: white;
                font-family: sans-serif;
                letter-spacing: 0.5px;
                white-space: nowrap;
              `,
              "text")
            }
            style={{
              fontSize: ScreenWidth > 768 ? "76px" : "150%"
            }}
          >
            Just <span style={{ color: "#4873FF" }}>5 Minutes</span>
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
              letter-spacing: 0.5px;
              opacity: 0.5;
              font-family: sans-serif;
              white-space: nowrap;
            `}
            style={{
              fontSize: ScreenWidth > 768 ? "20px" : "10px"
            }}
          >
            Lorem ipsum dolor sit amet, consect adipiscing elit.
          </div>
          <div
            className={css`
              color: white;
              font-weight: 400;
              letter-spacing: 0.5px;
              opacity: 0.5;
              font-family: sans-serif;
              white-space: nowrap;
            `}
            style={{
              fontSize: ScreenWidth > 768 ? "20px" : "10px"
            }}
          >
            Curabitur consectetur sapien ante, ac congue libero.
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 4%;
          `}
          style={{
            justifyItems: ScreenWidth > 769 ? "flex-start" : "center",
            alignSelf: ScreenWidth > 769 ? "flex-start" : "center",
            gap: ScreenWidth > 769 ? "1.2in" : "27px"
          }}
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
              gap: 5px;
              font-family: sans-serif;
              &:hover {
                color: #4873ff;
                background: white;
              }
            `}
            style={{
              padding: ScreenWidth > 768 ? "13px 42px" : "10px"
            }}
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
            align-items: center;
            margin-top: 4%;
            justify-content: space-evenly;
          `}
          style={{
            flexDirection: ScreenWidth > 768 ? "row" : "column",
            justifyItems: ScreenWidth > 769 ? "space-evenly" : "center",
            alignSelf: ScreenWidth > 769 ? "flex-start" : "center",
            gap: ScreenWidth > 769 ? "0" : "10px"
          }}
        >
          <img
            alt=""
            src={ReviewImg}
            className={css`
              width: 40%;
              height: auto;
            `}
          />
          {ScreenWidth > 768 ? (
            <div
              className={css`
                width: 2px;
                background: white;
                height: 62px;
                margin-right: 9%;
                margin-left: 9%;
              `}
            />
          ) : null}
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
                white-space: nowrap;
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
