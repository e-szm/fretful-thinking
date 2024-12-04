import { URLSearchParamsInit, useSearchParams } from "react-router-dom";

interface GuitarURLQuery {
  view: string;
  note?: string;
  pentShape?: number;
  tonality?: string;
  root?: number;
}

type CleanAndSetURLQuery = (
  nextInit: GuitarURLQuery | ((prev: URLSearchParams) => URLSearchParamsInit)
) => void;

function useGuitarQuery(): [GuitarURLQuery, CleanAndSetURLQuery] {
  const [searchParams, setSearchParams] = useSearchParams();

  const placeholder: Record<string, string> = {};
  searchParams.forEach(
    (value: string, key: string) => (placeholder[key] = value)
  );
  if (!placeholder.view)
    throw new Error('Missing or invalid "view" query parameter');

  const query: GuitarURLQuery = { view: placeholder.view };
  if (placeholder.note) query.note = placeholder.note;
  if (placeholder.pentShape) query.pentShape = Number(placeholder.pentShape);
  if (placeholder.tonality) query.tonality = placeholder.tonality;
  if (placeholder.root) query.root = Number(placeholder.root);

  const cleanAndSetURLQuery: CleanAndSetURLQuery = (nextInit) => {
    if (typeof nextInit === "function") return setSearchParams(nextInit);

    const newQuery: URLSearchParamsInit = {};
    Object.entries(nextInit).forEach((entry: [string, string]) => {
      if (entry[1]) newQuery[entry[0]];
    });

    setSearchParams(newQuery);
  };

  return [query, cleanAndSetURLQuery];
}

export { useGuitarQuery };
