import React from "react";
import InlineSVG from "react-inlinesvg";

import star from "assets/images/icon-star.svg";
import SelectionRatingComponentFeedback from "./SelectionRatingComponentFeedback";

type SelectionRatingComponentProps = {
  submitRating: () => void;
  selectedRating: number | null;
  maxRating: number;
  setSelectedRating: (rating: number | null) => void;
};

const SelectionRatingComponent = ({
  selectedRating,
  maxRating,
  submitRating,
  setSelectedRating,
}: SelectionRatingComponentProps) => {
  return (
    <main className="SelectionRatingComponent">
      <aside className="SelectionRatingComponent__star-container">
        <InlineSVG
          className="SelectionRatingComponent__star-icon"
          src={star}
          title="Star"
        />
      </aside>
      <header className="SelectionRatingComponent__header">
        How did we do?
      </header>
      <p className="SelectionRatingComponent__text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <SelectionRatingComponentFeedback
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        submitRating={submitRating}
        maxRating={maxRating}
      />
    </main>
  );
};

export default SelectionRatingComponent;
