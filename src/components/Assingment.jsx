import { useLoaderData } from "react-router-dom";
import AssingmentCard from "./AssingmentCard";
import umm from '../assets/umm4.gif'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
{/*
c
    console.log(assingments)
    return (
        <div>
           
            <div>
                <img className=" w-full h-[400px]" src={umm} alt="" />
            </div>
            <div className="text-center m-20">
                <h1 className="text-6xl text-orange-700 font-bold">Wellcome To Assingment Area </h1>
                <p className="text-md font-bold mt-6">The objective of this assignment is to deepen your understanding of basic jet propulsion  <br />principles by designing a simplified jet engine.</p>
            </div>
            <div className='flex items-center justify-center'>
          
        </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto ">
                {
                    assingments.map(assingment => <AssingmentCard key={assingment._id} assingment={assingment}></AssingmentCard>)
                }
            </div>
        </div>
    );
    <Tabs>
    <div className=' container px-6 py-10 mx-auto'>
 
      <div className='flex items-center justify-center'>
        <TabList>
          <Tab>Easy</Tab>
          <Tab>Meduim</Tab>
          <Tab>Hard</Tab>
        </TabList>
      </div>
      <TabPanel>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {assingments
            .filter(a => a.difficulty === 'Easy')
            .map(assingment => (
              <AssingmentCard key={assingment._id} assingment={assingment} />
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {assingments
            .filter(a => a.difficulty === 'Medium')
            .map(assingment => (
              <AssingmentCard key={assingment._id} assingment={assingment} />
            ))}
        </div>
      </TabPanel>

      <TabPanel>
        <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {assingments
            .filter(a => a.difficulty === 'Hard')
            .map(assingment => (
              <AssingmentCard key={assingment._id} assingment={assingment} />
            ))}
        </div>
      </TabPanel>
    </div>
  </Tabs>
    */
}

const Assingment = () => {
    const assingments = useLoaderData()
    console.log(assingments)
    return (
        <Tabs>
        <div className=' container px-6 py-10 mx-auto'>
        <img className=" w-full h-[400px] mb-10" src={umm} alt="" />
     
          <div className='flex items-center justify-center'>
          <TabList className="flex items-center justify-center">
  <Tab className="p-2 mx-1 cursor-pointer transition  text-lg font-bold duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600 hover:font-bold border border-transparent">Easy</Tab>
  <Tab className="p-2 mx-1 cursor-pointer transition   text-lg font-bold duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600 hover:font-bold border border-transparent">Medium</Tab>
  <Tab className="p-2 mx-1 cursor-pointer transition   text-lg font-bold duration-300 ease-in-out hover:text-blue-600 hover:border-blue-600 hover:font-bold border border-transparent">Hard</Tab>
</TabList>

          </div>
          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {assingments
                .filter(a => a.dropdown === 'Easy')
                .map(assingment => (
                  <AssingmentCard key={assingment._id} assingment={assingment} />
                ))}
            </div>
          </TabPanel>
    
          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {assingments
                .filter(a => a.dropdown === 'Medium')
                .map(assingment => (
                  <AssingmentCard key={assingment._id} assingment={assingment} />
                ))}
            </div>
          </TabPanel>
    
          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {assingments
                .filter(a => a.dropdown === 'Hard')
                .map(assingment => (
                  <AssingmentCard key={assingment._id} assingment={assingment} />
                ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    );
};

export default Assingment;