import ButtonGroup from "../../../shared/components/ButtonGroup";
import Button from "../../../shared/components/Button";

import { GuitarURLQuery, setGuitarURLQuery } from "../../../shared/lib/types";

interface SelectRootStringProps {
  guitarURLQuery: GuitarURLQuery;
  setGuitarURLQuery: setGuitarURLQuery;
}

const SelectRootString: React.FC<SelectRootStringProps> = ({
  guitarURLQuery,
  setGuitarURLQuery,
}) => {
  const { root } = guitarURLQuery;

  function handleClickRoot(clickedRoot: number) {
    if (clickedRoot === root) return;

    const newQuery: GuitarURLQuery = { ...guitarURLQuery, root: clickedRoot };
    setGuitarURLQuery(newQuery);
  }

  return (
    <ButtonGroup>
      <Button
        type="toggle"
        active={root === 6}
        onClick={() => handleClickRoot(6)}
      >
        Root 6th String
      </Button>
      <Button
        type="toggle"
        active={root === 5}
        onClick={() => handleClickRoot(5)}
      >
        Root 5th String
      </Button>
    </ButtonGroup>
  );
};

export default SelectRootString;
