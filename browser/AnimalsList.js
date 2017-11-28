import React from 'react';

const AnimalsList = ({ type, animals }) => {
  return (
    <div>
      <h2>{type}</h2>
      <div className="gallery">
      {
        animals.map(animal => {
          return (
            <div key={animal.id} className="animal-card">
              <img src={animal.imageUrl} />
              <p>{animal.name}</p>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}

export default AnimalsList;
