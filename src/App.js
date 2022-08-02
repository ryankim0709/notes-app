import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [currNote, setCurrNote] = useState("");
  const [currSubject, setCurrSubject] = useState("");
  const [notesData, setNotesData] = useState([]);

  const addData = () => {
    if (!currNote || !currSubject) {
      alert("I'm sorry, your notes or subject are empty. Please fill them in");
      return;
    }
    var data = notesData;
    data.push({ notes: currNote, subject: currSubject });
    setNotesData(data);
    setCurrNote("");
    setCurrSubject("");
    console.log(notesData);
  }

  return (
    <div className="container">
      <div className="inputs">
          <textarea
            className="note-box"
            type="text"
            placeholder="My notes"
            value={currNote}
            onChange={(text) => {
              setCurrNote(text.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            value={currSubject}
            onChange={(text) => {
              setCurrSubject(text.target.value);
            }}
          />
        <button
          onClick={() => {
            addData();
          }}
        >
          Add Note
        </button>
      </div>
      <div className="container note-container">
        {notesData.map((note, key) => (
          <div className="note-obj">
            <div className="single-text">Subject: {note["subject"]}</div>
            <div className="single-text">Note: {note["notes"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
