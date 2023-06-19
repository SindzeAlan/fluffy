import bycryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { sellerModel } from "../db/models/sellerModel.js";

const createUser = async (req,res) => {
    try{

        console.log(req.body)
        const { name,email,phone,password,username } = await req.body;

        console.log(req.body)

        // Hash the password
        const salt = await bycryptjs.genSalt();
        const hashedPassword = await bycryptjs.hash(password,salt);

        console.log(hashedPassword);

        const seller = await sellerModel.create({
            name:name,
            email:email,
            phone:phone,
            seller_password:hashedPassword,
            username:username
        });


        // CREATE TOKEN 
        const token = jwt.sign({ id:seller.id },'checkam-signature',{ expiresIn: 60 * 60 * 24 * 3 })


        res.cookie('jwt',token, { maxAge: 1000 * 60 * 60 * 24 * 3});

        console.log(token)
        console.log("Seller created successfully!");
        console.log(seller.toJSON());

        res.send('Seller created successfully!');
    }
    catch (err) {
        console.log("An error occured",err);
        res.status(400).send("An error occured!");
    }
    
}

const loginUser = (req,res) => {
    console.log(req.body)
    res.send("Logging in/out");
}

export {
    createUser,
    loginUser
}