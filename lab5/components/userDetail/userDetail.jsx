import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./userDetail.css";

/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }
  componentDidMount(){
    fetch("http://localhost:3000/user/" + this.props.match.params.userId)
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }
  render() {
    // let v = window.cs142models.userModel(this.props.match.params.userId);
    return (

      <div className="main" variant="body1">
        {/* This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {this.props.match.params.userId}. You can fetch the model for the user
        from window.cs142models.userModel(userId). */}
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={"/photos/" + this.props.match.params.userId}
        >
          CHECK OUT PHOTOS
        </Button>

        <p>First name: {this.state.user.first_name}</p>
        <p>Last name: {this.state.user.last_name}</p>
        <p>Location: {this.state.user.location}</p>
        <p>Description: {this.state.user.description}</p>
        <p>Occupation: {this.state.user.occupation}</p>
      </div>
    );
  }
}

export default UserDetail;
