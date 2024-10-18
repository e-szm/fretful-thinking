import SelectNumFrets from "./SelectNumFrets";
import Guitar from "../features/guitar/Guitar";
import FilterNotes from "./FilterNotes";

function AppLayout() {
  return (
    <div>
      <FilterNotes />
      <SelectNumFrets />
      <Guitar />
    </div>
  );
}

export default AppLayout;
