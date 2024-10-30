import { useNavigate } from "react-router-dom";

function useGuitarNavigate() {
  const navigate = useNavigate();

  return function ({ numFrets, tuning }, searchParams) {
    // The # symbol must be converted to a URL encoded value
    const urlReadyTuning = tuning.map((note) =>
      note[1] === "#" ? note[0] + "%23" : note
    );

    navigate(
      `/guitar/${numFrets}/${urlReadyTuning.join(
        "-"
      )}?${searchParams.toString()}`
    );
  };
}

export { useGuitarNavigate };
