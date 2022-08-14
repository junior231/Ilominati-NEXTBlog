import { MongoClient } from "mongodb";

// Connection URL
const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clusterName}.jycnc2y.mongodb.net/?retryWrites=true&w=majority`


const client = new MongoClient(connectionString);

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input." });
      return;
    }

    // connect to database
    try {
      await client.connect();
      console.log("Connected successfully to server");
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const dbName = process.env.mongodb_databaseName;
      const db = client.db(dbName);
      const collection = db.collection(process.env.mongodb_collection);

      const result = await collection.insertOne(newMessage);
      newMessage._id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Failed to store data" });
      return;
    }

    // close connection
    client.close();

    res
      .status(201)
      .json({ message: "Succesfully sent message!", data: newMessage });
  }
}

export default handler;
