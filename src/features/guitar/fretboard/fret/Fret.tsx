import { useGuitarQuery } from "../../../../hooks/useGuitarQuery";

import styles from "./Fret.module.css";
import String from "../string/String";

import Note from "../../../../shared/classes/Note";

interface FretProps {
  fretNum: number;
  fret: Array<Note | null>;
  noteFilter: string | undefined;
}

const Fret: React.FC<FretProps> = ({ fretNum, fret, noteFilter }) => {
  const [{ view }] = useGuitarQuery();

  // Guitar inlays typically appear on 1, 3, 5, 7, 9
  // On fret 12, there is typically a double inlay
  const doubleInlay = fretNum === 12;
  const showInlay =
    (fretNum % 2 !== 0 && fretNum !== 1 && fretNum !== 11 && fretNum !== 13) ||
    doubleInlay;

  const width = 115 - (fretNum - 1) * 6 + "%";

  return (
    <>
      <div className={styles.fret} style={{ width }}>
        {showInlay && (
          <div className={styles.inlayContainer}>
            <div className={styles.inlay}></div>
            {doubleInlay && <div className={styles.inlay}></div>}
          </div>
        )}
        {noteFilter && view === "all"
          ? fret.map((note, i) => (
              <String
                key={i}
                note={noteFilter === note?.value ? note : null}
                stringNum={i + 1}
              />
            ))
          : fret.map((note, i) => (
              <String key={i} note={note} stringNum={i + 1} />
            ))}
      </div>
    </>
  );
};

export default Fret;
