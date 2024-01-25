import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const { showAlert } = props;
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
    showAlert("Note Added Successfully", "success");
    setNote({ title: "", description: "", tag: "" });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold leading-7 text-gray-900 sm:truncate sm:text-4xl sm:tracking-tight mx-4 my-3">
        Add Note
      </h2>
      <div className="max-w-3xl mx-auto p-6">
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter title"
              value={note.title}
              onChange={onChange}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter description"
              value={note.description}
              onChange={onChange}
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="tag"
              className="block text-sm font-medium text-gray-700"
            >
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter tag"
              value={note.tag}
              onChange={onChange}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
              onClick={handleClick}
              disabled={note.title.length < 3 || note.description.length < 5}
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
