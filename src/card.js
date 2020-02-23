import React from 'react';

function Card(props) {
  const imgSrc = props.imageSrc;
  const characterName = props.characterName;
  return (
    <div className="column">
      <div className="card">
        <img src={imgSrc} alt="Avatar"/>
        <div className="container">
            <h4><b>{characterName}</b></h4>
        </div>
      </div>
    </div>
  )
}

export default Card;