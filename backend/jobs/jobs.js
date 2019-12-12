const router = require('express').Router();
let Job = require('./job.model');

router.route('/').get((req, res) => {
    Job.find()
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const companyName = req.body.companyName;
    const date = Date.parse(req.body.date);
    const jobPostingTitle = req.body.jobPostingTitle;
    const status = req.body.status;

    const newJob = new Job({
        companyName,
        date,
        jobPostingTitle,
        status
    });

    newJob.save()
    .then(() => res.status(200).json('Successfully added job'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/me').get((req, res) => {
    Job.find({})
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err));
   
});

router.route('/search/query/:companyName').get((req,res)=>{
    Job.find({companyName : req.params.companyName})
    .then(jobs => res.json(jobs))
    .catch(err => res.status(400).json('Error ' + err));
});

module.exports = router;