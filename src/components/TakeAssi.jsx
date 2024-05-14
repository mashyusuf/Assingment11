import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast'
import { useLoaderData, useNavigate } from 'react-router-dom';
const AssignmentSubmission = () => {
  const assingments = useLoaderData()
  console.log(assingments[0].email)
  const [pdfLink, setPdfLink] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const mark = document.getElementById('marks').value;
    const pdf = pdfLink;
    const creatorEmail = assingments[0].email
    const note = quickNote;
    const email = user.email;
    const status = 'pending';
    const submit = { pdf, note, email, status, title, mark ,creatorEmail};
  
    try {
      const { data } = await axios.post(
        'http://localhost:9000/submit', // Corrected endpoint URL
        submit
      );
      console.log(data);
      toast.success('Submit SuccessFully')
      navigate('/submit')
    } catch (err) {
      console.log(err);
      console.log('Hi, I am error', err.message);
    }
    
    resetForm();
  };
  

  const resetForm = () => {
    setPdfLink('');
    setQuickNote('');
    document.getElementById('title').value = ''; // Reset the title input field
    document.getElementById('marks').value = ''; // Reset the marks input field
  };

  return (
    <div className="flex justify-center items-center h-full m-20">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-blue-700 mb-4">Assignment Submission</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <div className="mb-4 w-full">
            <label htmlFor="pdfLink" className="block text-lg text-gray-700 mb-2">PDF/Doc Link:</label>
            <input
              type="text"
              name='pdf'
              id="pdfLink"
              value={pdfLink}
              onChange={(event) => setPdfLink(event.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4  w-full">
            <label htmlFor="title" className="text-2xl font-bold mb-2">Title:</label>
            <input
              type="text"
              id="title"
              className="p-4 border w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your title here..."
            />
          </div>
          <div className="flex flex-col mb-4  w-full">
            <label htmlFor="marks" className="text-2xl font-bold mb-2">Marks:</label>
            <input
              type="number"
              id="marks"
              className="p-4 border w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter marks..."
            />
          </div>
          <div className="mb-4 w-full">
            <label htmlFor="quickNote" className="block text-lg text-gray-700 mb-2">Quick Note:</label>
            <textarea
              id="quickNote"
              name='note'
              value={quickNote}
              onChange={(event) => setQuickNote(event.target.value)}
              rows={4}
              required
              className="w-full p-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-full">
            <label className='block w-full  text-2xl mb-2 font-bold' htmlFor='emailAddress'>
              Email Address
            </label>
            <input
              id='emailAddress'
              type='email'
              name='email'
              disabled
              defaultValue={user?.email}
              className='block w-full px-4 p-5 mt-2 text-black  border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 bg-rose-100 hover:bg-gray-300 focus:bg-white focus:outline-none focus:ring'
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssignmentSubmission;
