import React, {Component} from 'react'
import axios from "axios"
import NavbarComponent from './NavbarComponent'


export default class SettingsComponent extends Component{
	constructor(){
        super();
        
		this.state ={
            id: "",
			firstName:"",
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

	    const changeableSettings = {
	        email: this.state.email,
	       	password : this.state.password
	    };

	    
		axios.post('http://127.0.0.1:5000/users/update/' + this.state.id, changeableSettings)
	        .then(res => {
                console.log(res)
                window.location.reload(false);
	        })
	        .catch(err => {
	            console.log(err.response);
	        })
	
    }
    
    
    componentDidMount() {
        // axios.defaults.withCredentials = true;
        console.log(localStorage.getItem('isLoggedIn'));
        //Need to change this link so that we get the unique user
		axios.get('http://localhost:5000/users/' )
	      	.then(res => {
                      // console.log(res.data[0]['username'])
                    this.setState({id:res.data[0]['_id']})
	      			this.setState({firstName: res.data[0]['firstName']});
                    this.setState({lastName: res.data[0]['lastName']});
                    this.setState({username: res.data[0]['username']});
                    this.setState({email: res.data[0]['email']});
                    this.setState({password: res.data[0]['password']})
                
	      		});
      	
    }

	render(){
		return(
			<div>
                <NavbarComponent/>
                first Name : {this.state.firstName} <br/>
                last Name : {this.state.lastName}  <br/>
                username : {this.state.username} <br/>
                id : {this.state.id} <br/>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: <input name="email" value={this.state.email} onChange={this.handleChange}/>
                    </label>
                    <button>Save</button>
                </form>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Password: <input name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <button>Save</button>
                </form>

			</div>

		)
	}
}