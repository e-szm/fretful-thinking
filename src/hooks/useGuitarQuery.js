import { useSearchParams } from "react-router-dom";

function useGuitarQuery() {
  const [searchParams, setSearchParams] = useSearchParams();

  const extractedParams = {};
  searchParams.forEach((value, key) => (extractedParams[key] = value));
  if (extractedParams.pentShape)
    extractedParams.pentShape = Number(extractedParams.pentShape);

  function cleanAndSetSearchParams(paramsObj) {
    if (typeof paramsObj === "function") return setSearchParams(paramsObj);

    const newParams = { ...paramsObj };
    Object.entries(newParams).forEach(
      (entry) => !entry[1] && delete newParams[entry[0]]
    );

    setSearchParams(newParams);
  }

  return [extractedParams, cleanAndSetSearchParams];
}

export { useGuitarQuery };
