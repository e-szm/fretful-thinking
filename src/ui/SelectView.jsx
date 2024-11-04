import { useRef } from "react";

import Button from "./Button";

function updateParamRefs(searchParams, ref) {
  for (let param in searchParams) {
    ref.current[param] = searchParams[param];
  }
}

function SelectView({ searchParams, setSearchParams }) {
  const { view, note } = searchParams;
  const allParamsRef = useRef({ ...searchParams });

  function handleClickView(clickedView) {
    if (clickedView === view) return;

    updateParamRefs(searchParams, allParamsRef);

    let newParams;
    if (clickedView === "all") newParams = { view: clickedView, note };
    if (clickedView === "pentatonics")
      newParams = {
        view: clickedView,
        pentShape: allParamsRef.current.pentShape || 1,
        tonality: allParamsRef.current.tonality || "minor",
        note,
      };
    if (clickedView === "chords")
      newParams = {
        view: clickedView,
        tonality: allParamsRef.current.tonality || "minor",
        note,
        root: allParamsRef.current.root || 6,
      };

    setSearchParams(newParams);
  }

  return (
    <div>
      <Button active={view === "all"} onClick={() => handleClickView("all")}>
        All Notes
      </Button>
      <Button
        active={view === "pentatonics"}
        onClick={() => handleClickView("pentatonics")}
      >
        Pentatonics
      </Button>
      <Button
        active={view === "chords"}
        onClick={() => handleClickView("chords")}
      >
        Chords
      </Button>
    </div>
  );
}

export default SelectView;
