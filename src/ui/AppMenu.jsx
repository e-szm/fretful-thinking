import { useGuitarQuery } from "../hooks/useGuitarQuery";

import Button from "./Button";
import SelectPentShape from "../ui/SelectPentShape";
import SelectTonality from "../ui/SelectTonality";

function AppMenu() {
  const [{ view, note }, setSearchparams] = useGuitarQuery();

  function handleClickView(clickedView) {
    if (clickedView === view) return;

    let newParams;
    if (clickedView === "all") newParams = { view: clickedView, note };
    if (clickedView === "pentatonics")
      newParams = {
        view: clickedView,
        pentShape: 1,
        tonality: "minor",
        note,
      };

    setSearchparams(newParams);
  }

  return (
    <div>
      <Button onClick={() => handleClickView("all")}>All Notes</Button>
      <Button onClick={() => handleClickView("pentatonics")}>
        Pentatonics
      </Button>
      {view === "pentatonics" && (
        <>
          <SelectPentShape />
          <SelectTonality />
        </>
      )}
    </div>
  );
}

export default AppMenu;
