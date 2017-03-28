import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';


//this component appears when user is logged in and displays the user's saved drafts. 
class UserDrafts extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    //functions go here. needs a get call to db for user's passed props, a delete call to handle delete option, handle page up display for edit.


    render() {
        //need prop that indicates user is logged in or !props.user
        if (!props.isLoggedIn) {
            return null;
        }
        return (
            //elements (JSX) goes here. Needs to accept user prop from dashboard. 
            //needs map to 1) preview of resumes 2) 'x' delete button 3) 'pencil' edit button 4) print to pdf button 
        );
    }


}