import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [isAdopted, setIsAdopted] = useState(false)

  const handleOnChangeType = (filterSelect) => {
    setFilters({...filters, type: filterSelect})
  }

  const handleOnFindPets = () => {
    let query = filters.type

    query === "all" ? query = "" : query = `?type=${query}`
    fetch(`http://localhost:3001/pets${query}`)
      .then(r => r.json())
      .then(data => {
        //console.log(data)
        setPets(data)
      })
  }

  const handleOnAdopt = (petId) => {
    const adoptPet = pets.map(pet => {
      if (pet.id === petId) {
        pet.isAdopted = true
        return pet
      } else {
        return pet
      }
    })
    //console.log(adoptPet)
    setPets(adoptPet)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleOnChangeType} 
              onFindPetsClick={handleOnFindPets}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              pets={pets}
              onAdoptPet={handleOnAdopt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
