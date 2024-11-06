import { useGuitarQuery } from "../hooks/useGuitarQuery";

import styles from "./AppMenu.module.css";
import SelectPentShape from "../ui/SelectPentShape";
import SelectTonality from "../ui/SelectTonality";
import SelectView from "./SelectView";
import SelectRootString from "./SelectRootString";
import FilterNotes from "./FilterNotes";
import Quiz from "../features/quiz/quiz";

function AppMenu({ fretboard }) {
  const [searchParams, setSearchParams] = useGuitarQuery();
  const { view } = searchParams;

  return (
    <div className={styles.appMenu}>
      <div className={styles.primaryOptions}>
        <SelectView
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <FilterNotes fretboard={fretboard} />
      </div>

      <div className={styles.secondaryOptions}>
        {view === "all" && <Quiz />}

        {(view === "pentatonics" || view === "chords") && (
          <SelectTonality
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        )}

        {view === "pentatonics" && (
          <>
            <SelectPentShape
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
          </>
        )}

        {view === "chords" && (
          <SelectRootString
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        )}
      </div>
    </div>
  );
}

export default AppMenu;
