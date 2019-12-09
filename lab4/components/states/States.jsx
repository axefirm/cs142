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
    // console.log('window.cs142models.statesModel()', window.cs142models.statesModel());
    this.state = {
      value:"",
      states : window.cs142models.statesModel(),
      result: window.cs142models.statesModel(),
    }
    this.handleChangeBound = event => this.handleChange(event);
  }
  
  handleChange = event => {
    this.setState({value: event.target.value});
    this.state.result = this.state.states.filter(a =>{
      if(!a) return this.state.states;
      return a.toLowerCase().search(this.state.value.toLowerCase()) > -1;
      }
    );
    if (this.state.result === undefined || this.state.result.length == 0) {
      this.state.result[0] ="OLDSONGUI";
    }
  }

  render() {
    return (
      <div>
        <div className="input">
          Search:
          <input className="inputItem" type="text" value={this.state.value} onChange={this.handleChange}/>
        </div>
        <ul>
        {this.state.result.map((value,i) => <li key={i}>{value}</li>)}
        </ul>
      </div>
    );
  }
}

export default States;
