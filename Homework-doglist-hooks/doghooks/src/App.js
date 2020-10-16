import React, { useState, useEfect } from "react";
import DogList from "./DogList";
import { dogs } from "./dogs";
import SearchBox from "./SearchBox";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       dogs: dogs,
//       searchfield: "",
//     };
//   }
    function App() {
      const [dogs, setDogs] = useState([])
      const [searchfield, setSerchfield] = useState("")
    }

   const onSearchChange = (event) => {
    setSerchfield( event.target.value);
  };

  // render() {
    
    const filtredDogs = dogs.filter(dogs => {
      return dogs.name.includes(searchfield);
    });

    return (
      <div className="app">
        <h1>Dog Breads</h1>
        <SearchBox searchChange={onSearchChange} />
        <DogList dogs={filtredDogs} />
      </div>
    );
  


export default App;



  

