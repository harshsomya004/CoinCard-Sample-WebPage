import React, { useState } from "react";
import { css } from "@emotion/css";
import BackGround from "../Images/CardBackGround_Img.png";
import Logo from "../Images/CoinCard_Logo_Transparent.png";
import { MdOutlineEmail } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { SiEthereum, SiLitecoin } from "react-icons/si";
import { BsArrowRightShort } from "react-icons/bs";

export default function CardComp() {
  const ScreenWidth = window.innerWidth;
  const [Email, setEmail] = useState();
  const [amount, setAmount] = useState();
  const [paymentMethod, setPaymentMethod] = useState("Bitcoin");
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-items: flex-start;
        align-items: flex-start;
      `}
    >
      <div
        className={css`
          width: ${ScreenWidth > 768 ? "550px" : "100%"};
          height: 100%;
          background: #00196b;
          border-radius: 48px;
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-items: flex-start;
        `}
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <img
          src={Logo}
          alt=""
          className={css`
            width: 40%;
            margin-left: 6%;
            margin-top: 20%;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: ${ScreenWidth > 768 ? "row" : "column"};
            justify-content: space-between;
            align-content: flex-start;
            margin-left: 6%;
            margin-right: 6%;
            margin-top: 10%;
            margin-bottom: 7%;
            gap: ${ScreenWidth > 768 ? "0%" : "10px"};
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 10px 10px 10px 25px;
              gap: 10px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              border-style: none;
              margin-right: 20px;
            `}
          >
            <MdOutlineEmail size={20} color={"#4873FF"} />
            <input
              className={css`
                background: transparent;
                border-style: none;
                color: white;
                width: 100%;
                &:focus {
                  outline: none;
                }
                &::placeholder {
                  color: white;
                }
              `}
              placeholder="Your Email Address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              padding: 10px 0px 10px 25px;
              gap: 10px;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              border-style: none;
            `}
          >
            <BiDollar size={20} color={"#4873FF"} />
            <input
              className={css`
                background: transparent;
                border-style: none;
                color: white;
                width: 100%;
                &:focus {
                  outline: none;
                }
                &::placeholder {
                  color: white;
                }
              `}
              placeholder="Card Amount"
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex: 1;
            flex-direction: ${ScreenWidth > 768 ? " row" : "column"};
            justify-content: flex-start;
            align-items: ${ScreenWidth > 768 ? " center" : "flex-start"};
            background: #4873ff;
            height: 100%;
            width: 100%;
            border-bottom-left-radius: 48px;
            border-bottom-right-radius: 48px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-content: flex-start;
              margin-left: ${ScreenWidth > 768 ? "5%" : "10%"};
            `}
          >
            <div
              className={css`
                margin-top: 5%;
                margin-bottom: 5%;
              `}
            >
              <div
                className={css`
                  font-size: 16px;
                  color: white;
                  font-family: sans-serif;
                `}
              >
                Select
              </div>
              <div
                className={css`
                  font-size: 16px;
                  color: white;
                  font-family: sans-serif;
                `}
              >
                Payment
              </div>
            </div>
            <button
              className={css`
                padding: ${ScreenWidth > 768 ? "10px" : "auto"};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: ${ScreenWidth > 768 ? "10%" : "15%"};
                margin-top: 5%;
                margin-bottom: 5%;
                border-radius: 10px;
                border-style: none;
              `}
              style={{
                background:
                  paymentMethod === "Bitcoin"
                    ? "#00196B"
                    : "rgba(255, 255, 255, 0.1)"
              }}
              onClick={() => {
                setPaymentMethod("Bitcoin");
              }}
            >
              {ScreenWidth > 768 ? (
                <BsCurrencyBitcoin
                  size={25}
                  style={{
                    color: paymentMethod === "Bitcoin" ? "white" : "#020335"
                  }}
                />
              ) : (
                <BsCurrencyBitcoin
                  size={20}
                  style={{
                    color: paymentMethod === "Bitcoin" ? "white" : "#020335"
                  }}
                />
              )}
            </button>
            <button
              className={css`
                padding: ${ScreenWidth > 768 ? "10px" : "auto"};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: 5%;
                margin-top: 5%;
                margin-bottom: 5%;
                border-radius: 10px;
                border-style: none;
              `}
              style={{
                background:
                  paymentMethod === "Ethereum"
                    ? "#00196B"
                    : "rgba(255, 255, 255, 0.1)"
              }}
              onClick={() => {
                setPaymentMethod("Ethereum");
              }}
            >
              {ScreenWidth > 768 ? (
                <SiEthereum
                  size={25}
                  style={{
                    color: paymentMethod === "Ethereum" ? "white" : "#020335"
                  }}
                />
              ) : (
                <SiEthereum
                  size={20}
                  style={{
                    color: paymentMethod === "Ethereum" ? "white" : "#020335"
                  }}
                />
              )}
            </button>
            <button
              className={css`
                padding: ${ScreenWidth > 768 ? "10px" : "auto"};
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                margin-left: 5%;
                margin-top: 5%;
                margin-bottom: 5%;
                border-radius: 10px;
                border-style: none;
              `}
              style={{
                background:
                  paymentMethod === "Litecoin"
                    ? "#00196B"
                    : "rgba(255, 255, 255, 0.1)"
              }}
              onClick={() => {
                setPaymentMethod("Litecoin");
              }}
            >
              {ScreenWidth > 768 ? (
                <SiLitecoin
                  size={25}
                  style={{
                    color: paymentMethod === "Litecoin" ? "white" : "#020335"
                  }}
                />
              ) : (
                <SiLitecoin
                  size={20}
                  style={{
                    color: paymentMethod === "Litecoin" ? "white" : "#020335"
                  }}
                />
              )}
            </button>
          </div>
          <button
            className={css`
              margin-left: 27.5%;
              margin-top: 5%;
              margin-bottom: 5%;
              padding: 15px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              background: #00196b;
              color: white;
              gap: 5px;
              border-style: none;
              border-radius: 10px;
              white-space: nowrap;
              &:hover {
                color: #00196b;
                background: white;
              }
            `}
          >
            Order Now
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-items: flex-start;
          align-items: flex-start;
          margin-top: 4%;
        `}
      >
        <div
          className={css`
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: white;
            opacity: 0.25;
          `}
        >
          A 5% Fee is applicable on each order. Min Order $10, Max Order $1000.
        </div>
        <div
          className={css`
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            color: white;
            opacity: 0.25;
          `}
        >
          By Proceeding you agree to ours Terms of Service and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
