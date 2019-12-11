import React, {Component} from 'react'

import NavbarComponent from './NavbarComponent'
import LoginComponent from './LoginComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();
		this.state = {
			jobs: [],
			isLoggedin: false
		}

		
	}
	// componentDidMount(){
	// 	this.setState({isLoggedIn: localStorage.getItem('isLoggedIn')});
	// 	console.log(this.state.isLoggedin);
	// }

	render(){
		
		let display;
		if (this.state.isLoggedIn === true) {
			display = <NavbarComponent/>
			console.log("In")
	   } else {
		   	display = <LoginComponent nuts = "false" />
			console.log("Out")

	   }
		return(
		
			<div>
            	<NavbarComponent/>
				<JobListComponent page="index" />
				{display}  
			</div>

		)
	}
}