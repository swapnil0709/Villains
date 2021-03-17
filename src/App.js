import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/card-list/Search";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const FilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Villains</h1>
        <Search
          placeholder={"Search here"}
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {/* <input
          type="search"
          placeholder="Search"
          onChange={(e) => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
        /> */}
        <CardList monsters={FilteredMonsters} />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
