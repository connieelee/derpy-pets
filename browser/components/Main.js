import React from 'react';

import { catsData, dogsData } from '../../data';
import AnimalsList from './AnimalsList';
import AnimalProfile from './AnimalProfile';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
    }
  }

  changeView(view) {
    this.setState({view})
  }

  render() {
    const animalsToDisplay = this.state.view === 'all' ?
      [...this.state.cats, ...this.state.dogs] :
      this.state[this.state.view];

    return (
      <div className="App">
        <div className="App-header" onClick={() => this.changeView('all')} >
          <img
            src="/logo.png"
            className="App-logo"
            alt="logo"
          />
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <button className="btn-flat btn-large col s5"
                   onClick={() => this.changeView('cats')}>
                   I WANT A MEOWER
            </button>
            <button className="btn-flat btn-large col s5 offset-s2"
                    onClick={() => this.changeView('dogs')}>
                    I WANT A BARKER
            </button>
          </div>
        </div>

        <div className="App-content container-fluid">
          <AnimalsList
            animals={animalsToDisplay}
            view={this.state.view}
          />
        </div>
      </div>
    );
  }
}

export default Main;
