import { useNavigate } from "react-router-dom";
import { GuitarURLParams, GuitarURLQuery } from "../shared/lib/types";

type GuitarNavigateFunction = (
  params: GuitarURLParams,
  query: URLSearchParams
) => void;

function useGuitarNavigate(): GuitarNavigateFunction {
  const navigate = useNavigate();

  return function (
    { numFrets, tuning }: GuitarURLParams,
    query: URLSearchParams
  ) {
    // The "#" symbol must be converted to a URL encoded value
    const urlReadyTuning = tuning.map((note) =>
      note[1] === "#" ? note[0] + "%23" : note
    );

    navigate(
      `/guitar/${numFrets}/${urlReadyTuning.join("-")}?${query.toString()}`
    );
  };
}

export { useGuitarNavigate };
