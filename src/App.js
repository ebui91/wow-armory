import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import './reset.css';
import raceList from './races.json';
import classList from './classes.json';

import Armory from './components/Armory/Armory.js';
import CharacterStats from './components/CharacterStats/CharacterStats.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      character: {}
    }
  }

  componentWillMount() {
    axios.get("/api/test").then(response => this.setState({ character: response.data }));
  }

  render() {
    const { name, race, level, thumbnail, realm, battlegroup, totalHonorableKills } = this.state.character;
    const characterRace = raceList.races[race - 1];
    const characterClass = classList.classes[this.state.character.class - 1];

    return (
      <div className="App">
        <h1>WOW ARMORY</h1>

        <div className="character-container">
          <p>{ name }</p>
          <p>{ realm } ({ battlegroup })</p>
          <p>Level {level} { characterRace && characterRace.name } { characterClass && characterClass.name }</p>
          <img src={ `https://render-us.worldofwarcraft.com/character/${ thumbnail }` } alt=""/>
          <p>Honorable Kills: { totalHonorableKills }</p>
        </div>

        <CharacterStats stats={this.state.character.stats} />
        <Armory imgURL={`https://render-us.worldofwarcraft.com/character/${thumbnail}`} />
      </div>
    );
  }
}

export default App;
