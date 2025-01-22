import React, { useEffect,  useState  } from "react";
import axios from "axios";


const Welcome = () => {
  const [userData, setUserData] = useState(null);
  const token = sessionStorage.getItem('token');
  console.log(token);
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const verifyUser = async () => {
    const url = "http://localhost:7000/verify";
    try {
      const response = await axios.get(url, { headers });
      console.log(response.data);

      setUserData(response.data.data);
      // console.log(data)
     
    } catch (error) {
      console.warn("Error fetching user data:", error);
    }
  };
  useEffect(() => {
    verifyUser();
  },[]);
   
  return (


    <>
     <div className="justify-center text-center font-bold text-3xl my-10">
         <h1>Welcome</h1>

     </div>
     <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
               Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
           
          </tr>
        </thead>
        <tbody>
        {userData && (
              <tr className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {userData.name}
                </th>
                <td className="px-6 py-4">
                  {userData.email}
                </td>
              </tr>
            )}
        </tbody>
      </table>
    </div>


    </>
  )
}

export default Welcome