import {express} from 'express';

const app = express;

app.get('/login', (request, response)={
   //yet to be implemented

});

//start a port to listen on

app.listen(process.env.PORT||3000, ()=>{console.log('server is running ')});