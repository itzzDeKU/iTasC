import React, { useContext, useEffect } from "react";
import NoteCards from "./NoteCards";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

function Notes(props) {
  const { showAlert } = props;
  let navigate = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      getNotes();
      showAlert("Fetched Notes Successfully", "success");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="container">
      <AddNote showAlert={showAlert} />
      <div className="flex flex-wrap justify-center my-3">
        <h2 className="w-full text-3xl font-semibold md:text-2xl lg:text-3xl xl:text-4xl mx-3 my-3">
          Your Notes
        </h2>
        {notes.length === 0 && "No Notes to Display"}
        {notes.map((note) => {
          return <NoteCards key={note._id} note={note} showAlert={showAlert} />;
        })}
      </div>
    </div>
  );
}

export default Notes;