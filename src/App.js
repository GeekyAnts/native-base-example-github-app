// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Welcome from './components/welcome.js';
import RepoList from './components/repolist.js';
import RepoInfo from './components/repoinfo.js';

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} title="Welcome" initial={true} />
          <Scene key="RepoList" component={RepoList} title="RepoList" />
          <Scene key="RepoInfo" component={RepoInfo} title="RepoInfo" />
        </Scene>
      </Router>
    );
  }
}
