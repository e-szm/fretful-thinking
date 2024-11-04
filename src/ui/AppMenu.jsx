import { useGuitarQuery } from "../hooks/useGuitarQuery";

import styles from "./AppMenu.module.css";
import SelectPentShape from "../ui/SelectPentShape";
import SelectTonality from "../ui/SelectTonality";
import SelectView from "./SelectView";
import SelectRootString from "./SelectRootString";

function AppMenu() {
  const [searchParams, setSearchParams] = useGuitarQuery();
  const { view } = searchParams;

  return (
    <div className={styles.appMenu}>
      <SelectView
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <div className={styles.options}>
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
