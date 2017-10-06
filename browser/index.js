import React from 'react';
import ReactDOM from 'react-dom';

import { catsData, dogsData } from '../data';

const AnimalCard = ({ animal }) => {
  // props looks like: { animal: {...} }
  return (
    <div className="animal-card">
      <img src={animal.imageUrl} />
      <p>{animal.name}</p>
    </div>
  );
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all',
      cats: catsData,
      dogs: dogsData,
    };
  }

  changeView(view) {
    // NEVER DO SOMETHING LIKE: this.state.view = 'all';
    this.setState({ view: view });
  }

  render() {
    return (
      <div>
        <div className="header">
          <img className="logo" src="/logo.png" alt="logo" />
          <h3>derpy pets</h3>
        </div>
  
        <div className="filters">
          <button onClick={() => { this.changeView('cats') }}>I WANT A MEOWER</button>
          <button onClick={() => { this.changeView('dogs') }}>I WANT A BARKER</button>
        </div>
  
        <div className="app">
          <h4>welcome to derpy pets animal shelter!</h4>
          <div className="gallery">
          {
            this.state.view !== 'dogs' && this.state.cats.map(cat => {
              return <AnimalCard key={cat.id} animal={cat} />;
            })
          }
          {
            this.state.view !== 'cats' && this.state.dogs.map(dog => {
              return <AnimalCard key={dog.id} animal={dog} />;
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main prop1="hello" prop2="goodbye" />, //useless props for demonstration
  // loosely translting to: Main({prop1: "hello", prop2: "goodbye"})
  document.getElementById('root'),
);
