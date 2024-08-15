import { ToggleButton } from "./component/ToggleButton";
import { Counter } from "./component/Counter";
function App() {
  return (
    <>
      <div>
        <h1 className="my-5 text-2xl font-bold text-center">React Task</h1>
        <div className="flex justify-center">
          <ToggleButton />
          <Counter />
        </div>
      </div>
    </>
  );
}

export default App;
