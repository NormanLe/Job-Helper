import React, {Component} from 'react'
// import NavbarComponent from './NavbarComponent'

import LoginComponent from './LoginComponent';

export default class IndexComponent extends Component{
	constructor(props){
		super();

	}
	render(){
		
		return(
			
			<div>
				<LoginComponent  /> 
			</div>

		)
	}
}