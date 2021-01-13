import React from "react";

function Pet( props ) {
  const {id, type, gender, age, weight, name, onAdoptPet, isAdopted} = props

  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          <div>
            {gender === "male" ? "♂" : "♀"}
          </div>

          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        <button className={!isAdopted ? "ui disabled button" : "ui primary button"}>Already adopted</button>
        <button className={isAdopted ? "ui disabled button" : "ui primary button"} onClick={() => onAdoptPet(id)}>Adopt pet</button>
      </div>
    </div>
  );
}

export default Pet;
