import { useNavigate } from "react-router-dom";

export type TTableList = {
  email: string;
  fullName: string;
  role: string;
}

export function TableList({ tableList }: { tableList: TTableList[] }) {
  const navigate = useNavigate();

  const navigateCreate = () => {
    navigate('/create');
  }
  return (
    <div>
      <div className="flex flex-row justify-between">
        <p className='text-2xl font-bold'>TEST</p>
        <button type="button" onClick={navigateCreate} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Create
        </button>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tableList.map((data, index) => (
              <tr key={index} className="bg-white border-b">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {data.fullName}
                </th>
                <td className="px-6 py-4">
                  {data.email}
                </td>
                <td className="px-6 py-4">
                  {data.role}
                </td>
                <td className="px-6 py-4">
                  <button type="button" className="flex-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}