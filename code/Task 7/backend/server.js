import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { router } from './routes/userRoutes.js';
import dotenv from 'dotenv';
import { db } from './db/db.js';
// import { marketPlaceModel } from './db/marketPlaceModel.js';
// import { sellerModel } from './db/sellerModel.js';
// import { productModel } from './db/productsModel.js';

dotenv.config();

const port = process.env.PORT || 4000;

db.authenticate()
.then(() => console.log("Connection successful!"))
.catch((err) => console.log("Error:", err));


// SYNC MODELS
// productModel.sync({ alter:true })
// .then(() => console.log('Table altered successfully'))
// .catch(err => console.log('An error occured!'))

const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.json());
app.use(cookieParser());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get('/',(req,res) => {
    res.send('Server is running!')
})

app.use(router)



app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})