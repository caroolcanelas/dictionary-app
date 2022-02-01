import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={search}>
        <input
          type="search"
          className="search-input mb-3"
          onChange={handleKeywordChange}
          placeholder="Search for a word..."
          autoFocus={true}
        />
        <button type="submit" className="search-btn btn btn-primary mb-3">
          Search
        </button>
      </form>
      <Results results={results} />
    </div>
  );
}
