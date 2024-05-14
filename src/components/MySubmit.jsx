import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const MySubmit = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:9000/submit/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data); // Update assignments state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  }, [user]); // Trigger effect whenever user changes

  
  const handleStatus = async (id, status) => {
    try {
      const { data } = await axios.patch(
        `${import.meta.env.VITE_API_URL}/assignment/${id}`,
        { status }
      );
      console.log(data);
      getData(); // Update assignments after status change
    } catch (error) {
      console.error('Error updating assignment status:', error);
    }
  };

  return (
    <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800'>My Submitted Assignment</h2>
        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full'>
          {assignments.length} Assi
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th scope='col' className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      <div className='flex items-center gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>
                    <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      <span>Mark</span>
                    </th>
                    
                    <th scope='col' className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Status
                    </th>
                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {Array.isArray(assignments) && assignments.map(assignment => (
                    <tr key={assignment._id}>
                      <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                        {assignment.title}
                      </td>
                      <td className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'>
                      {assignment.mark}
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                        <div
                          className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2 ${
                            assignment.status === 'Pending' && 'bg-yellow-100/60 text-yellow-500'
                          } ${
                            assignment.status === 'In Progress' && 'bg-blue-100/60 text-blue-500'
                          } ${
                            assignment.status === 'Complete' && 'bg-emerald-100/60 text-emerald-500'
                          } ${
                            assignment.status === 'Rejected' && 'bg-red-100/60 text-red-500'
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              assignment.status === 'Pending' && ' bg-yellow-500'
                            } ${
                              assignment.status === 'In Progress' && 'bg-blue-500'
                            } ${
                              assignment.status === 'Complete' && 'bg-green-500'
                            } ${
                              assignment.status === 'Rejected' && 'bg-red-500'
                            }`}
                          ></span>
                          <h2 className='text-sm font-normal'>{assignment.status}</h2>
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <button
                          disabled={assignment.status !== 'In Progress'}
                          onClick={() => handleStatus(assignment._id, 'Complete')}
                          title='Mark Complete'
                          className='text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none disabled:cursor-not-allowed'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-5 h-5'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              d='M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75'
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySubmit;