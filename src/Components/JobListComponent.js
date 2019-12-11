import React, {Component} from 'react'
import axios from 'axios'

export default class JobListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    } 

    componentDidMount() {
        if (this.props.page === 'index'){
            axios.get('http://localhost:5000/jobs/me')
                .then((event) => { 
                    this.setState({
                        jobs: event.data
                    });
            });
            
        }
     }

    filterJobs(displayedJobs, filter) {
        // do some logic on props based on filter
        
        // if (filter === 'x'){
        //     this.setState({
        //         jobs: this.state.jobs.filter(el => el.jobPostingTitle = filter)
        //     })    
        // }
        
        this.forceUpdate();
    }

    renderTableData() {
        return this.state.jobs.map((job, index) => {
            const { _id, companyName, date, jobPostingTitle } = job 
            return (
                <tr key={index}>
                    <td>{_id}</td>
                    <td>{companyName}</td>
                    <td>{date}</td>
                    <td>{jobPostingTitle}</td>
                </tr>
            )
        })
    }
    render(){
        return(
            <div>
                <table className="table">
                <thead className="thead-dark"/>

                <tbody>
                    {this.renderTableData()}
                </tbody>
                </table>
            </div>
        )
    }
}
