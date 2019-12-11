import React, {Component} from 'react'
import NavbarComponent from './navbarComponent'
import JobListComponent from './jobListComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();
		this.state = {
			jobs: []
		};	
	}

	render(){
		return(
			<div>
            	<NavbarComponent/>
				<JobListComponent page="index" />
			</div>

		)
	}
}