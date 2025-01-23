import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [modal, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    name: "",
    city: "",
    date: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  }

  function handleSubmit() {
    console.log("Form Data Submitted:", formdata);
    navigate('/showdata',{state: formdata})
  }

  function toggleModal() {
    setModalOpen(!modal);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <main className="flex-1 flex items-center justify-center">
          <button
            onClick={toggleModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Open Modal name
          </button>
          {modal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white rounded-lg w-96 p-6">
                <h2 className="text-lg font-semibold mb-4">Modal</h2>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Name</label>
                  <input
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    value={formdata.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Select</label>
                  <select
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    name="city"
                    value={formdata.city}
                    onChange={handleChange}
                  >
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Japan">Japan</option>
                    <option value="Australia">Australia</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Delhi">Delhi</option>
                    <option value="New York">New York</option>
                    <option value="Sana">Sana</option>
                    <option value="Sydney">Sydney</option>
                    <option value="Auckland">Auckland</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-gray-700">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    value={formdata.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={toggleModal}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
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
