import { useGuitarQuery } from "../hooks/useGuitarQuery";

import styles from "./AppMenu.module.css";
import SelectPentShape from "../ui/SelectPentShape";
import SelectTonality from "../ui/SelectTonality";
import SelectView from "./SelectView";

function AppMenu() {
  const [searchParams, setSearchParams] = useGuitarQuery();
  const { view } = searchParams;

  return (
    <div className={styles.appMenu}>
      <SelectView
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      {view === "pentatonics" && (
        <>
          <SelectPentShape
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <SelectTonality
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </>
      )}
    </div>
  );
}

export default AppMenu;
