//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const cartApi = require('../apis/cartApis')


//fetch all records
router.get("/fetch", cartApi.fetch_cart)
//insert a record
router.post("/insert", cartApi.insert_to_cart)
//delete a record
router.delete("/delete", cartApi.delete_from_cart)
//update a record
router.put("/update", cartApi.update_to_cart)


//export router
module.exports = router