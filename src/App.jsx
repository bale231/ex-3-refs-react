import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Counter initialValue={0} />
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
