import ButtonGroup from "../../../shared/components/ButtonGroup";
import Button from "../../../shared/components/Button";

import { GuitarURLQuery, setGuitarURLQuery } from "../../../shared/lib/types";

interface SelectPentShapeProps {
  guitarURLQuery: GuitarURLQuery;
  setGuitarURLQuery: setGuitarURLQuery;
}

const SelectPentShape: React.FC<SelectPentShapeProps> = ({
  guitarURLQuery,
  setGuitarURLQuery,
}) => {
  const { pentShape } = guitarURLQuery;

  function handleClickPentShape(clickedPentShape: number) {
    if (clickedPentShape === pentShape) return;

    const newQuery: GuitarURLQuery = {
      ...guitarURLQuery,
      pentShape: clickedPentShape,
    };
    setGuitarURLQuery(newQuery);
  }

  return (
    <ButtonGroup>
      <Button
        type="toggle"
        active={pentShape === 1}
        onClick={() => handleClickPentShape(1)}
      >
        Shape 1
      </Button>
      <Button
        type="toggle"
        active={pentShape === 2}
        onClick={() => handleClickPentShape(2)}
      >
        Shape 2
      </Button>
      <Button
        type="toggle"
        active={pentShape === 3}
        onClick={() => handleClickPentShape(3)}
      >
        Shape 3
      </Button>
      <Button
        type="toggle"
        active={pentShape === 4}
        onClick={() => handleClickPentShape(4)}
      >
        Shape 4
      </Button>
      <Button
        type="toggle"
        active={pentShape === 5}
        onClick={() => handleClickPentShape(5)}
      >
        Shape 5
      </Button>
    </ButtonGroup>
  );
};

export default SelectPentShape;
