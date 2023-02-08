import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AddNew = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const resourceName = useRef("");
  const jobCode = useRef("");
  const taskDescription = useRef("");
  const createdAt = useRef("");
  const createdEt = useRef("");
  const statusDetails = useRef("");

  
  // submit data to the database
  const createDetails = async (status) => {
    try {
      if (
        resourceName.current.value === "" ||
        jobCode.current.value === "" ||
        taskDescription.current.value === "" ||
        createdAt.current.value === "" ||
        createdEt.current.value === "" ||
        statusDetails.current.value === ""
      ) {
        toast.warning("All fields are required. Must provide valid data");
      } else {
        const res = await fetch("/api/add-new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            resourceName: resourceName.current.value,
            jobCode: jobCode.current.value,
            taskDescription: taskDescription.current.value,
            createdAt: createdAt.current.value,
            createdEt: createdEt.current.value,
            statusDetails: statusDetails.current.value,
          }),
        });
        const data = await res.json();

        toast.success(data.message);
        router.push("/");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="main__container">
      <div className="new__Details">
        <div className="new__Details-header">
          <h3>Task</h3>
        </div>
        <div className="new__Details-body">
          <div className="bill__to">
            <div className="form__group">
              <p>Resource Name</p>
              <input type="text" ref={resourceName} />
            </div>

            <div className="form__group">
              <p>Job code</p>
              <input type="text" ref={jobCode} />
            </div>

            <div className="form__group">
              <p>Task Description</p>
              <input type="text" ref={taskDescription} />
            </div>

            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Start Date</p>
                <input type="date" ref={createdAt} />
              </div>
              <div className="inline__group">
                <p>End Date</p>
                <input type="date" ref={createdEt} />
              </div>
            </div>
            <div className="form__group inline__form-group">
              <div className="inline__group">
                <p>Status</p>
                <input type="text" ref={statusDetails} />
              </div>
            </div>
          </div>
          
          <div className="new__Details__btns">
            <button className="edit__btn" onClick={() => router.push("/")}>
              Discard
            </button>
            <div>
              <button
                className="mark__as-btn"
                onClick={() => createDetails("Done")}
              >
                Send & Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
