import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Card = ({ id, name, color, hat, age }) => {
  return (
    <div className="crewmate-card" style={{ borderColor: color.toLowerCase() }}>
      <div 
        className="crewmate-avatar"
        style={{ backgroundColor: color.toLowerCase() }}
      >
        {hat !== 'none' && (
          <div className="crewmate-hat">{hat.charAt(0).toUpperCase()}</div>
        )}
      </div>
      
      <div className="crewmate-info">
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Color: {color}</p>
        <p>Hat: {hat}</p>
      </div>
      
      <div className="card-actions">
        <Link to={`/edit/${id}`} className="edit-button">Edit</Link>
        <Link to={`/details/${id}`} className="view-button">View Details</Link>
      </div>
    </div>
  );
};

export default Card;