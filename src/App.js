import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Dictionary App 📖</h1>
      <Dictionary />
      <div className="open-link">
        <small>
          Coded by Carol Canelas and Open-Sourced in{" "}
          <a href="https://github.com/caroolcanelas/dictionary-app">GitHub</a>
        </small>
      </div>
    </div>
  );
}
