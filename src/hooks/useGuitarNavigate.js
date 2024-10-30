import { useNavigate } from "react-router-dom";

function useGuitarNavigate() {
  const navigate = useNavigate();

  return function ({ numFrets, tuning }, searchParams) {
    console.log(numFrets);
    console.log(tuning);
    console.log(searchParams.toString());
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
