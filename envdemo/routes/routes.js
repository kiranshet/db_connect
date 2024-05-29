const express = require('express');
const router = express();

const Model = require('../model/model');

const {name, address}  = require('../util/test');

// Post Method
router.post('/post', (req, res)=> {
const data = new Model({
    name: req.body.name,
    age: req.body.age
})

try{
    const dataToSave = data.save();
    return res.status(200).json(dataToSave)

}catch(error){
    return res.status(400).json({message: error.message})
}

//res.send('POST API')
})

// Get All Method
router.get('/getAll', (req, res)=> {
    try{
     return res.status(200).json({message: 'Get All Method',
      name: `${name}`, address: `${address}`});
    } catch(error)
    {
     console.log(error);   
     return res.status(500).json({message: "something went wrong"});
    }
    
})

//Get by ID Method
router.get('/getOne/:id', (req, res)=> {
   res.send(req.params.id)
})

// Update By ID Method
router.patch('/update/:id', (req, res)=> {
    res.send('Update By ID API')
})

// Delete BY ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete By ID API')
})

module.exports = router;