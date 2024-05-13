
import Wiki from "../Pages/Wiki";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
function Dashboard() {
  const [showWiki, setShowWiki] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  function addtask() {
    setTasks((prev) => [...prev, task]);
    setTask("");
  }

  const handleButtonClick = () => {
    setShowWiki(true);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex flex-row">
      <Sidebar />
      <div className="mx-12 my-12">
        <p className="text-purple-400 text-4xl"> Welcome back , Sujal </p>
        <div>
          {/* <button onClick={handleButtonClick}> Edit </button> */}
          {/* {showWiki && <Wiki />} */}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="px-4 py-2 border-purple-400"
          />
          <button
            className="px-4 py-2 bg-blue-400 text-white"
            onClick={addtask}
          >
            Add Task
          </button>
        </div>
        {tasks.map((item) => (
          <p className="bg-purple-400 my-2 text-white px-4 py-2 rounded-lg">
            <input type="checkbox" name="" id="" />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
