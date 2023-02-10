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
      { _id: ObjectId(taskId) },
      {
        $set: {
          status: "Done",
        },
      }
    );

    res.status(200).json({ message: "Task Done" });
    client.close();
  }

  //   delete request
  if (req.method === "DELETE") {
    await collection.deleteOne({ _id: ObjectId(taskId) });

    res.status(200).json({ message: "Task deleted successfully" });
    client.close();
  }
}

export default handler;
