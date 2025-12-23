import express from'express';
import cors from 'cors';
import jwt from'jsonwebtoken';

const app = express();
app.use(cors());
app.use(express.json());

const ex_username = 'Maninder';
const ex_password = 'password';
const ex_secretKey= 'SecretKey';


//middleware function that will authenticate and assign the user based on token
function Auth(req, res, next){
   const token = req.headers.Authorization?.split(' ')[1]; // get the token from the headers if it exists

   if (!token){
      return res.status(401).json({error:"not authenticated"});
   }

   req.user = token.decode(ex_secretKey).username;
   next();
}


//userdata object
function getUserData(username){

   //ex incoming json from db with user attribute
   let users = {
      Maninder:{
      steps: 10100,
      },
      randomName:{
         steps:200 //lazy ass
      },
   };
   //this is an example
   //ideally you get this from database and assign to these values
   let data = users[username];
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

app.get('/dashboard', Auth(), (req,res)=>{
   username = req.user;
   let userData = getUserData(username);
   res.json(userData);

});



//start a port to listen on

app.listen(process.env.PORT||3000, ()=>{console.log(`server is running on http://localhost:3000`)});