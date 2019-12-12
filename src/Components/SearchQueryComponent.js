import React,{Component} from 'react'
import NavbarComponent from './NavbarComponent'
import JobListComponent from './JobListComponent'


export default class SearchQueryComponent extends Component{

    render(){
        let path = this.props.location.pathname
        let searchText = path.substring(path.lastIndexOf('/') + 1);
       
        return(
           
            <div>
                <NavbarComponent />
                <JobListComponent search={searchText}/>
               
            </div>
        )
    }
}