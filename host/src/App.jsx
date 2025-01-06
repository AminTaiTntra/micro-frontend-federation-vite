import "./App.css";
import Button from "remoteApp/Button";
import useCount from "remoteApp/store";

function App() {
  const [count, setCount] = useCount();

  return (
    <>
      <div></div>
      <h1>Host Application</h1>
      <div className="card">
        <Button />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
