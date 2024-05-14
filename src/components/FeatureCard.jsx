import React, { useRef, useEffect, useState } from "react";

const FeatureCard = ({ feature }) => {
  const { image, title, description } = feature;
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Cleanup
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`max-w-lg p-4 shadow-xl dark:bg-emerald-200 dark:text-gray-800 transition-all ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        transitionDelay: isVisible ? "0.1s" : "0s" // Delay for the first line
      }}
    >
      <div className="flex justify-between pb-4 border-b">
        <div className="flex items-center">
          <span className="mb-0 capitalize dark:text-gray-800">FEATURES</span>
        </div>
        <a href="#" className="hover:text-orange-400">
          Show Details
        </a>
      </div>
      <div
        className=""
        style={{
          transitionDelay: isVisible ? "0.1s" : "0s" // Delay for the second line
        }}
      >
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 transition-all"
          />
        </div>
        <div className="space-y-2">
          <a href="#" className="block">
            <h3 className="font-semibold dark:text-violet-600 text-2xl">
              {title}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-600 font-bold">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
