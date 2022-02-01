import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
        <button type="submit" className="search-btn btn btn-primary mb-5">
          Search
        </button>
      </form>
    </div>
  );
}
