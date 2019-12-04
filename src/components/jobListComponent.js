import React, {Component} from 'react'
import axios from 'axios'

export class JobListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobs: []
        };
    } 

    filterJobs(displayedJobs, filter) {
        // do some logic on props based on filter
        
        if (filter == 'x'){
            this.setState({
                jobs: this.state.jobs.filter(el => el.jobPostingTitle = filter)
            })    
        }
        this.state.jobs = displayedJobs;
        
        this.forceUpdate();
    }

    renderTableData() {
        return this.props['jobs'].map((job, index) => {
            const { id, companyName, date, jobPostingTitle } = job 
            return (
                <tr key={id}>
                    <td>{id}</td>
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
                <table class="table">
                <thead class="thead-dark">
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </thead>
                </table>
            </div>
        )
    }
}
