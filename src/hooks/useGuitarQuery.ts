import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import {
  GuitarURLQuery,
  setGuitarURLQuery,
  isGuitarView,
  isGuitarTonality,
} from "../shared/lib/types";

function useGuitarQuery(): [GuitarURLQuery, setGuitarURLQuery] {
  const [searchParams, setSearchParams] = useSearchParams();

  const placeholder: Record<string, string> = {};
  searchParams.forEach(
    (value: string, key: string) => (placeholder[key] = value)
  );
  if (!isGuitarView(placeholder.view))
    throw new Error('Missing or invalid "view" query parameter');

  const query: GuitarURLQuery = { view: placeholder.view };
  if (placeholder.note) query.note = placeholder.note;
  if (placeholder.pentShape) query.pentShape = Number(placeholder.pentShape);
  if (placeholder.tonality && isGuitarTonality(placeholder.tonality))
    query.tonality = placeholder.tonality;
  if (placeholder.root) query.root = Number(placeholder.root);

  const setGuitarURLQuery: setGuitarURLQuery = (nextInit) => {
    if (typeof nextInit === "function") return setSearchParams(nextInit);
    console.log("Next init: ", nextInit);

    const newQuery: URLSearchParamsInit = {};
    Object.entries(nextInit).forEach((entry: [string, string]) => {
      if (entry[1]) newQuery[entry[0]] = entry[1];
    });

    console.log("New query: ", newQuery);
    setSearchParams(newQuery);
  };

  return [query, setGuitarURLQuery];
}

export { useGuitarQuery };
