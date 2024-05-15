
import { Link } from 'react-router-dom';
import ani from '../assets/ani.webp'
const Normal = () => {
    return (
        <Link to={'/normal'}>
        <div className=' bg-rose-200 max-w-7xl mx-auto rounded-xl mb-10'>
            <h1 className='text-6xl m-10 pt-10 text-center text-sky-700'>Get Start With Us</h1>
            <div className='flex gap-10'>
            
        <div className='p-10'>
            <img className='w-full  h-full' src={ani} alt="" />
            </div>
        <div className='p-5'> 
            <div>
            <h1 className='text-3xl text-black m-5 font-bold'>Web Development Overview :</h1>
            <p className='text-lg text-blue-600 font-bold'>This section provides an introduction to web development, covering its importance, basic concepts, and technologies involved</p>
            </div>
            <div>
            <h1 className='text-3xl text-black m-5 font-bold'>React A Powerful JavaScript Library :</h1>
            <p className='text-lg  text-blue-600 font-bold'>TExplore React, a popular JavaScript library used for building user interfaces. This section covers its features, advantages, and how it simplifies the process of creating interactive web applications</p>
            </div>
            <div>
            <h1 className='text-3xl text-black m-5 font-bold'>JavaScript The Language of the Web :</h1>
            <p className='text-lg text-blue-600 font-bold mb-10'>Delve into JavaScript, the programming language essential for web development. This section discusses its role in client-side scripting, its versatility, and its importance in modern web development stacks.</p>
            </div>
        </div>
    </div>
    </div>
        </Link>
);

};

export default Normal;