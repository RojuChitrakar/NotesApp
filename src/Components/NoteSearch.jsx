export default function NoteSearch({ setSearch }) {
  return (
    <div className="search-bar">
      <label>Search: </label>
      <input
        type="text"
        placeholder="Search notes..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
