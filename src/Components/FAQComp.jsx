import React, { useState } from "react";
import { css } from "@emotion/css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { RiArrowDropDownLine } from "react-icons/ri";

function ListItems(props) {
  return (
    <>
      <ListItem
        sx={{
          borderRadius: props.showText ? 8 : 4,
          border: props.showText ? "#4873FF" : "rgba(72, 115, 255, 0.25)",
          borderWidth: 1.5,
          borderStyle: "solid",
          paddingTop: 2.5,
          paddingLeft: 5,
          paddingBottom: 2.5,
          paddingRight: 5,
          width: 1122,
          marginTop: props.showText === "SecText1" ? 0 : 2
        }}
        onClick={() => {
          props.setShowText(!props.showText);
        }}
      >
        <ListItemText
          primary={
            <div
              className={css`
                display: flex;
                justify-content: space-between;
              `}
              style={{ color: props.showText ? "#4873FF" : "white" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ?
              <RiArrowDropDownLine
                size={20}
                style={{
                  transform: props.showText ? "rotate(180deg)" : "none"
                }}
              />
            </div>
          }
          secondary={
            props.showText ? (
              <div
                className={css`
                  text-align: justify;
                  color: rgba(255, 255, 255, 0.75);
                  margin-top: 12px;
                `}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ultricies neque tortor, at bibendum leo sagittis non. In sed
                efficitur leo. Cras velit massa, malesuada at orci sed,
                imperdiet finibus tortor. Donec at leo luctus, faucibus nisi ac,
                tincidunt nibh. Aliquam et sodales est. Cras diam lacus, lacinia
                non ultricies et, efficitur eget risus. Sed dolor erat,
                venenatis in quam sed, vestibulum dictum lacus. Nunc euismod
                purus nibh, at mattis nibh volutpat in. Donec eu commodo dolor.
                Sed efficitur ultrices justo, quis dapibus leo fermentum at.
                Praesent interdum erat nisi, viverra egestas turpis posuere et.
              </div>
            ) : null
          }
          sx={{ color: "white" }}
        />
      </ListItem>
    </>
  );
}

export default function FAQComp() {
  const [SecText1, setSecText1] = useState(false);
  const [SecText2, setSecText2] = useState(true);
  const [SecText3, setSecText3] = useState(false);
  const [SecText4, setSecText4] = useState(false);
  const [SecText5, setSecText5] = useState(false);
  const [SecText6, setSecText6] = useState(false);
  return (
    <>
      <div
        className={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          align-items: center;
          justify-items: center;
          font-family: sans-serif;
        `}
      >
        <div
          className={css`
            font-weight: 500;
            font-size: 36px;
            color: white;
          `}
        >
          Frequently Asked{" "}
          <span
            className={css`
              font-weight: 500;
              font-size: 36px;
              color: #4873ff;
            `}
          >
            Questions
          </span>
        </div>
        <div
          className={css`
            font-weight: 400;
            color: white;
            font-weight: 400;
            opacity: 0.5;
            margin-top: 18px;
          `}
        >
          In hac habitasse platea dictumst. Proin sollicitudin odio augue. Cras
          nibh m.
        </div>
        <div>
          <List sx={{ marginTop: 6 }}>
            <ListItems showText={SecText1} setShowText={setSecText1} />
            <ListItems showText={SecText2} setShowText={setSecText2} />
            <ListItems showText={SecText3} setShowText={setSecText3} />
            <ListItems showText={SecText4} setShowText={setSecText4} />
            <ListItems showText={SecText5} setShowText={setSecText5} />
            <ListItems showText={SecText6} setShowText={setSecText6} />
          </List>
        </div>
        <div
          className={css`
            margin-top: 4%;
            color: white;
          `}
        >
          Still have any questions?
          <span
            className={css`
              color: #4873ff;
            `}
          >
            Contact Us
          </span>
        </div>
      </div>
    </>
  );
}
