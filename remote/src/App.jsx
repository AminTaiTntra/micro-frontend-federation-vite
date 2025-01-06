import "./App.css";
import Button from "./Button";
import useCount from "./store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <h1>Remote Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Button />
    </>
  );
}

export default App;
