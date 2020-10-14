import React, { Component } from "react";
import DogList from "./DogList";
import { dogs } from "./dogs";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: dogs,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filtredDogs = this.state.dogs.filter((dogs) => {
      return dogs.name.includes(this.state.searchfield);
    });

    return (
      <div className="app">
        <h1>Dog Breads</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <DogList dogs={filtredDogs} />
      </div>
    );
  }
}

export default App;
