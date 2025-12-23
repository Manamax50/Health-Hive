import express from'express';
import cors from 'cors';
import jwt from'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const ex_username = 'Maninder';
const ex_password = 'password';
const ex_secretKey= 'SecretKey';


//userdata object
function getUserData(){
   //this is an example
   //ideally you get this from database and assign to these values
   let data = {username: ex_username, steps: 10000}
   return data
}
//login endpoints
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
      res.send({status:'success!', token: token});

   }else{
      res.send({status:'not good'});
   }

});


//dashboard endpoints

app.get('/dashboard', (req,res)=>{
   attachedToken = req.headers(Authorization);


   if (attachedToken = token){
      
      res.json(getUserData());
   }
});



//start a port to listen on

app.listen(process.env.PORT||3000, ()=>{console.log(`server is running on http://localhost:3000`)});