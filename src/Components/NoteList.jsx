export default function Notelist({notes,setNotes}){
  if(notes.length===0)return <p>No notes yet.</p>
  const deleteNote=(id)=>{
    setNotes(notes.filter((note)=>note.id!==id));
  }
  return(
    <div className="note-list">
      {
        notes.map((note)=>(
          <div key={note.id} className="note-card">
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={()=>deleteNote(note.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}