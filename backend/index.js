const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const ex_username = 'Maninder';
const ex_password = 'password';
const ex_secretKey= 'SecretKey';

app.get('/login', (request, response)=>{
   //yet to be implemented
   response.send({header:'hello world'});

});

app.post('/login', (req,res)=>{
   const {username, password} = req.body;
   if (password === ex_password && username === ex_username ){
      const token = jwt.sign({
         username:username},
         ex_secretKey,
         {expiresIn: "1hour" },
      );
      console.log(jwt.decode(token));
      res.send({success:'success!', token: token});

   }else{
      res.send({success:'not good'});
   }

});

//start a port to listen on

app.listen(process.env.PORT||3000, ()=>{console.log(`server is running on http://localhost:3000`)});