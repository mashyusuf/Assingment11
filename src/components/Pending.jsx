import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';

const Pending = () => {
  const [assignments, setAssignments] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:9000/submit-req/${user?.email}`);
        setAssignments(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [user]);

  const handleStatus = async (id, prevStatus, status) => {
    console.log(id, prevStatus, status);
    const { data } = await axios.patch(`http://localhost:9000/status/${id}`, { status });
    console.log(data);
  };

  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleButtonSize = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="flex justify-center w-full mt-8 mb-20">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold text-center text-sky-700 mb-6">Pending Assignments ({assignments.length})</h1>
        <table className="w-full border-collapse border border-gray-500">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-500 px-4 py-2 text-2xl text-center font-bold ">Title</th>
              <th className="border border-gray-500 px-4 py-2 text-2xl text-center font-bold ">Examinee Name</th>
              <th className="border border-gray-500 px-4 py-2 text-2xl text-center font-bold ">PDF Preview</th>
              <th className="border border-gray-500 px-4 py-2 text-2xl text-center font-bold ">Give Mark</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={assignment.id} className="bg-white">
                <td className="border border-gray-500 px-4 text-orange-600 text-center py-2 font-bold hover:text-blue-500">{assignment.title}</td>
                <td className="border border-gray-500 px-4 text-emerald-500 text-center py-2 font-bold hover:text-blue-500">{assignment.note}</td>
                <td className="border border-gray-500 px-4 text-center  py-2 font-bold">
                  <iframe src={assignment.pdf} width="100%" height="400px" title="PDF Preview"></iframe>
                </td>
                <td className="border border-gray-500 text-center px-4 py-2 font-bold">
                  <button
                    onClick={() => {
                      handleStatus(assignment._id, assignment.status, 'In Progress');
                      toggleButtonSize(index);
                    }}
                    disabled={assignment.status === 'Complete'}
                    className={`text-gray-500 transition-colors duration-200 focus:outline-none ${
                      activeIndex === index ? 'text-red-500' : 'text-gray-500'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={`w-10 h-10 ${activeIndex === index ? 'transform scale-150' : ''}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Pending;
