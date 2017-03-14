import React from 'react';
import { Link } from 'react-router';
import HomePage from '../HomePage/HomePage.jsx';
import Header from './Header.jsx'

class HomePageLayout extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <HomePage />
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}

export default HomePageLayout;