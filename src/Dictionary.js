export default function Dictionary() {
  return (
    <div className="search">
      <input
        type="search"
        className="search-input mb-3"
        placeholder="Search for a word..."
      />
      <button type="submit" className="search-btn btn btn-primary mb-5">
        Search
      </button>
    </div>
  );
}
