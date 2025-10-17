import { useState } from "react"

export default function NoteForm({addNotes}){
  const [title, setTitle]=useState("");
  const [content,setContent]=useState("");
  const [error, setError]=useState("");
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(!title || !content){
    setError("Please fill both the fields.");
    return;
  };
  addNotes({title, content});
  setError("");
  setTitle("");
  setContent("");
  }
  return(
    <form onSubmit={handleSubmit} className="note-form">
     
      {
        error && <p>{error}</p>
      }
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Note Title" />
      <textarea placeholder="Write your note..." value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
      <button type="submit">Add Note</button>
       
    </form>
  )
}