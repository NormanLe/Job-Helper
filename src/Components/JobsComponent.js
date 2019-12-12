import React, {Component} from 'react'
import JobListComponent from './JobListComponent'
import NavbarComponent from './NavbarComponent';


export default class JobsComponent extends Component{

    render(){
        return(
            <div>
                <NavbarComponent  /> 
                <JobListComponent page="jobs" />
            </div>
        )
    }
}