const {Client}=require('pg')

const client = new Client("postgres://postgres:286202@localhost:5432/webdb")

module.exports= client;

// client.connect();

// client.query('Select * from public.user', (err, res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     client.end;
// })