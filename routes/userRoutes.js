//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApi = require('../apis/userApis')
//fetch all records
router.get("/fetch", userApi.users_all)
//insert a record
router.post("/insert", userApi.insert_user)
//update a record
router.put("/update", userApi.update_user)
//delete a record
router.delete("/delete", userApi.delete_user)
//login user
router.post("/login", userApi.loginUser)



//export router
module.exports = router