import SelectNumFrets from "./SelectNumFrets";
import Guitar from "../features/guitar/Guitar";

function AppLayout() {
  return (
    <div>
      <SelectNumFrets />
      <Guitar />
    </div>
  );
}

export default AppLayout;
