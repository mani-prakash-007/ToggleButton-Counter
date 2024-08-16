import { ToggleButton } from "./component/ToggleButton";
import { Counter } from "./component/Counter";
import { InputForm } from "./component/InputForm";
function App() {
  return (
    <>
      <div>
        <h1 className="my-5 text-2xl font-bold text-center">React Task</h1>
        <div className="flex flex-wrap justify-center">
          <ToggleButton />
          <Counter />
          <InputForm />
        </div>
      </div>
    </>
  );
}

export default App;
