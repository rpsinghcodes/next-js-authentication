import { MongoClient } from "mongodb";
export default async function getCollection(collectionName) {
    try {
        const client = new MongoClient(process.env.MONGODB_URL);
      await client.connect();
      console.log("connected to database.");
      const db = client.db("Events");
      const collection = db.collection(collectionName);
      return collection;
    }catch(err) {
        console.log(err);
    }
}