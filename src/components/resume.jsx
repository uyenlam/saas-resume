//not sure how i want to handle this yet but i like the paper look and there needs to be a toolbar.

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

export default class ToolbarExamplesSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
      return (
          //what do we have to do to get this to work?
        if () {
          <div className="warning">
              Warning!
    </div>
        }
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <i class="material-icons">text_format</i>
            <MenuItem value={1} primaryText="Raleway" />
            <MenuItem value={2} primaryText="Ubuntu" />
            <MenuItem value={3} primaryText="Open Sans" />
          </DropDownMenu>
        </ToolbarGroup>
       
            }
      </Toolbar>
    );
  }
}
