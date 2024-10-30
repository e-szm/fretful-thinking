import { useParams } from "react-router-dom";

function useGuitarParams() {
  const params = useParams();

  const numFrets = Number(params.numFrets);
  const tuning = params.tuning.split("-");

  return { numFrets, tuning };
}

export { useGuitarParams };
