import React, { useState, useEffect } from "react";
import DogList from "./DogList";
//  import { dogs } from "./dogs";
import SearchBox from "./SearchBox";

function App() {
  const [dogs, setDogs] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  //  const fetchURL = "https://dog.ceo/api/breeds/list/all";
   const onSearchChange = (event) => {
     setSearchfield(event.target.value);
   }
    // fetch(`${fetchURL}/posts`);

  //  useEffect(() => {
  //    onSearchChange().then((searchfield) => setSearchfield(searchfield));
  //  }, [dogs, searchfield]);

  async function fetchData() {
    const onSearchChange = await fetch("https://dog.ceo/api/breeds/list/all");
    onSearchChange
      .json()
      .then((searchfield) => setSearchfield(searchfield));
      
      
  }

  // useEffect(() => {
     fetchData();
  //  });

   const filtredDogs = dogs.filter((dogs) => dogs.name.includes(searchfield));

  setDogs(() => {
    return filtredDogs; 
  });

  return (
    <div className="app">
      <h1>Dog Names</h1>
      <SearchBox searchChange={onSearchChange} />
      <DogList dogs={dogs} />
    </div>
  );
}
// });
// }
export default App;
