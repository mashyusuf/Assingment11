import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom'

const MyAssignment = () => {
  const { user } = useContext(AuthContext);
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9000/assingments/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAssignments(data); // Update assignments state with fetched data
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  }, [user]); // Trigger effect whenever user changes


const handleDelete = id =>{
  const proceed = confirm(' Are You Sure You want To Delete ?')
  if(proceed){
    fetch(`http://localhost:9000/assingments/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.deletedCount > 0){
        alert('Deleted Successfully');
        const remaining = assignments.filter(assignment => assignment._id !==id)
        setAssignments(remaining);
      }
    })
  }
}
  

  return (
    <div>

<section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Assingments</h2>
        <div className='flex items-center justify-center'>
         
        </div>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {assignments.length} Assing
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-400  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-orange-700'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span className='font-bold text-lg'>Title</span>
                      </div>
                      
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-orange-700'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span className='font-bold text-lg'>Defficalty</span>
                      </div>
                      
                    </th>


                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-orange-700'
                    >
                      <span  className='font-bold text-lg'>Date</span>
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 font-bold text-lg  text-left rtl:text-right text-sky-600'
                    >
                      Mark
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 font-bold text-lg text-left rtl:text-right text-sky-600'
                    >
                      Description
                    </th>

                    <th className='px-4 py-3.5 font-bold text-lg text-left rtl:text-right text-sky-600'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-rose-100 divide-y divide-black '>
                  {assignments.map(assignment => (
                    <tr key={assignment._id}>
                      <td className='px-4 py-4 text-sm hover:text-red-400 text-black font-extrabold  whitespace-nowrap'>
                        {assignment.title}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex text-green-700 hover:text-blue-500 font-extrabold items-center gap-x-2'>
                          <p
                            className={`px-3 py-1 ${
                              assignment.dropdown === 'Easy' &&
                              'text-blue-500 bg-blue-100/60'
                            } ${
                              assignment.dropdown === 'Medium' &&
                              'text-emerald-500 bg-emerald-100/60'
                            } ${
                              assignment.dropdown === 'Hard' &&
                              'text-pink-500 bg-pink-100/60'
                            } text-xs  rounded-full`}
                          >
                            {assignment.dropdown}
                          </p>
                        </div>
                      </td>

                      <td className='px-4 py-4 text-sm text-green-700 hover:text-blue-500 font-extrabold  whitespace-nowrap'>
                        {new Date(assignment.date).toLocaleDateString()}
                      </td> 
                      <td className='px-4 py-4 text-sm text-fuchsia-500 hover:text-purple-700 font-extrabold  whitespace-nowrap'>
                        {assignment.mark}
                      </td>
                      <td
                        title={assignment.description}
                        className='px-4 py-4 text-sm text-purple-700 hover:text-yellow-600 font-extrabold  whitespace-nowrap'
                      >
                        {assignment.description.substring(0, 18)}...
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-6'>
                          <button
                            onClick={() => handleDelete(assignment._id)}
                            className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'
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
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button>

                          <Link
  to={`update/${assignment._id}`} // Dynamically creates the link to the update page with the assignment ID as a parameter
  className='text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none'
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
      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
    />
  </svg>
</Link>

                        </div>
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
    </div>
  );
};

export default MyAssignment;

