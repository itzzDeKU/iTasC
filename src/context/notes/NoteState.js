import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialNotes = [];

  const [notes, setNotes] = useState(initialNotes);

  //Fetch All notes
  const getNotes = async () => {
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "auth-token": localStorage.getItem("auth-token"),
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  //Add a note
  const addNote = async ({ title, description, tag }) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  // Edit a note
  const editNote = async ({ id, title, description, tag }) => {
    if (!id) {
      console.log("Id is undefined");
      return;
    }
    // Convert id to string
    const stringId = id.toString();

    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${stringId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "auth-token": localStorage.getItem("auth-token"), // Replace with your actual auth token
      },
      body: JSON.stringify({ title, description, tag }),
    });

    if (response.ok) {
      // Update state based on response
      const updatedNote = await response.json();
      setNotes((prevNotes) =>
        prevNotes.map((n) => (n._id === stringId ? updatedNote : n))
      );
    } else {
      console.error("Failed to update note. Server response:", response.status);
      // Handle error, if needed
    }
  };

  // Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      });

      const textResponse = await response.text();

      // Check if the response contains the word "Success"
      if (textResponse.includes("Success")) {
        // Update the state only if the deletion was successful
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
      } else {
        console.error("Failed to delete note");
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
