import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [currNote, setCurrNote] = useState("");
  const [currSubject, setCurrSubject] = useState("");
  const [notesData, setNotesData] = useState([]);

  function addData() {
    if (!currNote || !currSubject) {
      alert("I'm sorry, your notes or subject are empty. Please fill them in");
      return;
    } else {
      var data = notesData;
      data.push({ notes: currNote, subject: currSubject });
      setNotesData(data);
      setCurrNote("");
      setCurrSubject("");
      console.log(notesData);
    }
  }

  return (
    <div className="container">
      <div className="notesCreator">
        <form className="noteForm">
          <textarea
            className="noteBox"
            type="text"
            name="note"
            placeholder="My notes"
            value={currNote}
            onChange={(text) => {
              setCurrNote(text.target.value);
            }}
          />
        </form>
        <form>
          <input
            className="subjectBox"
            type="text"
            name="subject"
            placeholder="Subject"
            value={currSubject}
            onChange={(text) => {
              setCurrSubject(text.target.value);
            }}
          />
        </form>
        <button
          onClick={() => {
            addData();
          }}
        >
          Add Note
        </button>
      </div>
      <div className="notesDisplay">
        {notesData.map((note, key) => (
          <div className="noteObj">
            <div>Subject: {note["subject"]}</div>
            <div>Note: {note["notes"]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
