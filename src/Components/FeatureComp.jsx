import React from "react";
import { css } from "@emotion/css";
import Grid from "@mui/material/Grid";
import { IoMdFlash, IoDiamondOutline } from "react-icons/io";
import { MdOutlineVpnKey } from "react-icons/md";

const ScreenWidth = window.innerWidth;
function GridBox(props) {
  return (
    <>
      <div
        className={css`
          background: rgba(255, 255, 255, 0.05);
          padding: 5px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-items: center;
          width: auto;
          height: auto;
          margin-right: 15px;
          margin-bottom: 20px;
          padding: 20px;
          border-radius: 18px;
        `}
      >
        <div
          className={css`
            background: rgba(72, 115, 255, 0.1);
            border-radius: 12px;
            padding: 15px;
            margin-bottom: 5%;
          `}
        >
          {props.logo === "Flash" ? (
            <IoMdFlash size={20} color={"#4873FF"} />
          ) : props.logo === "Diamond" ? (
            <IoDiamondOutline size={20} color={"#4873FF"} />
          ) : (
            <MdOutlineVpnKey size={20} color={"#4873FF"} />
          )}
        </div>
        <div
          className={css`
            font-size: 22px;
            color: white;
            margin-bottom: 5%;
          `}
        >
          Feature Name
        </div>
        <div
          className={css`
            opacity: 0.75;
            color: white;
            font-weight: 400;
            text-align: start;
          `}
        >
          {props.text}
        </div>
      </div>
    </>
  );
}

export default function FeatureComp() {
  const data = [
    {
      text:
        "Curabitur leo elit, fermentum vel erat id, sodales euismod nisl. Sed nec ante nibh. Curabitur varius varius sollicitudin. "
    },
    {
      text:
        "vamus tempus odio in nunc consequat, et luctus ipsum semper. Pellentesque porta est velit, vitae tristique ante mollis in. "
    },
    {
      text:
        "Praesent augue nisl, temp Vivamus tempus odio in nunc consequat, et luctus ipsum semper. Pellentesque porta est velit."
    },
    {
      text:
        "Praesent augue nisl, temp Vivamus tempus odio in nunc consequat, et luctus ipsum semper. Pellentesque porta est velit."
    },
    {
      text:
        "Curabitur leo elit, fermentum vel erat id, sodales euismod nisl. Sed nec ante nibh. Curabitur varius varius sollicitudin."
    },
    {
      text:
        "vamus tempus odio in nunc consequat, et luctus ipsum semper. Pellentesque porta est velit, vitae tristique ante mollis in. "
    }
  ];

  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: content;
          justify-items: center;
          align-content: center;
          align-items: center;
          font-family: sans-serif;
        `}
      >
        <div
          className={css`
            font-size: 36px;
            color: white;
          `}
        >
          Why
          <span
            className={css`
              color: #4873ff;
            `}
          >
            {" "}
            Coinbase
          </span>{" "}
          is The Best
        </div>
        <div
          className={css`
            margin-top: 20px;
            color: white;
            opacity: 0.5;
            text-align: ${ScreenWidth > 768 ? "normal" : "center"};
          `}
        >
          In hac habitasse platea dictumst. Proin sollicitudin odio augue. Cras
          nibh m.
        </div>
        <div
          className={css`
            margin-top: 50px;
          `}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 1 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            columnSpacing={0}
          >
            <Grid item xs={4}>
              <GridBox text={data[0].text} Logo={"Diamond"} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[4].text} Logo={"Key"} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[5].text} Logo={"Flash"} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[3].text} Logo={"Flash"} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[1].text} Logo={"Diamond"} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[2].text} Logo={"Key"} />
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
