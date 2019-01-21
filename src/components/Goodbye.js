import React, { Component } from 'react';
import { Link } from '@reach/router';

export default class Hello extends Component {
  render() {
    return (
      <div>
        <h1>See ya, then!</h1>
        <Link to="/">Oh, actually, I forgot my keys</Link>
      </div>
    );
  }
}
