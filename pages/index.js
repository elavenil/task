import Link from "next/link";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";

export default function Home(props) {
  const router = useRouter();
  const { data } = props;

  const navigatePage = () => router.push("/add-new");

  return (
    <div className="main__container">
      <div className="task__header">
        <div className="task__header-logo">
          <h3>POC</h3>
          <p>Total number of {data.length} Task</p>
        </div>

        <button className="btn" onClick={navigatePage}>
          Add New Task
        </button>
      </div>

      <div className="task__container">
        {/* ======= task item =========== */}
        {data?.map((task) => (
          <Link href={`/details/${task.id}`} passRef key={task.id}>
            <div className="task__item">

              <div>
                <h6 className="task__resourceName">{task.resourceName}</h6>
              </div>
              <div>
                <p className="task__jobCode">{task.jobCode}</p>
              </div>
              <div>
                <p className="task__taskDescription">{task.taskDescription}</p>
              </div>
              <div>
                <p className="task__createdAt">{task.createdAt}</p>
              </div>
              <div>
                <p className="task__createdEt">{task.createdEt}</p>
              </div>
              <div>
                <p className="task__statusDetails">{task.statusDetails}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://admin:OaWoG3FWqJoaOWSE@cluster0.cas2sic.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
  );

  const db = client.db();
  const collection = db.collection("TaskDetails");

  const details = await collection.find({}).toArray();

  return {
    props: {
      data: details.map((task) => {
        return {
        id: task._id.toString(),
        resourceName: task.resourceName,
        jobCode: task.jobCode,
        taskDescription: task.taskDescription,
        createdAt: task.createdAt,
        createdEt: task.createdEt,
        statusDetails: task.statusDetails,
        };
      }),
    },
    revalidate: 1,
  };
}
