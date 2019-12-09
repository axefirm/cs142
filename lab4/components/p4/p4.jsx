import React from 'react';
import ReactDOM from 'react-dom';

import './p4.css';

import States from './../states/States';
import Example from './../example/Example';
import Header from './../Header/Header';

class p4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            active: false,
        }
    }

    ToggleButton(){
            if(this.state.active == true){
              this.setState({active : false});
            }else{
              this.setState({active : true});
            }
        console.log(this.state.active)
    }

    render(){
        return(
            <div>
              <Header/>
              <label className="switch">
                <input type="checkbox" onClick={() => this.ToggleButton()}/>
                <span className="slider round"></span>
              </label>
              {(this.state.active==true) && <h1>States</h1>}
              {(this.state.active==false) && <h1>Example</h1>}
                {(this.state.active == true) && <States /> }
                {(this.state.active == false) && <Example /> }
            </div>
        )
    }
  }
export default p4;
