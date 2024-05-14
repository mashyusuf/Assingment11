import { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';



function CardsDetails() {
   


    const [assingments , setAssingments] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:9000/assignments/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setAssingments(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } 
        };
        

        fetchData();
    }, []); // Ensure that this effect runs only once, or add params.id to the dependency array if needed

    return (
        <div className='my-20'>
        {
            assingments ? (
                assingments.map(assignment => (
                    <div key={assignment._id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center hover:scale-105 transition">
                        {/* Image Layer */}
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src={assignment.url} className="w-full h-96 object-cover transition-transform transform hover:scale-105" alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        {/* Details Layer */}
                        <div className="p-6">
                            <h2 className="text-3xl md:text-4xl text-orange-600 lg:text-5xl font-bold text-center mb-4">{assignment.title}</h2>
                            <div className="font-bold italic">
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Mark : <span className=" text-blue-600 text-lg ml-3">{assignment.mark} </span></p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Date : <span className=" text-blue-600 text-lg ml-3">{assignment.date}</span> </p>
                                <p className="flex items-center mb-2"> <FaCircle className="mr-2" />Difficulties : <span className=" ml-3 text-blue-600 text-lg">{assignment.dropdown}</span> </p>
                                <p className="flex items-center  mb-2"> <FaCircle className="mr-2" />Description  : <span className="text-sm text-red-500 ml-3">{assignment.description}</span> </p>
                            </div>
                            <Link to={'/take'}><div className="flex justify-center mt-8">
                                <button className='btn btn-outline btn-accent'>Take This Assingment</button>
                            </div></Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )
        }
    </div>
);
}

export default CardsDetails;
