import React from 'react';

const SubscribeForm = ({ name, zip, updateInput, fieldsAreValid, saveUser }) => (
  <form onSubmit={saveUser}>
    <div>
      <label htmlFor="name">Full name: </label>
      <input
        name="name"
        type="text"
        value={name.value}
        onChange={updateInput}
        autocomplete="off"
      />
      {
        (name.isDirty && name.errors) &&
        name.errors.map(error => <p style={{color: 'red'}}>{error}</p>)
      }
    </div>
    <div>
      <label htmlFor="zip">Zip code: </label>
      <input
        name="zip"
        type="number"
        value={zip.value}
        onChange={updateInput}
      />
      {
        (zip.isDirty && zip.errors) &&
        zip.errors.map(error => <p style={{color: 'red'}}>{error}</p>)
      }
    </div>
    <button disabled={!fieldsAreValid()} type="submit">submit</button>
  </form>
)

export default SubscribeForm;
