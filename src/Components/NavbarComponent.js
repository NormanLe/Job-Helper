import React,{Component} from 'react'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'



export default class NavigationBar extends Component{

	handlelogout(){
		localStorage.setItem('isLoggedIn',false);
		window.location.href='/'
	}
	
	render(){
		
		return(
			<Navbar bg="light" expand="lg">
			<Navbar.Brand className='split' href="/">Job-Helper</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
				<Nav.Link href="/">Home</Nav.Link>
				<Nav.Link href="/jobs">Jobs</Nav.Link>
				<NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="profile">Profile</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="settings">Settings</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item onClick={this.handlelogout} >Log Out</NavDropdown.Item>
				</NavDropdown>
				</Nav>
				<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-success">Search</Button>
				</Form>
			</Navbar.Collapse>
			</Navbar>
		)
	}

}