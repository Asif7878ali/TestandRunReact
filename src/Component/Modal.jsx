import React, { useState } from "react";

const Modal = () => {
  const [modal, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modal);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="flex-1 flex items-center justify-center">
          <button onClick={toggleModal} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Open Modal
          </button>
          {modal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg w-96 p-6">
                <h2 className="text-lg font-semibold mb-4">Modal</h2>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Select</label>
                  <select className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
                    <option value="">India</option>
                    <option value="">USA</option>
                    <option value="">Japan</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter text"
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Date</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={toggleModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Modal;
