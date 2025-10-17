import { useEffect, useState } from "react";
import "./App.css";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import NoteSearch from "./Components/NoteSearch";

export default function App() {
  
  const [search, setSearch] = useState(""); 
 const [notes, setNotes] = useState(() => {
  const savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
});


 useEffect(()=>{
  localStorage.setItem("notes", JSON.stringify(notes));
 },[notes]);
  const addNotes = (note) => {
    const newNote = { ...note, id: Date.now() };
    setNotes([...notes, newNote]);
  };

 
  const filteredNotes = notes.filter(
    (n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>My Notes</h2>
      <NoteSearch setSearch={setSearch} /> 
      <NoteForm addNotes={addNotes} />
      <NoteList notes={filteredNotes} setNotes={setNotes} />
    </div>
  );
}
