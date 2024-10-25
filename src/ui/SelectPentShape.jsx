import { useDispatch } from "react-redux";

import { updatePentShape } from "../features/guitar/guitarSlice";

function SelectPentShape() {
  const dispatch = useDispatch();

  function handleClickPentShape(e) {
    dispatch(updatePentShape(Number(e.target.dataset.pentshape)));
  }

  return (
    <div>
      <button data-pentshape="1" onClick={handleClickPentShape}>
        Shape 1
      </button>
      <button data-pentshape="2" onClick={handleClickPentShape}>
        Shape 2
      </button>
      <button data-pentshape="3" onClick={handleClickPentShape}>
        Shape 3
      </button>
      <button data-pentshape="4" onClick={handleClickPentShape}>
        Shape 4
      </button>
      <button data-pentshape="5" onClick={handleClickPentShape}>
        Shape 5
      </button>
    </div>
  );
}

export default SelectPentShape;
