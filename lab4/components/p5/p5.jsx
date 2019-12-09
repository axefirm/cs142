import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router'

import './p5.css';

import States from './../states/States';
import Example from './../example/Example';
import Header from './../Header/Header';

class p5 extends React.Component{
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
          <Router>
            <div>
              <Header/>
              <div className="container">
                <label className="switch">
                  <input type="checkbox" onClick={() => this.ToggleButton()}/>
                  <span className="slider round"></span>
                </label>
                {(this.state.active==true) && <Redirect to="/states" />}
                {(this.state.active==false) && <Redirect to="/example" />}
                <Route exact path={"/states"} component={States}/>
                <Route exact path={"/example"} component={Example}/>
              </div>
            </div>
        </Router>
        )
    }
  }
export default p5;
