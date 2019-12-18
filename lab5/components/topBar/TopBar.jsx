import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={page:"",
    name:"",
    listItems123: [],
    active: false,
  }
  }
  ToggleButton(){
      if(this.state.active == true){
        this.setState({active : false});
        window.location = 'photo-share.html#/';
      } else{
        this.setState({active : true});
        window.location = 'photo-share.html#/zurag';
      }
    }
  render() {
    var name;
    var page;

    if(window.location.href.slice(40, 45) === "users"){
      fetch('http://localhost:3000/user/'+window.location.href.slice(46, 70))
      .then(response => response.json())
      .then(data => this.setState({ listItems123: data }));
      name = this.state.listItems123.first_name;
      page ="User detail of ";
    }else if(window.location.href.slice(40, 46) === "zurag"){
      page ="";
      name = "Photos";
    }else if(window.location.href.slice(40, 46) === "photos"){
      fetch('http://localhost:3000/user/'+window.location.href.slice(47, 71))
      .then(response => response.json())
      .then(data => this.setState({ listItems123: data }));
      name = this.state.listItems123.first_name;
      page ="Photos of  ";
    }else{
      page = "Username"
      name = "";
    }


    return (
      <AppBar className="cs142-topbar-appBar" position="relative" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
              Sukina
          </Typography>
          <Typography id
            ="right" variant="h6" color="inherit">
          {page + " " + name}
          </Typography>
          <label className="switch">
            <input type="checkbox" onClick={() => this.ToggleButton()}/>
            <span className="slider round"></span>
          </label>
        </Toolbar>
      </AppBar>
    );
  }
}
export default TopBar;
