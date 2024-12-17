import { useGuitarQuery } from "../../../../hooks/useGuitarQuery";

import styles from "./Fret.module.css";
import String from "../string/String";

import Note from "../../../../shared/classes/Note";

interface FretProps {
  num: number;
  fret: Array<Note | null>;
  noteFilter: string | undefined;
}

const Fret: React.FC<FretProps> = ({ num, fret, noteFilter }) => {
  const [{ view }] = useGuitarQuery();

  // Guitar inlays typically appear on 1, 3, 5, 7, 9
  // On fret 12, there is typically a double inlay
  const doubleInlay = num === 12;
  const showInlay = (num % 2 !== 0 && num !== 11 && num !== 13) || doubleInlay;

  return (
    <>
      <div className={styles.fret}>
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
