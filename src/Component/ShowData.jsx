import React from 'react'
import {useLocation} from 'react-router-dom'

const ShowData = () => {
    const location = useLocation();
    console.log(location);
    const { name, city, date } = location.state || {};
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">{name}</td>
            <td className="border border-gray-300 px-4 py-2">{city}</td>
            <td className="border border-gray-300 px-4 py-2">{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  )
}

export default ShowData