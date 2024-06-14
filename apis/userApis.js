//import db schema
const User = require('../model/User')


//login user
const loginUser = async (req, res) => {
    const u_email = req.body.u_email
    const u_pwd = req.body.u_pwd
    try {
        const user = await User.find({u_email, u_pwd})
        if (user.length === 0) {
            res.json({
                'error': 'Invalid credentials'
            })
        }

        res.json({
            'success' : 'Successfully loggedin user',
        })
    } catch(error) {
        res.json({ 'error': 'Error occured in data fetching' })
    }
}


//get all users
const users_all = async(req,res)=>{
   try{
    const users = await User.find()
    console.log('Data sent')
    res.json(users)
   }
   catch(error){
    console.log('Fetch error :-',error)
    res.json({'message' : error})
   }
}


//create(or)register a user
const insert_user = async (req, res) => {
    const user = new User({
        u_id: req.body.u_id,
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr : req.body.u_addr ,
        u_contact: req.body.u_contact
    })
    try {
        const savedUser  = await user.save()
        console.log('user inserted')
        res.send({
            'success': 'User inserted',
            'user': savedUser
        })
    }
    catch (error) {
        res.status(400).send(error)
    }
}


//update users
const update_user = async (req, res) => {
    let u_id = req.body.u_id
    const user = {
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr : req.body.u_addr ,
        u_contact: req.body.u_contact
    }
    try {
        const updateUser = await User.updateOne(
            { u_id }, user
        )
        if (updateUser.modifiedCount != 0) {
            console.log('User Updated', updateUser)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('User not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}



//delete users
const delete_user = async (req, res) => {
    let u_id = req.body.u_id
    try {
        const deleteduser = await User.deleteOne({ p_id })
        if (deleteduser.deletedCount != 0) {
            console.log('user Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('user Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}


module.exports = {
    loginUser,
    users_all,
    insert_user,
    update_user,
    delete_user
}











