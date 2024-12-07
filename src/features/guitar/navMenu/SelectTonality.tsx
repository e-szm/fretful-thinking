import ButtonGroup from "../../../shared/components/ButtonGroup";
import Button from "../../../shared/components/Button";

import {
  GuitarURLQuery,
  setGuitarURLQuery,
  GuitarTonality,
} from "../../../shared/lib/types";

interface SelectTonalityProps {
  guitarURLQuery: GuitarURLQuery;
  setGuitarURLQuery: setGuitarURLQuery;
}

const SelectTonality: React.FC<SelectTonalityProps> = ({
  guitarURLQuery,
  setGuitarURLQuery,
}) => {
  const { tonality } = guitarURLQuery;

  function handleClickTonality(clickedTonality: GuitarTonality) {
    if (clickedTonality === tonality) return;

    const newQuery: GuitarURLQuery = {
      ...guitarURLQuery,
      tonality: clickedTonality,
    };
    setGuitarURLQuery(newQuery);
  }

  return (
    <ButtonGroup>
      <Button
        type="toggle"
        active={tonality === "minor"}
        onClick={() => handleClickTonality("minor")}
      >
        Minor
      </Button>
      <Button
        type="toggle"
        active={tonality === "major"}
        onClick={() => handleClickTonality("major")}
      >
        Major
      </Button>
    </ButtonGroup>
  );
};

export default SelectTonality;
