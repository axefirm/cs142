import React from "react";
import { Link } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";
import "./userList.css";
import axios from 'axios'

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';

/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      photoNumber: [],
      totalComment: []
    };

  }
componentDidMount(){
      axios.get("http://localhost:3000/user/list")
        .then(response => response.data)
        .then(data => {
          this.setState({list: data})
          data.map( item =>{
            axios.get("http://localhost:3000/photosOfUser/"+ item._id)
            .then(response => response.data)
            .then(data1 => {
              // console.log("zurag"+data1.length)
                this.state.photoNumber.push(data1.length);
                console.log(this.state.photoNumber)
              let count = 0;
              data1.map( item1 => {
                count = count + item1.comments.length
              })
              console.log("count"+count)
              this.state.totalComment.push(count)
              this.setState({totalComment: this.state.totalComment})
            })
            this.setState({photoNumber:this.state.photoNumber})
          })
        });

}
  render() {
    return (
      <div>
        {/* <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <a href="https://material-ui.com/demos/lists/">Lists</a>{" "}
          and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography> */}
        {this.state.list.map((i,index) => {
          return (
            <List key={i._id}>
              <ListItem component={Link} to={"/users/" + i._id}>
                <ListItemText primary={i.first_name + " " + i.last_name} />
                  <Badge badgeContent={this.state.photoNumber[index]} color="primary">
                    <InsertPhotoIcon />
                  </Badge>
                  &nbsp;&nbsp;
                  <Badge badgeContent={this.state.totalComment[index]} color="primary">
                    <MailIcon />
                  </Badge>
              </ListItem>
              <Divider />
            </List>
          );
        })}
        <Typography variant="body1">
          {/* {window.cs142models.userListModel()} */}
          {/* The model comes in from window.cs142models.userListModel() */}
        </Typography>
      </div>
    );
  }
}

export default UserList;
