import React, {Component} from 'react'
import axios from 'axios'
import NavbarComponent from './navbarComponent'
import JobListComponent from './jobListComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();
		this.state = {
			jobs: []
		};	
	}

	async componentDidMount(){
		// get all jobs applied to by user
		const response = await axios.get('http://localhost:5000/jobs/me');
		this.state.jobs = response.data.jobs;
		console.log("data: " + response.data);
		console.log("state.jobs: " + this.state.jobs);

		this.setState(response.data);
	}

	render(){
		return(
			<div>
            	<NavbarComponent/>
				<JobListComponent jobs={this.state} />
			</div>

		)
	}
}