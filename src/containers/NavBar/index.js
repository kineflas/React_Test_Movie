import React, { Component } from 'react';
import { DropDownMenu, NavigationBar, Button, Title, Icon } from '@shoutem/ui';

class NavBar extends Component {
	constructor(props) {
	super(props);
  this.state = {
    filters: [
      { name: 'Filter', value: 'Filter' },
      { name: 'Sport', value: 'Sport' },
      { name: 'Food', value: 'Food' },
    ],
  };
}

render() {
  return (
    <NavigationBar
      styleName="inline"

      leftComponent={
        <Button>
          <Icon name="sidebar" />
        </Button>
      }
      centerComponent={
        <Title>
          {this.state.selectedFilter
            ? this.state.selectedFilter.value
            : this.state.filters[0].value}
        </Title>
      }
      rightComponent={
        <DropDownMenu
          options={this.state.filters}
          selectedOption={this.state.selectedFilter ? this.state.selectedFilter : this.state.filters[0]}
          onOptionSelected={(filter) => this.setState({ selectedFilter: filter })}
          titleProperty="name"
          valueProperty="value"
        />
      }
    />
  );
}
}

export default NavBar;
