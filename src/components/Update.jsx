import { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import './Style.css';
import mern from '../assets/mern.jpg';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios'
const Update = () => {
  const assingments = useLoaderData();
  const navigate = useNavigate()
  const {
    _id,
    title,
    date,
    dropdown,
    mark,
    description,
  } = assingments || {};
  
  const [ setTitle] = useState('');
  const [ setDescription] =useState('');
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
    const thumbnailUrl = form.querySelector('#thumbnailUrl').value; // Use thumbnailUrl instead of url
    const dropdown = form.querySelector('#dropdown').value;
    const date = dueDate;
    const email = user.email;
    const description = form.querySelector('#description').value; // Use description instead of url
    const everything = { title, mark, thumbnailUrl, dropdown, date, description, email };
  
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/assingments/${_id}`,
        everything
      )
      console.log(data)
      toast.success('Job Data Updated Successfully!')
      navigate('/my-assingment')
    } catch (err) {
      console.log(err)
      toast.error(err.message)
    }
  }
  
  return (
    <div>
      <img className='w-full' src={mern} alt="" />
      <div className="flex flex-col justify-center items-center mt-20 mb-20">
        <h1 className="text-4xl mb-8 font-bold">Create Assignment</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="title">Title:</label>
              <input type="text" id="title" defaultChecked={title} name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="marks">Marks:</label>
              <input type="number" id="marks" name='mark' defaultChecked={mark} value={marks} onChange={(e) => setMarks(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300 focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="thumbnailUrl">Thumbnail Image URL:</label>
              <input type="text" id="thumbnailUrl" name='url' defaultChecked={url} value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div className="mb-4">
              <label className="block text-2xl mb-2 font-bold" htmlFor="difficulty">Difficulty:</label>
              <select
                name='dropdown'
                defaultChecked={dropdown}
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
                defaultChecked={date}
                onChange={(date) => setDueDate(date)}
                showPopperArrow={false} // Disable input field
              />
            </div>
            <div className="mb-">
              <label className="block text-2xl mb-2 font-bold" htmlFor="description">Description:</label>
              <textarea id="description" name='description' defaultChecked={description} value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 bg-rose-100 hover:bg-gray-300  focus:bg-white" required />
            </div>
            <div>
              <label className='block text-2xl mb-2 font-bold' htmlFor='emailAddress'>
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

export default Update;
