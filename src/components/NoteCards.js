// NoteCards.js
import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import noteContext from "../context/notes/noteContext";
import NoteModal from "./NoteModal";

const NoteCards = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const { note, showAlert } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-gray-800 overflow-hidden shadow rounded-md p-4 mb-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-3 relative flex flex-col">
        <div className="flex items-center justify-end mt-1 mr-2 md:mt-0 md:mr-1 hover:cursor-pointer">
          <MdDelete
            size={24}
            style={{ color: "#FF2500", marginRight: "4px" }}
            onClick={() => {
              deleteNote(note._id);
              showAlert("Note Deleted Successfully", "danger");
            }}
          />
          <FiEdit
            size={24}
            style={{ color: "green" }}
            onClick={() => {
              openModal();
            }}
          />
        </div>
        <h3 className="text-lg font-bold text-violet-800 mt-4 md:mt-0">
          {note.title}
        </h3>

        <p className="text-teal-600 mt-2">{note.description}</p>
        <p className="text-sky-400 mt-2">{note.tag}</p>
      </div>
      <NoteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        note={note}
        editNote={editNote}
        showAlert={showAlert}
      />
    </>
  );
};

export default NoteCards;
