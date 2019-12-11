import React,{Component} from 'react'
import axios from "axios"
import NavbarComponent from './NavbarComponent'


export default class SignUpComponent extends Component{

    constructor(props){
        super();
        this.state ={
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: ""
           
        }
    }

    
    handleChange = event => {
		this.setState({
			[event.target.name]: event.target.value 
		})
    }
    
    handleSubmit = event => {
		event.preventDefault();

	    const signUpCredentials = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
	        email: this.state.email,
            password : this.state.password

	    };

	    
		axios.post('http://127.0.0.1:5000/users/signup/', signUpCredentials)
	        .then(res => {
                console.log("Registration success")
                
                window.location.href='/login' 

	        })
	        .catch(err => {
	            console.log(err.response);
	        })
	
    }

    render(){
        return(
            <div>
                <NavbarComponent />
                
                <form onSubmit={this.handleSubmit}>

                    <label>
                        First Name: <input name="firstName" value={this.state.firstName} onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <label>
                        Last Name: <input name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <label>
                        Username: <input name="username" value={this.state.username} onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <label>
                        Email: <input name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <label>
                        Password: <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <button>Sign Up</button>

                </form>
            </div>
        )
    }
}