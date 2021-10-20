import React, {useState, useEffect} from 'react';
import {Card} from './Card';

export const Gallery = () => {
    
  const [characters, setCharacters] = useState([]);

  // 3. Create out useEffect function
useEffect(() => {
  fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
      
  .then(data => setCharacters(data.results))
},[])

return (
   <>
   <div className = "container mt-5">
        <Card characters = {characters}/>
   </div>
   </>
);
}


