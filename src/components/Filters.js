import React from "react";

function Filters({ onChangeType, onFindPetsClick }) {

  // const handleChange = (e) => {
  //   //console.log(e.target.value)
  //   onChangeType(e.target.value)
  // }

  // const handleClick = () => {
  //   onFindPetsClick
  // }

  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select name="type" id="type" onChange={(e) => onChangeType(e.target.value)}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field" onClick={onFindPetsClick}>
        <button className="ui secondary button">Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
