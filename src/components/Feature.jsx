import { useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";

const Feature = () => {
    const  features = useLoaderData();
    console.log(features)
    return (
        <div className="mt-20 mb-20 bg-purple-200 max-w-7xl mx-auto p-10">
            <div className="text-center">
                <h1 className="text-5xl text-orange-500 font-bold ">OUR <span className="text-emerald-600"> FEATURES</span> </h1>
                <p className="text-md text-slate-600 mt-8">Welcome to the feature section by BJET Inc, where innovation meets reliability. <br /> Explore our range of cutting-edge solutions designed to empower your business</p>
            </div>
            <div className="grid  lg:grid-cols-3 max-w-7xl mx-auto gap-10 justify-center mt-10">
                {
                    features.map(feature => <FeatureCard key={feature._id} feature={feature}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Feature;