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
          width: 550px;
          height: 410px;
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
            width: 175px;
            margin-left: 30px;
            margin-top: 20%;
          `}
        />
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: flex-start;
            margin-left: 30px;
            margin-right: 30px;
            margin-top: 10%;
            margin-bottom: 35px;
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
              padding: 10px 10px 10px 10px;
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
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            background: #4873ff;
            height: 100%;
            width: 100%;
            border-bottom-left-radius: 48px;
            border-bottom-right-radius: 48px;
          `}
        >
          <div
            className={css`
              margin-left: 30px;
              margin-top: 50px;
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
              padding: 10px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-left: 18px;
              margin-top: 50px;
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
            <BsCurrencyBitcoin
              size={25}
              style={{
                color: paymentMethod === "Bitcoin" ? "white" : "#020335"
              }}
            />
          </button>
          <button
            className={css`
              padding: 10px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-left: 18px;
              margin-top: 50px;
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
            <SiEthereum
              size={25}
              style={{
                color: paymentMethod === "Ethereum" ? "white" : "#020335"
              }}
            />
          </button>
          <button
            className={css`
              padding: 10px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              margin-left: 18px;
              margin-top: 50px;
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
            <SiLitecoin
              size={25}
              style={{
                color: paymentMethod === "Litecoin" ? "white" : "#020335"
              }}
            />
          </button>
          <button
            className={css`
              margin-left: 90px;
              margin-right: 30px;
              padding: 15px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              background: #00196b;
              color: white;
              gap: 5px;
              border-style: none;
              margin-top: 50px;
              border-radius: 10px;
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
