import React, { Component } from 'react';

export default class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  }
    
  onInputChange = (event) => {
    this.setState({term: event.target.value})
    console.log(event.target.value);
    }
    
  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          placeholder='Get a five-day forecast in your city'
          className='from-control'
          value={this.state.term}
          onChange={this.onInputChange} />

          <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>SUBMIT</button>
          </span>
        </form>
        )
    }
}

