import React, { useRef } from "react";
import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import { toast } from "react-toastify";

const TaskDetails = (props) => {
  const router = useRouter();
  const { data } = props;
  const modalRef = useRef(null);

  const goBack = () => router.push("/");

  // update task status in database
  const updateStatus = async (taskId) => {
    const res = await fetch(`/api/details/${taskId}`, {
      method: "PUT",
    });
    const data = await res.json();
  };

  // delete task from the database
  const deleteTask = async (taskId) => {
    try {
      const res = await fetch(`/api/task/${taskId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      toast.success(data.message);
      router.push("/");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  // open modal
  const modalToggle = () => modalRef.current.classList.toggle("showModal");

  return (
    <div className="main__container">
      <div className="back__btn">
        <h6 onClick={goBack}> Go Back</h6>
      </div>

      {/* ======= task details header ========== */}
      <div className="task__details-header">
        <div className="details__btns">
          <button
            className="edit__btn"
            onClick={() => router.push(`/edit/${data.id}`)}
          >
            Edit
          </button>

          {/* ========= confirm deletion modal start ========== */}
          <div className="delete__modal" ref={modalRef}>
            <div className="modal">
              <h3>Confirm Deletion</h3>
              <p>
                Are you sure you want to delete the Task details #
                {data.id.substr(0, 6).toUpperCase()}? This action cannon be
                undone.
              </p>

              <div className="details__btns modal__btns">
                <button className="edit__btn" onClick={modalToggle}>
                  Cancel
                </button>

                <button
                  className="delete__btn"
                  onClick={() => deleteTask(data.id)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>

          {/* ======== confirm deletion modal end */}

          <button className="delete__btn" onClick={modalToggle}>
            Delete
          </button>
        </div>
      </div>
      <div className="task__details">
        <div className="details__box">

          <div className="task__client-address">
            <p>Details</p>
            <h4><strong>Resource Name:</strong> {data.resourceName}</h4>
            <p><strong>Job code:</strong> {data.jobCode}</p>
            <p><strong>Task Description:</strong> {data.taskDescription}</p>
            <p><strong>Start Date:</strong> {data.createdAt}</p>
            <p><strong>End Date:</strong> {data.createdEt}</p>
            <p><strong>Status:</strong> {data.statusDetails}</p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;

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
        taskDescription: task.taskDescription,
        createdAt: task.createdAt,
        createdEt: task.createdEt,
        statusDetails: task.statusDetails,
      },
    },
    revalidate: 1,
  };
}
