import React from "react";
import { css } from "@emotion/css";
import Grid from "@mui/material/Grid";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";
import { BsFillStarFill } from "react-icons/bs";
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
          margin-right: 18px;
          margin-bottom: 20px;
          padding: 20px;
          border-radius: 18px;
        `}
      >
        <div
          className={css`
            opacity: 0.75;
            color: white;
            font-weight: 400;
          `}
        >
          {props.text}
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-top: 15px;
          `}
        >
          <img
            alt=""
            src={props.img}
            className={css`
              width: auto;
              max-width: 45px;
              height: auto;
              max-height: 45px;
              margin-right: 10px;
            `}
          />
          <div
            className={css`
              font-size: 18px;
              color: white;
              white-space: nowrap;
            `}
          >
            Reviewer Name
          </div>
          <div
            className={css`
              background: rgba(0, 195, 68, 0.25);
              border-radius: 12px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              color: #00c344;
              width: 64px;
              height: 32px;
              font-size: 10px;
              margin-left: 1in;
            `}
          >
            <BsFillStarFill
              size={10}
              className={css`
                margin-right: 3px;
              `}
            />
            5/5
          </div>
        </div>
      </div>
    </>
  );
}

export default function ReviewsComp() {
  const data = [
    {
      text:
        "Suspendisse blandit sapien est, id suscipit ex lobortis ac. Donec hendrerit, arcu et sodales pellentesque, orci arcu lacinia ligula, vel iqurisus quam quis libero. Phasellus eget velit tellus. In viverra erat justo, vel aliquet enim viverra vel. Sed porta cursus orci, hendrerit tristique nulla faucibus a. "
    },
    {
      text:
        "Cras id ex venenatis, laoreet arcu vel, tempus justo. Sed fermentum in lacus ac venenatis. Nullam risus nisl, scelerisque sit amet aliquet at, pretium non leo. "
    },
    {
      text:
        "Integer sodales eros molestie nisl hendrerit, vel eleifend ligula aliquet. Nullam lobortis tortor arcu, ut vestibulum velit sagittis vitae. Ut odio diam, vestibulum sit amet tortor sit ame."
    },
    {
      text:
        "Cras id ex venenatis, laoreet arcu vel, tempus justo. Sed fermentum in lacus ac venenatis. Nullam risus nisl, scelerisque sit amet aliquet at, pretium non leo."
    },
    {
      text:
        "Integer blandit tellus mollis lacus molestie, id convallis justo porta. Donec luctus pellentes sem, eget aliquam diam imperdiet quis. Vivamus semper, urna eget tempor mattis, ipsum enim ultrices arcu, quis varius lorem massa malesuada nunc. Cras eget imperdiet elit. Duis elementu."
    },
    {
      text:
        "Phasellus rutrum libero lectus, vel vehicula mi hendrerit vitae. Proin ut ligula ut ipsum egestas lacinia non a metus. Cras porttitor sem sit amet mauris malesuada, a viverra ex suscipit. Suspendisse tincidunt auctor nunc, id pellentesque mi eleifend fermentum. In id tristique nisi. Integer ligula eli."
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
          Our
          <span
            className={css`
              color: #4873ff;
            `}
          >
            Reviews
          </span>
        </div>
        <div
          className={css`
            margin-top: 20px;
            color: white;
            opacity: 0.5;
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
            spacing={{ md: 2 }}
            columns={{ md: 12 }}
            columnSpacing={0}
          >
            <Grid item xs={4}>
              <GridBox text={data[0].text} img={img1} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[4].text} img={img5} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[5].text} img={img6} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[3].text} img={img4} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[1].text} img={img2} />
            </Grid>
            <Grid item xs={4}>
              <GridBox text={data[2].text} img={img3} />
            </Grid>
          </Grid>
        </div>
        {/* <div
          className={css`
            display: grid;
            grid: 1fr / repeat(3, 1fr);
            margin-top: 50px;
          `}
        >
          <GridBox text={data[0].text} img={img1} />
          <GridBox text={data[1].text} img={img2} />
          <GridBox text={data[2].text} img={img3} />
          <GridBox text={data[3].text} img={img4} />
          <GridBox text={data[4].text} img={img5} />
          <GridBox text={data[5].text} img={img6} />
        </div> */}
      </div>
    </>
  );
}
