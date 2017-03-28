import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
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

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };


  handleEdit = () => {
      //page up to resume section with entry
  };

  handleDelete = () => {
      //delete call to db for entry
  };

  handlePDF = () => {
     //get pdf link from db, open tab to pdf link
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    if (!props.isLoggedIn) {
            return null;
        }
    return (
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
          <FlatButton label="Edit" onTouchTap={this.handleExpand} />
          {/*^^needs a re-direct function to update on resume page*/}
          <FlatButton label="Delete" onTouchTap={this.handleExpand} />
          {/*^^needs a DELETE call to db*/}
          <FlatButton label="PDF" onTouchTap={this.handleExpand} />
          {/*^^open saved PDF link in other page*/}
        </CardActions>
      </Card>
    );
  }
}


/////////////////
 


    

