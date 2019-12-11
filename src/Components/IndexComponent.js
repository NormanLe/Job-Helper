import React, {Component} from 'react'
import LoginComponent from './LoginComponent';
import JobListComponent from './JobListComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();

	}
	render(){
		
		return(
			
			<div>
				<LoginComponent  /> 
				<JobListComponent page="index" />
			</div>

		)
	}
}