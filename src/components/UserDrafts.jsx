import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import axios from 'axios';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//this component appears when user is logged in and displays the user's saved drafts.

export default class UserDraft extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };
    }

    //functions go here. needs a get call to db for user's passed props, a delete call to handle delete option, handle page up display for edit.

    componentDidMount = () => {
        //get call to db for draft resumes
        axios.get('/user?ID=12345') //fix this syntax
            .then(function (response) {
                //pass to component for mapping to reactDOM
                console.log(response);
            })
            .catch(function (error) {
                console.log(error, "response on draft get call error");
            });
    };

    handleExpandChange = (expanded) => {
        this.setState({ expanded: expanded });
    };


    handleEdit = () => {
        //page up to resume section with selected draft entry
    };

    handleDelete = () => {
        //delete call to db for entry
        axios.delete('/user?ID=12345') //fix this syntax
            .then(function (response) {
                //re-render component
                componentDidMount();
            })
            .catch(function (error) {
                console.log(error, "response on draft delete call error");
            });
    };

    handlePDF = () => {
        //get pdf link from db
        axios.get('/user?ID=12345') //fix this syntax
            .then(function (response) {
                //open tab to pdf link
                window.open(`${response.url}`); //fix syntax
                console.log(response);
            })
            .catch(function (error) {
                console.log(error, "response on PDF get call error");
            });
    };

    handleExpand = () => {
        this.setState({ expanded: true });
    };

    handleReduce = () => {
        this.setState({ expanded: false });
    };

    render() {
        if (!props.isLoggedIn) {
            return null;
        }
        return (
            //needs to be mapped over entire result of componentDidMount
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader
                    title="URL Avatar"
                    {/*subtitle="Subtitle"*/}
                    //we can make this an optional subtitle entry
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText>

                </CardText>
                <CardMedia
                    expandable={true}
                >
                    {/*this is where the resume draft will display. need json handler or pdf link preview*/}
                    <img src="" />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
                <CardText expandable={true}>
                    {/*user notes section? (would need UPDATE call to db) otherwise delete.*/}
                </CardText>
                <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
                    <FlatButton label="Edit" onTouchTap={this.handleEdit} />
                    <FlatButton label="Delete" onTouchTap={this.handleDelete} />
                    <FlatButton label="PDF" onTouchTap={this.handlePDF} />
                </CardActions>
            </Card>
        );
    }
}






