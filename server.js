const express = require('express')
const client = require('./db');
const exp = require('constants');
const port = 6000;
const app = express()

//server receive json data
app.use(express.json())

//routes
app.get('/',(req, res)=>{
    res.sendStatus(200)
})

app.post('/',(req, res)=>{
    const {firstname, lastname} = req.body
    res.status(200).send({
        message: 'YOUR KEYS WERE ' + firstname +' AND ' + lastname
    })
})

app.get('/setup', async(req, res)=>{
    try{
        client.connect();
        let data = await client.query('Select * from public.user')
        res.status(200).send(data.rows)
        client.end;
    }
    catch(err){
        console.log(err)
        res.sendStatus(500)
    }
})

app.listen(port, () => console.log('Server is running on port: '+ port))