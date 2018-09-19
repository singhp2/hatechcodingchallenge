import React, { Component } from 'react';
import './App.css';
import Header from './components/layouts/header';
import PostList from './components/api_calls/PostList';
class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <PostList/>
      </div>  
    );
  }
}

export default App;
