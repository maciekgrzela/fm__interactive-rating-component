import React, { useMemo } from "react";

type SelectionRatingComponentFeedbackProps = {
  submitRating: () => void;
  selectedRating: number | null;
  maxRating: number;
  setSelectedRating: (rating: number | null) => void;
};

const SelectionRatingComponentFeedback = ({
  selectedRating,
  maxRating,
  submitRating,
  setSelectedRating,
}: SelectionRatingComponentFeedbackProps) => {
  const ratingDefaultClassName = "SelectionRatingComponentFeedback__rating";
  const ratingSelectedClassName =
    "SelectionRatingComponentFeedback__rating--selected";

  const renderRatings = useMemo(() => {
    return [...new Array(maxRating)].map((el, idx) => {
      let ratingClassName = ratingDefaultClassName;

      const selectRating = () => {
        if (selectedRating === idx + 1) setSelectedRating(null);
        else setSelectedRating(idx + 1);
      };

      if (selectedRating !== null && selectedRating === idx + 1)
        ratingClassName = `${ratingClassName} ${ratingSelectedClassName}`;

      return (
        <div className={ratingClassName} onClick={selectRating}>
          {idx + 1}
        </div>
      );
    });
  }, [maxRating, selectedRating, setSelectedRating]);

  return (
    <section className="SelectionRatingComponent__feedback SelectionRatingComponentFeedback">
      <div className="SelectionRatingComponentFeedback__ratings">
        {renderRatings}
      </div>
      <button
        className="SelectionRatingComponentFeedback__submit"
        onClick={submitRating}
      >
        Submit
      </button>
    </section>
  );
};

export default SelectionRatingComponentFeedback;
