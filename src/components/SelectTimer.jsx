import { useTimer } from "./timer/TimerContext";
import Incrementer from "./Incrementer";

const MIN_TIMER = 0;
const MAX_TIMER = 20;

function SelectTimer() {
  const { timeLimit, decTimeLimit, incTimeLimit } = useTimer();

  return (
    <Incrementer
      onDecrement={decTimeLimit}
      onIncrement={incTimeLimit}
      disableDec={timeLimit <= MIN_TIMER}
      disableInc={timeLimit >= MAX_TIMER}
    >
      {timeLimit === 0 && "No timer"}
      {timeLimit === 1 && `${timeLimit} second`}
      {timeLimit > 1 && `${timeLimit} seconds`}
    </Incrementer>
  );
}

export default SelectTimer;
