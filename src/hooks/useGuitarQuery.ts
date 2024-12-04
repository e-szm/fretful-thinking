import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

interface GuitarURLQuery {
  view?: string;
  note?: string;
  pentShape?: number;
  tonality?: string;
  root?: number;
}

function useGuitarQuery(): [
  GuitarURLQuery,
  (paramsObj: GuitarURLQuery) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();

  const query: GuitarURLQuery = {};
  const placeholder: Record<string, string> = {};

  searchParams.forEach(
    (value: string, key: string) => (placeholder[key] = value)
  );

  if (placeholder.view) query.view = placeholder.view;
  if (placeholder.note) query.note = placeholder.note;
  if (placeholder.pentShape) query.pentShape = Number(placeholder.pentShape);
  if (placeholder.tonality) query.tonality = placeholder.tonality;
  if (placeholder.root) query.root = Number(placeholder.root);

  function cleanAndSetURLQuery(
    nextInit: GuitarURLQuery | ((prev: URLSearchParams) => URLSearchParamsInit)
  ) {
    if (typeof nextInit === "function") return setSearchParams(nextInit);

    const newQuery: GuitarURLQuery = { ...nextInit };
    Object.entries(newQuery).forEach((entry: [string, string]) => {
      if (!entry[1]) delete newQuery[entry[0] as keyof GuitarURLQuery];
    });

    setSearchParams(newQuery as URLSearchParamsInit);
  }

  return [query, cleanAndSetURLQuery];
}

export { useGuitarQuery };
