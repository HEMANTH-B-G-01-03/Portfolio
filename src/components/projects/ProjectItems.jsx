import React, { useState } from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const ProjectItems = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDemoClick = () => {
    setShowDetails(true);
  };

  const handleCloseClick = () => {
    setShowDetails(false);
  };

  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <button onClick={handleDemoClick} className="project__button">
        More Info <HiOutlineArrowSmRight className="project__button-icon" />
      </button>

      {showDetails && (
        <div className="project__details-overlay">
          <div className="project__details-card">
            <button className="close-button" onClick={handleCloseClick}>
              <FaTimes />
            </button>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Tech Stack:</strong> {item.techStack}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectItems;
