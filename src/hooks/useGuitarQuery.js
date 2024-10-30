import { useSearchParams } from "react-router-dom";

function useGuitarQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const view = searchParams.get("view");
  const pentShape = Number(searchParams.get("pentShape"));
  const tonality = searchParams.get("tonality");
  const note = searchParams.get("note");

  function cleanAndSetSearchParams(paramsObj) {
    if (typeof paramsObj === "function") return setSearchParams(paramsObj);

    const newParams = { ...paramsObj };
    Object.entries(newParams).forEach(
      (entry) => !entry[1] && delete newParams[entry[0]]
    );

    setSearchParams(newParams);
  }

  return [{ view, pentShape, tonality, note }, cleanAndSetSearchParams];
}

export { useGuitarQuery };
