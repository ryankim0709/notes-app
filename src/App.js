import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [currNote, setCurrNote] = useState("");
  const [currSubject, setCurrSubject] = useState("");
  const [notesData, setNotesData] = useState([]);
  const [editing, setEditing] = useState(-1);
  const [newNote, setNewNote] = useState("");
  const [newSubject, setNewSubject] = useState("");

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
  };

  const deleteData = (key) => {
    var temp = [];
    var data = [...notesData];

    for (var i = 0; i < data.length; i++) {
      if (i == key) continue;
      temp.push(data[i]);
    }
    setNotesData(temp);
  };

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
            {key == editing && (
              <div className="largeContainer">
                <div className="infoContainer">
                  <div>Subject: </div>
                  <textarea
                    type="text"
                    value={newSubject}
                    onChange={(text) => setNewSubject(text.target.value)}
                    
                  />
                </div>
                <div className="infoContainer">
                  <div>Notes: </div>
                  <input
                    type="text"
                    value={newNote}
                    onChange={(text) => setNewNote(text.target.value)}
                  />
                </div>
              </div>
            )}
            {key !== editing && (
              <div className="largeContainer">
                <div className="">Subject: {note["subject"]}</div>
                <div className="">Note: {note["notes"]}</div>
              </div>
            )}
            <button
              onClick={() => {
                deleteData(key);
              }}
            >
              Delete Note
            </button>
            {key !== editing && (
              <button
                onClick={() => {
                  setEditing(key);
                  setNewNote(note["notes"]);
                  setNewSubject(note["subject"]);
                }}
              >
                Edit Note
              </button>
            )}
            {key == editing && (
              <button
                onClick={() => {
                  setEditing(-1);
                  var data = notesData;
                  data[key] = { notes: newNote, subject: newSubject };
                }}
              >
                Save Note
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
