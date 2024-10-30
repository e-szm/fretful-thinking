import Button from "./Button";

function SelectPentShape({ searchParams, setSearchParams }) {
  const { pentShape } = searchParams;

  function handleClickPentShape(clickedPentShape) {
    if (clickedPentShape === pentShape) return;

    const newParams = { ...searchParams, pentShape: clickedPentShape };
    setSearchParams(newParams);
  }

  return (
    <div>
      <Button active={pentShape === 1} onClick={() => handleClickPentShape(1)}>
        Shape 1
      </Button>
      <Button active={pentShape === 2} onClick={() => handleClickPentShape(2)}>
        Shape 2
      </Button>
      <Button active={pentShape === 3} onClick={() => handleClickPentShape(3)}>
        Shape 3
      </Button>
      <Button active={pentShape === 4} onClick={() => handleClickPentShape(4)}>
        Shape 4
      </Button>
      <Button active={pentShape === 5} onClick={() => handleClickPentShape(5)}>
        Shape 5
      </Button>
    </div>
  );
}

export default SelectPentShape;
