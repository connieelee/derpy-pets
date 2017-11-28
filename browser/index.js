import React from 'react'; // SAME AS: const React = require('react');
import ReactDOM from 'react-dom';

import { catsData, dogsData } from '../data'; // kind of similar to const data = require('../data');
import Header from './Header';
import AnimalsList from './AnimalsList';

class App extends React.Component {
  constructor() {
    super(); // must call super when extending from another class
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
    };
    this.updateView = this.updateView.bind(this);
  }

  updateView(view) {
    this.setState({ view: view });
  }

  render() {
    return (
      <div>
        <Header />

        <div className="filters">
          <button onClick={() => this.updateView('cats')}>I WANT A MEOWER</button>
          <button onClick={() => this.updateView('dogs')}>I WANT A BARKER</button>
        </div>

        <div className="app">
          {
            (this.state.view === 'cats' || this.state.view === 'all') &&
            <AnimalsList type="cats" animals={this.state.cats} />
          }
          {
            (this.state.view === 'dogs' || this.state.view === 'all') &&
            <AnimalsList type="dogs" animals={this.state.dogs} />
          }
          {/* 
            NOT DIRECT MAPPING BUT SIMILAR IDEA
            const props = {
              type: 'cats',
              animals: this.state.cats
            };
            AnimalsList(props)

            TURNERARIES
            (condition) ? (execute if condition is met) : (execute otherwise)
          */}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') // where on the document you would like to show your React app
);

// <h1>hello, react</h1>
// Babel takes this and translates into something akin to... React.createElement('h1', 'hello, react')