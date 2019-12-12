import React, {Component} from 'react'
import JobListComponent from './JobListComponent';
import NavbarComponent from './NavbarComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();

	}
	render(){
		
		return(
			
			<div>
				<NavbarComponent  /> 
				<JobListComponent page="index" />
			</div>

		)
	}
}