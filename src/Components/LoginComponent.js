import React,{Component} from 'react'
import axios from "axios"
import NavbarComponent from './NavbarComponent'


export default class LoginComponent extends Component{

    constructor(props){
        super();
        this.state ={
            email: "",
            password: "",
            isLoggedIn: false
        }
    }

    // componentDidMount(){
	// 	this.setState({isLoggedIn: true});
    // }
    
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
                console.log("login success")
                // console.log(this.state.isLoggedIn)
                localStorage.setItem('isLoggedIn', true);
                this.setState({isLoggedIn: true});
                // console.log(this.state.isLoggedIn)

                // window.location.href='/'
                // this.forceUpdate()

	        })
	        .catch(err => {
	            console.log(err.response);
	        })
	
    }

    callbackFunction = event => {
        this.setState({isLoggedIn: this.state.isLoggedIn})
    }

    render(){
        console.log(this.state.isLoggedIn)
        return(
            <div>
                <NavbarComponent isLoggedIn={this.state.isLoggedIn}/>
                
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