import React, { Component } from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import IndexComponent from './components/indexComponent'
// import {SettingComponent} from './Components/SettingComponent'
// import JobListComponent from './components/jobListComponent'
// import {ProfileComponent} from './Components/ProfileComponent'

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={IndexComponent}/>
          <Route exact path='/index' component={IndexComponent}/>
          {/* <Route path='/settings' componenet={SettingComponent}/>
          <Route path='/profile/:username' component={ProfileComponent}/> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;