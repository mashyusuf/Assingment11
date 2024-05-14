import { useContext, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Provider/AuthProvider';

const AssignmentSubmission = () => {
  const [pdfLink, setPdfLink] = useState('');
  const [quickNote, setQuickNote] = useState('');
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const pdf = pdfLink;
    const note = quickNote;
    const email = user.email;
    const status = 'pending'
    const submit = { pdf, note, email, status };
  
    try {
      const { data } = await axios.post(
        'http://localhost:9000/assignment', // Corrected endpoint URL
        submit
      );
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log('Hi, I am error', err.message);
    }
    
    resetForm();
  };
  

  const resetForm = () => {
    setPdfLink('');
    setQuickNote('');
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
