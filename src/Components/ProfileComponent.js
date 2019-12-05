import React, {Component} from 'react'
import axios from "axios"

export default class IndexComponent extends Component{
	constructor(){
        super();
        
		this.state ={
			posts:[],
			firstName:"",
			lastName: "",
            username: "",
            email: ""
		}	
    }
    
    componentDidMount() {
		// axios.defaults.withCredentials = true;
		axios.get('http://127.0.0.1:3000/users/')
	      	.then(res => {
	      			// console.log(res.data[0])
	      			this.setState({firstName: res.data[1]});
                    this.setState({lastName: res.data[2]});
                    this.setState({username: res.data[3]});
                    this.setState({email: res.data[5]});
                
	      		});
      	
    }

	render(){
		return(
			<div>
                {this.state.firstName}
                {this.state.lastName}
                {this.state.username}
                {this.state.email}
			</div>

		)
	}
}