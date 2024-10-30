import { useGuitarQuery } from "../hooks/useGuitarQuery";

import Button from "./Button";

function SelectTonality() {
  const [searchParams, setSearchParams] = useGuitarQuery();

  function handleClickTonality(clickedTonality) {
    if (clickedTonality === searchParams.tonality) return;

    const newParams = { ...searchParams, tonality: clickedTonality };
    setSearchParams(newParams);
  }

  return (
    <div>
      <Button onClick={() => handleClickTonality("minor")}>Minor</Button>
      <Button onClick={() => handleClickTonality("major")}>Major</Button>
    </div>
  );
}

export default SelectTonality;
