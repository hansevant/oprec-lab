import React from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Table = () => {

  const [users, setUser] = React.useState([]);

  React.useEffect(()=>{
    getUsers();
},[]);

const getUsers = async () => {
    const response = await axios.get('http://localhost:4000/registrants');
    setUser(response.data.data);
    console.log(response.data)
}

  return (
    <>
      <Navbar active="table" />
      <div className='w-full mt-10 border max-w-6xl mx-auto px-10'>
      <div className="overflow-x-auto">
  <table className="table-fixed min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          No
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Posisi
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Nama
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Kelas
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Region
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Email
        </th>
        <th
          className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
        >
          Nomor Whatsapp
        </th>
        <th className="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody className="divide-y divide-gray-200">
    
      {users.length > 0 ? users.map((user,index) => (
                        <tr key={user.id}>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">{index + 1}</td>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {user.role}
        </td>
        <td className="px-4 py-2 text-gray-700">{user.name}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.clas}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.region}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.email}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{user.number} </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Link
            to={`/user/${user.npm}`}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            View
          </Link>
        </td>
      </tr>
                    )) : (<tr><td>No data</td></tr>)}

    </tbody>
  </table>
</div>
      </div>
    </>
  )
}

export default Table