import React, {Component} from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import SearchBarComponent from './SearchBarComponent'

export default class NavigationBar extends Component{

	handlelogout(){
		localStorage.setItem('isLoggedIn',false);
		window.location.href='/'
	}

	render(){
		let dropdown;
		let login;
		let signup;
		if(localStorage.getItem('isLoggedIn') === 'true'){ 
		
			dropdown = <NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="profile">Profile</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="settings">Settings</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item onClick={this.handlelogout} >Log Out</NavDropdown.Item>
				</NavDropdown>
		
			
		}

		else{
			
			login = <Nav.Link href="/login">Login</Nav.Link>
			signup = <Nav.Link href="/signup">Sign Up</Nav.Link>
		}

		return(
			<div>
			<Navbar bg="light" expand="lg">
			<Navbar.Brand className='split' href="/">Job-Helper</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/jobs">Jobs</Nav.Link>
				{dropdown}
				{login}
				{signup}
				</Nav>
				<SearchBarComponent />
			</Navbar.Collapse>
			</Navbar>
			</div>
		)
	}

}