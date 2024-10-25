import { useSelector } from "react-redux";

import { getMenu } from "../../guitarSlice";

import styles from "./Fret.module.css";
import String from "../string/String";

function Fret({ num, fret, noteFilter }) {
  const menu = useSelector(getMenu);

  // Guitar inlays typically appear on 1, 3, 5, 7, 9
  // On fret 12, there is typically a double inlay
  const doubleInlay = num === 12;
  const showInlay = (num % 2 !== 0 && num !== 11) || doubleInlay;

  return (
    <>
      <div className={styles.fret}>
        {showInlay && (
          <div className={styles.inlayContainer}>
            <div className={styles.inlay}></div>
            {doubleInlay && <div className={styles.inlay}></div>}
          </div>
        )}
        {noteFilter && menu === "fretboard"
          ? fret.map((note, i) => (
              <String key={i} note={noteFilter === note ? note : ""} />
            ))
          : fret.map((note, i) => (
              <String key={i} note={note} root={noteFilter === note} />
            ))}
      </div>
    </>
  );
}

export default Fret;
