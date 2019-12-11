const router = require('express').Router();
let User = require('./user.model');

router.route('/signup').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const newUser = new User({
        firstName,
        lastName,
        username, 
        password,
        email
    });

    newUser.save()
    .then(() => res.json('Sucessfully signed up'))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/login').post(async(req, res) => {
    const email = req.body.email;
    const password = req.body.password;
   
    try{
        const user = await User.findOne({email:email});

        if(!user){
            throw new Error({ error: 'Wrong username or password'});
        }
        const isPasswordMatch = password.localeCompare(user.password);

        if (isPasswordMatch !== 0) {
            throw new Error({ error: 'Invalid login credentials' })
        }
        else{
            console.log("Sucessfully logged in");
            return res.json(user)
            // res.status(200).send('success');
        }
    }catch (error) {
        res.status(400).send(error)
    }
});

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').get((req,res) =>{
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error ' + err));
});


router.route('/update/:id').post(async(req, res) =>{
    
    const id = req.params.id;
    const email = req.body.email;
    const password = req.body.password;
    console.log(email);
    console.log(password);

    try{
        const user = await User.findById(id);
        console.log(user.id);
        if(!user){
            throw new Error({ error: 'No User'});
        }
        console.log(user.email);
        console.log(user.password);
        user.email = email;
        user.password = password;
        await user.save();
        res.status(200).send('Update Successful');
       
    }catch (error) {
        res.status(400).send(error)
    }
});


router.route('/delete/:id').delete((req,res) =>{
     User.findByIdAndRemove(req.params.id)
    .then(() => res.json({}))
    .catch(err => res.status(400).json('Error ' + err));
});

// router.route('/forgotpassword').post((req, res) =>{
    
// });

module.exports = router;