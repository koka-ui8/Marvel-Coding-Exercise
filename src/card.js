import React from 'react';

// Container Component for Card Information
function Card(props) {
  const { imageSrc, characterName } = props;
  return (
    <div className="column">
      <div className="card">
        <img src={imageSrc} alt="Avatar"/>
        <div className="cardContainer">
            <h4><b>{characterName}</b></h4>
        </div>
      </div>
    </div>
  )
}

export default Card;