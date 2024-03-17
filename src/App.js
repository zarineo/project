import "./App.css";
import "./Components/Counter/Counter";
import Counter from "./Components/Counter/Counter";
import Converter from "./Components/Converter/Converter";
import Calculator from "./Components/Calculator/Calculator";
import Switch from "./Components/Switch/Switch";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div>
      <Counter />
      <Converter />
      <Calculator />
      <Switch />
      <Todo />
    </div>
  );
}

export default App;
