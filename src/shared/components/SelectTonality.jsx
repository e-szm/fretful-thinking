import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

function SelectTonality({ searchParams, setSearchParams }) {
  const { tonality } = searchParams;

  function handleClickTonality(clickedTonality) {
    if (clickedTonality === tonality) return;

    const newParams = { ...searchParams, tonality: clickedTonality };
    setSearchParams(newParams);
  }

  return (
    <ButtonGroup>
      <Button
        active={tonality === "minor"}
        onClick={() => handleClickTonality("minor")}
      >
        Minor
      </Button>
      <Button
        active={tonality === "major"}
        onClick={() => handleClickTonality("major")}
      >
        Major
      </Button>
    </ButtonGroup>
  );
}

export default SelectTonality;
