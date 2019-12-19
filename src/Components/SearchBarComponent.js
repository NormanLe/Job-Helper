import React, {Component} from 'react'
import {Form,Button} from 'react-bootstrap'

export default class SearchBarComponent extends Component{

	constructor(props){
        super();
        this.state ={
           searchText: ""
           
        }
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
		
		window.location.href='/search/'+ this.state.searchText

		
    }
	
	render(){
	
		return(
			<div>
			
				<Form inline >
					{/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
					<input name="searchText" value={this.state.searchText} onChange={this.handleChange}/>
					<Button  variant="outline-success" onClick = {this.handleSearch} >Search</Button>
				</Form>
			
			</div>
		)
	}

}