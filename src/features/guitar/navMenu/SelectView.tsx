import { useRef } from "react";

import { useQuiz } from "../../quiz/QuizContext";

import ButtonGroup from "../../../shared/components/ButtonGroup";
import Button from "../../../shared/components/Button";

import {
  GuitarURLQuery,
  GuitarView,
  setGuitarURLQuery,
} from "../../../shared/lib/types";

interface SelectViewProps {
  guitarURLQuery: GuitarURLQuery;
  setGuitarURLQuery: setGuitarURLQuery;
}

const SelectView: React.FC<SelectViewProps> = ({
  guitarURLQuery,
  setGuitarURLQuery,
}) => {
  const { view, note } = guitarURLQuery;
  const allParamsRef = useRef<GuitarURLQuery>({ ...guitarURLQuery }); // Remembers the previuos URL parameters and query string between changes in view
  const { status: quizStatus } = useQuiz();
  const disabled = quizStatus === "in-progress";

  function handleClickView(clickedView: GuitarView) {
    if (clickedView === view) return;

    allParamsRef.current = { ...allParamsRef.current, ...guitarURLQuery };

    let newQuery: GuitarURLQuery;
    if (clickedView === "all") newQuery = { view: clickedView, note };
    else if (clickedView === "pentatonics")
      newQuery = {
        view: clickedView,
        pentShape: allParamsRef.current.pentShape || 1,
        tonality: allParamsRef.current.tonality || "minor",
        note,
      };
    else if (clickedView === "chords")
      newQuery = {
        view: clickedView,
        tonality: allParamsRef.current.tonality || "minor",
        note,
        root: allParamsRef.current.root || 6,
      };
    else throw new Error("Invalid view was clicked");

    setGuitarURLQuery(newQuery);
  }

  return (
    <ButtonGroup disabled={disabled}>
      <Button
        type="toggle"
        active={view === "all"}
        onClick={() => handleClickView("all")}
        disabled={disabled}
      >
        All Notes
      </Button>
      <Button
        type="toggle"
        active={view === "pentatonics"}
        onClick={() => handleClickView("pentatonics")}
        disabled={disabled}
      >
        Pentatonics
      </Button>
      <Button
        type="toggle"
        active={view === "chords"}
        onClick={() => handleClickView("chords")}
        disabled={disabled}
      >
        Chords
      </Button>
    </ButtonGroup>
  );
};

export default SelectView;
