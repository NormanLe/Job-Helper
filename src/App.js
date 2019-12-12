import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import IndexComponent from './Components/IndexComponent'
import SettingsComponent from './Components/SettingsComponent'
import ProfileComponent from './Components/ProfileComponent'
import LoginComponent from './Components/LoginComponent'
import SignUpComponent from './Components/SignUpComponent'
import SearchQueryComponent from './Components/SearchQueryComponent'
import JobComponent from './Components/JobComponent'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexComponent}/>

         
          {/* <Route path='/job/:id' component={JobComponent}/> */}
          <Route path='/jobs' component={JobComponent}/>
          <Route path='/profile' component={ProfileComponent}/>
          <Route path='/settings' component={SettingsComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/signup' component={SignUpComponent}/>
          <Route path='/search/:id' component={SearchQueryComponent}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;