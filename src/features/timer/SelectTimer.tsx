import { useTimer } from "./TimerContext";
import Incrementer from "../../shared/components/Incrementer";

import Constants from "../../shared/classes/Constants";

const SelectTimer: React.FC = () => {
  const { timeLimit, decTimeLimit, incTimeLimit } = useTimer();

  if (!decTimeLimit || !incTimeLimit)
    throw new Error("SelectTimer component is missing context functions");

  return (
    <Incrementer
      onDecrement={decTimeLimit}
      onIncrement={incTimeLimit}
      disableDec={timeLimit <= Constants.MIN_TIMER}
      disableInc={timeLimit >= Constants.MAX_TIMER}
    >
      {timeLimit === 0 && "No timer"}
      {timeLimit === 1 && `${timeLimit} second`}
      {timeLimit > 1 && `${timeLimit} seconds`}
    </Incrementer>
  );
};

export default SelectTimer;
