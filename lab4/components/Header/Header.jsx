import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sukhbat N.",
      motto: "Davtalt bolhooroo davtana.",
    };
  }
  render(){
    return(
      <div>
        <div className="top">
        </div>
        <div className="name">
          {this.state.name}
        </div>
      </div>
    );
  }
}

export default Header;
