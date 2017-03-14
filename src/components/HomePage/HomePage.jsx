import React from 'react';
import Post from './Post/Post.jsx';
import Comment from './Comment/Comment.jsx';
import LeftSideMenu from './SideMenu/LeftSideMenu.jsx';

class HomePage extends React.Component {
  render() {
    return (
      <div className="row">
        <LeftSideMenu />
        <div>
          <Post />
          <Comment />
        </div>
      </div>
    );
  }
}

export default HomePage;