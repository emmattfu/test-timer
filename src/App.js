import { StyledApp, StyledAppTitle } from "./styled";

import { Timer } from "./components/timer/Timer";
import { NewTimerForm } from "./components/newTimerForm/NewTimerForm";
import { useSelector } from "react-redux";
import { timersSelector } from "./store/selectors";

function App() {
  const timers = useSelector(timersSelector);

  return (
    <StyledApp>
      <StyledAppTitle>tracker</StyledAppTitle>

      <NewTimerForm />

      {timers.map((timer) => (
        <Timer key={timer.id} timer={timer} />
      ))}
    </StyledApp>
  );
}

export default App;
