import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-md-3">
          <Link to="/">
            <img className="logo" src="/image/gamecontroller.png"/>
          </Link>
        </div>
        <div className="col-md-9">
          <h1>This is header</h1>
        </div>
      </header>
    );
  }
}

export default Header;