const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Jobs Table: ID, company name, date posted, title, status of application - YOE
const jobSchema = new Schema({
    companyName: {type: String},
    date: {type: Date},
    jobPostingTitle: {type: String},
    status: {type: String},
}, {
    timestamps: true
});

const Job = mongoose.model('User', jobSchema);
module.exports = Job;