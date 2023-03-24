import express from "express"; //For making routes of our app
import bodyParser from "body-parser"; //send posts requests
import mongoose from "mongoose"; //create models for our app
import cors from 'cors';//enable to cross origin requests
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();


app.use(bodyParser.json({limit:"30mb", extended: true})); //send posts images limit size under 30mb
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());
 
app.use('/posts', postRoutes)
app.get('/',(req,res)=>{

res.send('Hello to Memories API')

});

const PORT = process.env.PORT || 5000;  

mongoose.connect(process.env.CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT,() => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

//mongoose.set('useFindAndModify',false);



 