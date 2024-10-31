import Button from "./Button";

function SelectView({ searchParams, setSearchParams }) {
  const { view, note } = searchParams;

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

    setSearchParams(newParams);
  }

  return (
    <div>
      <Button active={view === "all"} onClick={() => handleClickView("all")}>
        All Notes
      </Button>
      <Button
        active={view === "pentatonics"}
        onClick={() => handleClickView("pentatonics")}
      >
        Pentatonics
      </Button>
    </div>
  );
}

export default SelectView;