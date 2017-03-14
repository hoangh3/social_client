import React from 'react';
import { Link } from 'react-router';

class Post extends React.Component {
  render() {
    return (
      <div className="col-md-5">
        <div className="info-post row">
          <div className="owner-post">
            <Link to="/" className="endpoint margin-right-15">
              <div className="circle-48">
                <img className="avatar-48" src="/image/avatar.png"/>
              </div>
            </Link>
            <div className="info-owner-post">
              <div className="name-owner-post">
                <Link to="/" className="endpoint"> Hoang H3 Styler </Link>
              </div>
              <div className="time-owner-post">
                <span>3 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;