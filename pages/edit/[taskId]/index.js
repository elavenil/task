import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import { toast } from "react-toastify";

const EditItem = (props) => {
  const task = props.data;
  //console("props.data", props.data)
  const router = useRouter();

  // const [items, setItems] = useState(task.items);
  const [resourceName, setresourceName] = useState("");
  const [jobCode, setjobCode] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [createdAt, setcreatedAt] = useState("");
  const [createdEt, setcreatedEt] = useState("");
  const [statusDetails, setstatusDetails] = useState("");

  

  // update task in database
  const updatetask = async (taskId, status) => {
    try {
      const res = await fetch(`/api/edit/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          resourceName: resourceName,
          jobCode: jobCode,
          taskDescription: taskDescription,
          createdAt: createdAt,
          createdEt: createdEt,
          statusDetails: statusDetails,
        }),
      });

      const data = await res.json();
      //console.log("data", data)

      router.push(`/details/${taskId}`);
      toast.success(data.message);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  useEffect(() => {
    setresourceName(task.resourceName);
    setjobCode(task.jobCode);
    settaskDescription(task.settaskDescription);
    setcreatedAt(task.createdAt);
    setcreatedEt(task.createdEt);
    setstatusDetails(task.statusDetails);
  }, [task]);

  return (
    <div className="main__container">
      <div className="new__Details">
        <div className="new__Details-header">
          <h3>Edit</h3>
        </div>
        <div className="new__Details-body">
          <div className="bill__to">
            <div className="form__group">
              <p>Resource Name</p>
              <input
                type="text"
                value={resourceName}
                onChange={(e) => setresourceName(e.target.value)}
              />
            </div>

            <div className="form__group">
              <p>Job code</p>
              <input
                type="text"
                value={jobCode}
                onChange={(e) => setjobCode(e.target.value)}
              />
            </div>

            <div className="form__group">
              <p>Task Description</p>
              <input
                type="text"
                value={taskDescription}
                onChange={(e) => settaskDescription(e.target.value)}
              />
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Start Date</p>
                <input
                  type="date"
                  value={createdAt}
                  onChange={(e) => setcreatedAt(e.target.value)}
                />
              </div>
              <div className="inline__group">
                <p>End Date</p>
                <input
                  type="date"
                  value={createdEt}
                  onChange={(e) => setcreatedEt(e.target.value)}
                />
              </div>
            </div>
            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Status</p>
                <input
                type="text"
                value={statusDetails}
                onChange={(e) => setstatusDetails(e.target.value)}
              />
              </div>
            </div>
          </div>
          
          <div className="new__Details__btns" style={{ justifyContent: "end" }}>
            <div>
              <button
                className="draft__btn"
                onClick={() => router.push(`/details/${task.id}`)}
              >
                Cancel
              </button>

              <button
                className="mark__as-btn"
                onClick={() => updatetask(task.id, task.status)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

  const db = client.db();
  const collection = db.collection("TaskDetails");

  const details = await collection.find({}, { _id: 1 }).toArray();

  return {
    fallback: "blocking",
    paths: details.map((task) => ({
      params: {
        taskId: task._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const { taskId } = context.params;

  const client = await MongoClient.connect(
    `mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

  const db = client.db();
  const collection = db.collection("TaskDetails");
  const task = await collection.findOne({ _id: ObjectId(taskId) });

  return {
    props: {
      data: {
        id: task._id.toString(),
        resourceName: task.resourceName,
        jobCode: task.jobCode,
        taskDescription:task.taskDescription,
        createdAt: task.createdAt,
        createdEt: task.createdEt,
        statusDetails: task.statusDetails,
      },
    },
    revalidate: 1,
  };
}
