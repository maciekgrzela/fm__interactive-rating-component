import React, { useState } from "react";
import SelectedRatingComponent from "../RatingSelected/SelectedRatingComponent";
import SelectionRatingComponent from "../RatingSelection/SelectionRatingComponent";

const maxRating: number = 5;

const RatingComponent = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [ratingSubmitted, setRatingSubmitted] = useState<boolean>(false);

  const submitRating = () => {
    setRatingSubmitted(true);
  };

  return (
    <div className="RatingComponent">
      {ratingSubmitted && selectedRating ? (
        <SelectedRatingComponent
          rating={selectedRating}
          maxRating={maxRating}
        />
      ) : (
        <SelectionRatingComponent
          maxRating={maxRating}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          submitRating={submitRating}
        />
      )}
    </div>
  );
};

export default RatingComponent;
