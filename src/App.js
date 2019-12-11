import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'

import IndexComponent from './Components/IndexComponent'
import SettingsComponent from './Components/SettingsComponent'
import ProfileComponent from './Components/ProfileComponent'
import LoginComponent from './Components/LoginComponent'
import SignUpComponent from './Components/SignUpComponent'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexComponent}/>

          {/* <Route path='/jobs' component={JobComponent}/> */}
          {/* <Route path='/job/:id' component={JobComponent}/> */}

          <Route path='/profile' component={ProfileComponent}/>
          <Route path='/settings' component={SettingsComponent}/>
          <Route path='/login' component={LoginComponent}/>
          <Route path='/signup' component={SignUpComponent}/>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;