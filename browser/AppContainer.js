import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { catsData, dogsData } from '../data';
import Header from './Header';
import AnimalsList from './AnimalsList';
import SubscribeFormContainer from './SubscribeFormContainer';

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: catsData,
      dogs: dogsData,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="filters">
            <Link to="/cats">I WANT A MEOWER</Link>
            <Link to="/dogs">I WANT A BARKER</Link>
            <Link to="/subscribe">KEEP IN TOUCH!</Link>
          </div>
          <div className="app">
            <Switch>
              <Route exact path="/" render={() => <h1>welcome!</h1>}/>
              <Route path="/cats" render={props => <AnimalsList {...props} animals={this.state.cats} />} />
              <Route path="/dogs" render={props => <AnimalsList {...props} animals={this.state.dogs} />} />
              <Route path="/subscribe" component={SubscribeFormContainer} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default AppContainer;
