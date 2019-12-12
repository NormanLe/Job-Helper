import React, {Component} from 'react'
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

export default class NavigationBar extends Component{

	constructor(props){
        super();
        this.state ={
           searchText: ""
           
        }
    }
	handlelogout(){
		localStorage.setItem('isLoggedIn',false);
		window.location.href='/'
	}

	handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value 
		})
    }
	handleSearch = event => {
		console.log('d')
		// <Redirect to={{
		// 	pathname: '/search',
		// 	state: this.state.searchText
		// }} />	
		
		// window.location.href='/search' //Change this link later

		localStorage.setItem('search',this.state.searchText)
		window.location.href='/search/'+ this.state.searchText//Change this link later

		
    }
	
	render(){
		// console.log('NavBar ' + localStorage.getItem('isLoggedIn'));
		let dropdown;
		let login;
		let signup;
		if(localStorage.getItem('isLoggedIn') === 'true'){ 
			// console.log('s');
			//then we are logged In
			dropdown = <NavDropdown title="Dropdown" id="basic-nav-dropdown">
					<NavDropdown.Item href="profile">Profile</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item href="settings">Settings</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item onClick={this.handlelogout} >Log Out</NavDropdown.Item>
				</NavDropdown>
		
			
		}

		else{
			// console.log('h')
			//then we are logged out
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
				<Form inline >
					{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
					<input name="searchText" value={this.state.searchText} onChange={this.handleChange}/>
					<Button variant="outline-success" onClick={this.handleSearch}>Search</Button>
				</Form>
			</Navbar.Collapse>
			</Navbar>
			</div>
		)
	}

}