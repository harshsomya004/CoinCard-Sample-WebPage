import "./styles.css";
import { css } from "@emotion/css";
import NavBar from "./Components/NavBar";
import WelcomeComp from "./Components/WelcomeComp";
import CardComp from "./Components/CradComp";
import FAQComp from "./Components/FAQComp";
import ReviewsComp from "./Components/ReviewsComp";

export default function App() {
  return (
    <>
      <NavBar />

      <div
        className={css`
          display: flex;
          flex-direction: row;
          justify-items: space-evenly;
          align-items: center;
          margin-top: 10%;
          margin-left: 8%;
          margin-right: 10%;
          gap: 2.15in;
        `}
      >
        <WelcomeComp />
        <CardComp />
      </div>
      <div
        className={css`
          margin-top: 12%;
          margin-left: 8%;
          margin-right: 10%;
        `}
      >
        <FAQComp />
      </div>
      <div
        className={css`
          margin-top: 12%;
          margin-left: 8%;
          margin-right: 10%;
        `}
      >
        <ReviewsComp />
      </div>
    </>
  );
}
