import { useState } from 'react'
import './App.css'

function App() {

  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddNote = () => {
    if (input.trim() !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <>

      <div className="App">
        <h1>Easy Note</h1>
        <div>
          <input type="text" value={input} onChange={handleInputChange} className="note-input" placeholder='Enter your notes here' />
          <button onClick={handleAddNote} className='note-btn'>Add Task</button>
        </div>
        <div className="notes-container">
          {notes.map((note, index) => (
            <div key={index} className="note">
              <p>{note}</p>
              <button className="delete-button" onClick={() => handleDeleteNote(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default App
