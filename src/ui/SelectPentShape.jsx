import { useGuitarQuery } from "../hooks/useGuitarQuery";

import Button from "./Button";

function SelectPentShape() {
  const [searchParams, setSearchParams] = useGuitarQuery();

  function handleClickPentShape(clickedPentShape) {
    if (clickedPentShape === searchParams.pentShape) return;

    const newParams = { ...searchParams, pentShape: clickedPentShape };
    setSearchParams(newParams);
  }

  return (
    <div>
      <Button onClick={() => handleClickPentShape(1)}>Shape 1</Button>
      <Button onClick={() => handleClickPentShape(2)}>Shape 2</Button>
      <Button onClick={() => handleClickPentShape(3)}>Shape 3</Button>
      <Button onClick={() => handleClickPentShape(4)}>Shape 4</Button>
      <Button onClick={() => handleClickPentShape(5)}>Shape 5</Button>
    </div>
  );
}

export default SelectPentShape;
