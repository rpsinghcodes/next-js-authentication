import { MongoClient } from "mongodb";
import { sign} from 'jsonwebtoken';
import {  comparePassword } from '../util/auth';



export default async function handler(req, res) {
    if(req.method === 'POST') {
    try {
        const {username, password} = req.body;
        const client = new  MongoClient(process.env.MONGODB_URL);
        await client.connect();
        console.log('connected to database.');
        const db = (await client).db('Events');
        const collection = db.collection('credentials');
        
        const data = await collection.find({userName: username}).toArray();
        if(data.length !== 0) {
            const isValidCredential = await  comparePassword(password, data[0]?.password)
            if(isValidCredential) {
                res.status(200).json({success: true, username: username,   token: sign({email: username},  process.env.SECRET, {expiresIn:"1h"})})
            }
            if(!isValidCredential) {
                res.status(401).json({err: "Please provide valid credentials."})
            }
        } else {
            res.status(401).json({err:"Please provide a valid userName."})
        }   

    }catch(err) {
        console.log(err);
        if(err.type === 'CredentialsSignin') {
            res.status(401).json({error: 'Invalid credentials.'})
        }else {
            res.status(500).json({error: 'Something went wrong.'})
        }
        

    }

}

}