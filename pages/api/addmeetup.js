import { MongoClient } from "mongodb"
import { verify } from "jsonwebtoken";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        // console.log('req.body: ', req.body)
        try{
            const client =  new MongoClient(process.env.MONGODB_URL);
            await client.connect();
            console.log('connected to database.')
            const db = client.db('Events');
            const collection = db.collection('event');
            // const insertResult = await collection.insertOne(req.body);
            // console.log('insertResult: ', insertResult);
            client.close();
            res.status(200).json({message:"Got the data.", data: req.body})

        }catch(err) {
            res.status(400).json({message:"Error in Saving Data."})
        }
    }
    res.status(200).json({message:'Working Fine.'})
}