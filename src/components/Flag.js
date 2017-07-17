'use strict';

import React from 'react';

const data = {
  'us': {
    'name': 'USA',
    'icon': 'flag-us.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',

  }
};

export default class Flag extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="flag">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
