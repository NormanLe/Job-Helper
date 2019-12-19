import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import IndexComponent from './Components/IndexComponent'
import SettingsComponent from './Components/SettingsComponent'
import ProfileComponent from './Components/ProfileComponent'
import LoginComponent from './Components/LoginComponent'
import SignUpComponent from './Components/SignUpComponent'
import SearchQueryComponent from './Components/SearchQueryComponent'
import JobsComponent from './Components/JobsComponent'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexComponent}/>
          <Route path='/jobs' component={JobsComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
          <Route path='/settings' component={SettingsComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/signup' component={SignUpComponent}/>
          <Route path='/search' component={SearchQueryComponent}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;