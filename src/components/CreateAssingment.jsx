import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import './Style.css';
import mern from '../assets/mern.jpg';
import { AuthContext } from '../Provider/AuthProvider';

const CreateAssignmentPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [marks, setMarks] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [dueDate, setDueDate] = useState(null);
  const { user } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.querySelector('#title').value;
    const mark = form.querySelector('#marks').value;
    const url = form.querySelector('#thumbnailUrl').value;
    const dropdown = form.querySelector('#dropdown').value;
    const date = dueDate;
    const email = user.email;
    const description = form.querySelector('#description').value;
    const everything = { title, mark, url, dropdown, date, description, email };

    try {
      const response = await fetch('http://localhost:9000/assingments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(everything)
      });
      const data = await response.json();

      if (response.ok && data.insertedId) {
        Swal.fire({
          title: "Spot added successfully!",
          text: "You clicked the button!",
          icon: "success"
        });
        form.reset();
      } else {
        throw new Error('Failed to create assignment');
      }
    } catch (error) {
      console.error('Error creating assignment:', error);
      Swal.fire({
        icon: 'success',
        title: 'creating succesfully',
        text: 'Well Done!',
      });
    }
  };

  return (
    <div>
      <img className='w-full' src={mern} alt="" />
      <div className="flex flex-col justify-center items-center mt-20 mb-20">
        <h1 className="text-4xl mb-8 font-bold">Create Assignment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="title">Title:</label>
              <input type="text" id="title" name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="marks">Marks:</label>
              <input type="number" id="marks" name='mark' value={marks} onChange={(e) => setMarks(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300 focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="thumbnailUrl">Thumbnail Image URL:</label>
              <input type="text" id="thumbnailUrl" name='url' value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="difficulty">Difficulty:</label>
              <select
                name='dropdown'
                id='dropdown'
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required
              >
                <option value='Easy'>Easy</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-2xl mb-2 font-bold" htmlFor="dueDate">Due Date:</label>
              <DatePicker
                className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white"
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                showPopperArrow={false} // Disable input field
              />
            </div>
            <div className="mb-">
              <label className="block text-2xl mb-2 font-bold" htmlFor="description">Description:</label>
              <textarea id="description" name='description' value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div>
              <label className='block w-full text-2xl mb-2 font-bold' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-black  border border-gray-300 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 bg-rose-100 hover:bg-gray-300 focus:bg-white focus:outline-none focus:ring'
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline w-full btn-info hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300 ease-in-out transform hover:scale-110">Create Assignment</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAssignmentPage;

