import {  ObjectId } from "mongodb";
import getCollection from "./mongodb/getCollection";
export default async function handler(req, res) {
  
  if(req.method === 'GET') {
    try {
      const collection = getCollection('event');
      let data ;
      if(req.query.id) {   
        const ids = await req.query.id;
        const id = new ObjectId(ids);
        data = await collection.find({'_id' : id}).toArray();
      } else {
        data =  await collection.find({}).toArray();
      }
      client.close();
      res.status(200).json({ meetups: data });
      
    } catch (err) {
      res.status(503).json({ message: "Can't get the meetups detail." });

  }

}
  
}
