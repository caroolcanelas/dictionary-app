import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Dictionary App 📖</h1>
      <Dictionary />
      <div className="open-link mb-3">
        <small>
          Coded by Carol Canelas and Open-Sourced in{" "}
          <a
            href="https://github.com/caroolcanelas/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </small>
      </div>
    </div>
  );
}
