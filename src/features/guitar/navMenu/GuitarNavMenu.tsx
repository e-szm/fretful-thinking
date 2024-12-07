import { useGuitarQuery } from "../../../hooks/useGuitarQuery";

import styles from "./GuitarNavMenu.module.css";
import SelectPentShape from "./SelectPentShape";
import SelectTonality from "./SelectTonality";
import SelectView from "./SelectView";
import SelectRootString from "./SelectRootString";
import SelectNoteFilter from "./SelectNoteFilter";
import Quiz from "../../quiz/Quiz";

import { GuitarFretboard } from "../../../shared/lib/types";

interface NavMenuOptions {
  fretboard: GuitarFretboard;
}

const GuitarNavMenu: React.FC<NavMenuOptions> = ({ fretboard }) => {
  const [guitarURLQuery, setGuitarURLQuery] = useGuitarQuery();
  const { view } = guitarURLQuery;

  return (
    <div className={styles.appMenu}>
      <div className={styles.primaryOptions}>
        <SelectView
          guitarURLQuery={guitarURLQuery}
          setGuitarURLQuery={setGuitarURLQuery}
        />
        <SelectNoteFilter fretboard={fretboard} />
      </div>

      <div className={styles.secondaryOptions}>
        {view === "all" && <Quiz />}

        {(view === "pentatonics" || view === "chords") && (
          <SelectTonality
            guitarURLQuery={guitarURLQuery}
            setGuitarURLQuery={setGuitarURLQuery}
          />
        )}

        {view === "pentatonics" && (
          <>
            <SelectPentShape
              guitarURLQuery={guitarURLQuery}
              setGuitarURLQuery={setGuitarURLQuery}
            />
          </>
        )}

        {view === "chords" && (
          <SelectRootString
            guitarURLQuery={guitarURLQuery}
            setGuitarURLQuery={setGuitarURLQuery}
          />
        )}
      </div>
    </div>
  );
};

export default GuitarNavMenu;
