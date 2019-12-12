import React,{Component} from 'react'
import NavbarComponent from './NavbarComponent'
import JobListComponent from './JobListComponent'


export default class SeatchQueryComponent extends Component{

    // constructor(props){
    //     super();
    //     this.state ={
    //        searchText: ""
           
    //     }
    // }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/jobs/search/query/' + localStorage.getItem('search'))
	//         .then(res => {
    //             console.log(res)
    //             this.setState(searchText:res.something)

	//         })
	//         .catch(err => {
	//             console.log(err.response);
	//         })
            
    // }
     

    

    render(){
        return(
            <div>
                <NavbarComponent />
                <JobListComponent />
               
                
                {/* {console.log(localStorage.getItem('search'))} */}

            </div>
        )
    }
}