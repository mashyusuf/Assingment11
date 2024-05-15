
import Marquee from "react-fast-marquee";
import js from "../assets/js.png";
import js5 from "../assets/fire.png";
import js1 from "../assets/react.png";
import js2 from "../assets/html.webp";
import js3 from "../assets/css.png";

const Marq = () => {
  return (
    <div className="marquee-container  mb-20 ">
      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">PROGRAMING LANGUAGE</h1>
      <Marquee speed={200}>
        <img src={js} alt="" className= "w-44 h-36 mr-24 rounded-full hover:scale-110" />
        <img src={js1} alt="" className="w-44 h-36 mr-24 rounded-full hover:scale-110" />
        <img src={js2} alt="" className="w-44 h-36 mr-24 rounded-full hover:scale-110" />
        <img src={js3} alt="" className="w-44 h-36 mr-24 rounded-full hover:scale-110" />
        <img src={js5} alt="" className="w-44 h-36 mr-24 rounded-full hover:scale-110" />
      </Marquee>
    </div>
  );
};

export default Marq;

