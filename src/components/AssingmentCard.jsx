import  { useState } from 'react';
import { Link } from 'react-router-dom';

// Description component
const Description = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Shortened description
    const words = description.split(' ');
    const shortDescription = words.slice(0, 10).join(' ');

    return (
        <p
            className="text-sm text-gray-700 dark:text-gray-300"
            onMouseEnter={() => setShowFullDescription(true)}
            onMouseLeave={() => setShowFullDescription(false)}
        >
            {showFullDescription ? description : shortDescription}
        </p>
    );
};

// Function to format date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
};

// Assignment card component
const AssingmentCard = ({ assingment }) => {
    const { title, mark, url, dropdown, date,description ,_id} = assingment;

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto bg-slate-300 rounded-md">
            <div className=" bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img className='w-96 h-60' src={url} alt="" />
            </div>

            <div className="-mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>
                <span className="font-bold flex justify-center text-amber-400 "> {dropdown}</span>
                
                <div className='p-4'>
                   <span className='text-white'> Description : </span>
                   <Description  description={description} />
                </div>
                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">Marks : {mark}</span>
                    <span className="font-bold text-gray-800 dark:text-gray-200">Date : {formatDate(date)}</span>
                </div>
                <div className='flex justify-center'>
                <Link className='w-full' to={`/assingment/${_id}`}>
  <button className="p-5 text-center w-full btn btn-outline btn-link text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
    View Assignment
  </button>
</Link>


                </div>
        </div>
           
        </div>
    );
};

export default AssingmentCard;
