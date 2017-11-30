import React from 'react';
import SubscribeForm from './SubcribeForm';

class SubscribeFormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: { input: '', errors: [], isDirty: false },
      zip: { input: '', errors: [], isDirty: false },
      agreement: false,
    };
    this.updateInput = this.updateInput.bind(this);
    this.fieldsAreValid = this.fieldsAreValid.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  updateInput(e) {
    const field = e.target.name;
    const value = e.target.value;
    const nextState = { value: value, errors: [], isDirty: true };
    if (!value.length) {
      nextState.errors.push('field is required');
    }
    if (field === 'zip' && value.length !== 5) {
      nextState.errors.push('zip code must be 5 digits');
    }
    this.setState({ [field]: nextState });
  }

  fieldsAreValid() {
    const fieldsHaveBeenUpdated = this.state.name.isDirty && this.state.zip.isDirty;
    const noErrors = !this.state.name.errors.length && !this.state.zip.errors.length;
    console.log('?', fieldsHaveBeenUpdated && noErrors);
    return fieldsHaveBeenUpdated && noErrors;
  }

  saveUser(e) {
    e.preventDefault();
    console.log('pretend we\'re making a post request to save user in DB');
    // axios.post('/newletters/users', {
    //   name: this.state.name.value,
    //   zip: this.state.zip.value
    // })
    // .then(() => {
    //   // etc etc
    // })
  }

  render() {
    return (
      <SubscribeForm
        name={this.state.name}
        zip={this.state.zip}
        updateInput={this.updateInput}
        fieldsAreValid={this.fieldsAreValid}
        saveUser={this.saveUser}
      />
    );
  }
}

export default SubscribeFormContainer;
