import React,{Component} from 'react'
import axios from "axios"
import NavbarComponent from './NavbarComponent'


export default class LoginComponent extends Component{

    constructor(props){
        super();
        this.state ={
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

	    const loginCredentials = {
	        email: this.state.email,
	       	password : this.state.password
        };
        
		axios.post('http://127.0.0.1:5000/users/login/', loginCredentials)
	        .then(res => {
                console.log(res)
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('currentUserId',res.data._id);
                // console.log()
                this.forceUpdate();
                // window.location.href='/' //Change this link later

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
                        Email: <input name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <br/>

                    <label>
                        Password: <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <button>Login</button>

                </form>
            </div>
        )
    }
}