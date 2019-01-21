import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>Hello there!</h1>
        <Link to="bye">{`Well, I'm off now`}</Link>
      </div>
    );
  }
}
