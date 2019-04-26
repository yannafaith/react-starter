import React, { Component } from 'react';

let mockPosts = [
  {
  "creator_id": 1,
  "title": "mock title",
  "body": "mock post",
  "created_at": "timestamp value",
  "delete_at": "day and time of automatic deletion"
  },
  {
    "creator_id": 1,
    "title": "mock title",
    "body": "mock post",
    "created_at": "timestamp value",
    "delete_at": "day and time of automatic deletion"
  },
]

let mockUsers = [
  {
    "id": 1,
    "username": "mock username",
    "password": "mock password",
    "email": "mock email",
  },
  {
    "id": "user id",
    "username": "mock username",
    "password": "mock password",
    "email": "mock email",
  },
]
class App extends Component {
  render() {
    return (
      <div>
        {mockPosts.map(post => {
          return (
            <div> <p>
              {post.title} <br/>
              {post.body} <br/>
              {post.created_at} <br/>
              {post.delete_at} <br/>
            </p> </div> 
          )
        })}
      </div>
    );
  }
}

export default App;

/* imports already available: 

-- axios 
-- react-dom 
-- react-router-dom for { Route, BrowserRouter, Link } 
-- styled-components for styled

*/