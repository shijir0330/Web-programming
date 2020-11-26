import React from 'react';
import './States.css';

/**
 * Define States, a React componment of CS142 project #4 problem #2.  The model
 * data for this view (the state names) is available
 * at window.cs142models.statesModel().
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.cs142models.statesModel(),
      search: ''
    }
    console.log('this.states', this.states);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    // let states = this.state.states;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input value={this.state.search} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.states.filter(name => name.includes(this.state.search)).map(state => (
            // eslint-disable-next-line react/jsx-key
          <li>
            {state}
          </li>
        ))}
      </div>
    );
  }
}

export default States;
