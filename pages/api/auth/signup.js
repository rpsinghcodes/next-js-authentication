import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    try {
      const client = new MongoClient(process.env.MONGODB_URL);
      await client.connect();
      console.log("connected to database.");
      const db = client.db("Events");
      const collection = db.collection("credentials");
      const isUserAlreadyExisted = await collection
        .find({ userName: username })
        .toArray();

      if (isUserAlreadyExisted.length > 0) {
        res
          .status(401)
          .json({ message: "User already existed" });
      } else {
        await bcrypt.hash(password, 10, async (err, hash) => {
          const result = await collection.insertOne({
            userName: username,
            password: hash,
          });
          if (result) {
            res
              .status(200)
              .json(
                { success: true },
                { message: "User created succesfully." }
              );
          }
          client.close();
        });
      }

      //closing the connection
    } catch (err) {
      res.status(401).json({ error: "Can't store the user details." });
    }
  }
}
