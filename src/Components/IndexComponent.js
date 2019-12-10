import React, {Component} from 'react'
// import NavbarComponent from './NavbarComponent'
import LoginComponent from './LoginComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();
	}
	render(){
		
	// 	let display;
	// 	if (this.state.isLoggedIn === true) {
	// 		display = <NavbarComponent/>
	// 		console.log("In")
	//    } else {
	// 	   	display = <LoginComponent nuts = "false" />
	// 		console.log("Out")

	//    }
		return(
		
			<div>
				<LoginComponent/> 
			</div>

		)
	}
}