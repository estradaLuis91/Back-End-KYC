const express = require('express');
const router = express.Router();
 const Employee = require ('../models/schema.js');
 const User = require ('../models/user.js');
 const cors = require('cors')

const testOrigin = ['http://127.0.0.1:5173'];
 
//Permiso de CORS
router.use(cors({origin:testOrigin}));

router.get('/roots', async (req , resp ) =>{
    const employee  =  await Employee.find();
    resp.json(employee);
    console.log(employee);
});

router.post('/roots',async (req , resp ) =>{
    const employee =  new Employee(req.body);
    await employee.save();
    resp.json('Guardado con éxito')
        console.log(employee);
});

router.put('/roots/:id', async (req , resp ) =>{
    console.log(req.body)
   await Employee.findByIdAndUpdate(req.params.id,req.body);
    resp.json('Actualizado con éxito')
});

router.delete('/roots/:id',async (req , resp ) =>{
    console.log(req.body)
   await  Employee.findByIdAndRemove(req.params.id)
    resp.json('Eliminado con éxito')

});




module.exports = router;