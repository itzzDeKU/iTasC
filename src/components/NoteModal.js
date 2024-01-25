import React, { useState } from "react";

const NoteModal = ({ isOpen, onClose, note, editNote, showAlert }) => {
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [tag, setTag] = useState(note.tag);

  const handleEdit = () => {
    const updatedNote = {
      title,
      description,
      tag,
    };

    editNote({
      id: note._id,
      title: updatedNote.title,
      description: updatedNote.description,
      tag: updatedNote.tag,
    });
    showAlert("Note Updated Successfully", "success");

    onClose();
  };

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} fixed inset-0 overflow-y-auto`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          labelled="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Edit Note
                </h3>
                <div className="mt-2">
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
                    value={title}
                    required
                    minLength={3}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  />

                  <label
                    htmlFor="description"
                    className="block mt-2 text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    minLength={5}
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    className="mt-1 p-2 w-full border rounded-md"
                  ></textarea>

                  <label
                    htmlFor="tag"
                    className="block mt-2 text-sm font-medium text-gray-700"
                  >
                    Tag
                  </label>
                  <input
                    type="text"
                    id="tag"
                    name="tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleEdit}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>

            <button
              onClick={onClose}
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
