import ButtonGroup from "./ButtonGroup";
import Button from "./Button";

function SelectRootString({ searchParams, setSearchParams }) {
  const { root } = searchParams;

  function handleClickRoot(clickedRoot) {
    if (clickedRoot === root) return;

    const newParams = { ...searchParams, root: clickedRoot };
    setSearchParams(newParams);
  }

  return (
    <ButtonGroup>
      <Button active={root === 6} onClick={() => handleClickRoot(6)}>
        Root 6th String
      </Button>
      <Button active={root === 5} onClick={() => handleClickRoot(5)}>
        Root 5th String
      </Button>
    </ButtonGroup>
  );
}

export default SelectRootString;
