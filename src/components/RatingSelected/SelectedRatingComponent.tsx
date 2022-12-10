import React from "react";
import InlineSVG from "react-inlinesvg";

import thankYou from "../../assets/images/illustration-thank-you.svg";

type SelectedRatingComponentProps = {
  rating: number;
  maxRating: number;
};

const SelectedRatingComponent = ({
  rating,
  maxRating,
}: SelectedRatingComponentProps) => {
  return (
    <main className="SelectedRatingComponent">
      <InlineSVG
        className="SelectedRatingComponent__thank-you"
        title="Thank You"
        src={thankYou}
      />
      <label className="SelectedRatingComponent__label">
        <span className="SelectedRatingComponent__selection-text">
          You selected {rating} out of {maxRating}
        </span>
      </label>
      <section className="SelectedRatingComponent__caption">
        <header className="SelectedRatingComponent__header">Thank you!</header>
        <p className="SelectedRatingComponent__text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </section>
    </main>
  );
};

export default SelectedRatingComponent;
