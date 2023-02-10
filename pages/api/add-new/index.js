import { MongoClient } from "mongodb";

async function handler(req, res) {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

  if (req.method === "POST") {
    const details = {
      resourceName: req.body.resourceName,
      jobCode: req.body.jobCode,
      taskDescription: req.body.taskDescription,
      createdAt: req.body.createdAt,
      createdEt: req.body.createdEt,
      statusDetails: req.body.statusDetails,
    };

    const db = client.db();
    const collection = db.collection("TaskDetails");
    await collection.insertOne(details);

    res.status(200).json({ message: "Task added successfully" });

    client.close();
  }
}

export default handler;
