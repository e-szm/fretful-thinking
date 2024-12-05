import { useParams } from "react-router-dom";
import { GuitarTuning } from "../shared/lib/types";

interface GuitarURLParams {
  numFrets: number;
  tuning: GuitarTuning;
}

function useGuitarParams() {
  const { numFrets, tuning } = useParams();

  if (!numFrets || !tuning)
    throw new Error('Missing URL parameters: "numFrets" and/or "tuning"');

  const guitarParams: GuitarURLParams = {
    numFrets: Number(numFrets),
    tuning: tuning.split("-"),
  };

  return guitarParams;
}

export { useGuitarParams };
