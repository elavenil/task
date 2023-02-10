import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
  const { taskId } = req.query;
  const client = await MongoClient.connect(
    `mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );
  const db = client.db();
  const collection = db.collection("TaskDetails");

  if (req.method === "PUT") {
    await collection.updateOne(
      {
        _id: ObjectId(taskId),
      },
      {
      $set: {
      resourceName: req.body.resourceName,
      jobCode: req.body.jobCode,
      taskDescription: req.body.taskDescription,
      createdAt: req.body.createdAt,
      createdEt: req.body.createdEt,
      statusDetails: req.body.statusDetails,
        },
      }
    );

    res.status(200).json({ message: "Task updated successfully" });
  }

  client.close();
}

export default handler;
