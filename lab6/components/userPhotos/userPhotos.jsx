import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import "./userPhotos.css";

import axios from 'axios'
/**
 * Define UserPhotos, a React componment of CS142 project #5
 */
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: [],
      count: 0,
      users:[]
    };
  }
  componentDidMount(){
    if(window.location.href.slice(40, 46) === "zurag"){
      console.log("heyy");
      axios.get("http://localhost:3000/user/list")
      .then(response => response.data)
      .then(data =>{
        data.map( item =>
          axios.get("http://localhost:3000/photosOfUser/"+ item._id)
          .then(response => response.data)
          .then(data1 => {
            data1.map(item1=>{
              this.state.x.push(item1);
            }
            )
            this.setState({x: this.state.x});
            console.log(this.state.x);
          })
        )
      })
    }
  }
  render(){
    if(window.location.href.slice(40, 46) === "photos"){
      axios(
        "http://localhost:3000/photosOfUser/" + this.props.match.params.userId
      )
        .then(response => response.data)
        .then(data => this.setState({ x: data }));
        console.log("sda")
      }
    return (
      <div variant="body1">
        <div className="grid">
          <Button variant="contained" color="primary"onClick={()=>{
            if(this.state.count===0){
                this.setState({ count: this.state.x.length-1})
            }else {
              this.setState({ count: this.state.count -1})
            }}}
            >
            Prev
          </Button>
          <Button variant="contained" color="primary" onClick={()=>{
              if(this.state.count==this.state.x.length-1){
                this.setState({ count: 0});
              }else {
                this.setState({ count: this.state.count + 1});
              }}
            }
              >
            Next
          </Button>
        </div>
        <div>
         {this.state.x.map((i,index) => {
           if(index===this.state.count){
           if (i.comments !== undefined) {
             return (
               <div key={index} className="cont">
                 <img src={"/images/" + i.file_name} alt="" />
                 <p>Post date: {i.date_time}</p>
                 {i.comments.map((value,index) => (
                   <div key={index} className="comment">
                     <Link to={"/users/" + value.user._id}>
                       {value.user.first_name + " " + value.user.last_name}
                     </Link>
                     <p>
                       {value.comment}
                       {" - " + value.date_time}
                     </p>
                   </div>
                 ))}
               </div>
             );
           } else {
             return (
               <div className="cont">
                 {
                   <span>
                     <img src={"/images/" + i.file_name} alt="" />
                     <p>Post date: {i.date_time}</p>
                   </span>
                 }
               </div>
             );
           }
         }
         })}
       </div>
      </div>
    );
  }
}

export default UserPhotos;
