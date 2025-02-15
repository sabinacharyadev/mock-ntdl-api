import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const TASK_LIST = [
  {
    id: "1",
    task: "TASK 1",
    time: "1 hrs",
  },
  {
    id: "2",
    task: "TASK 1",
    time: "1 hrs",
  },
  {
    id: "3",
    task: "TASK 1",
    time: "1 hrs",
  },
];

// //////////////////////
// GET | INDEX
app.get("/api/v1/taskList", (req, res) => {
  res.json({
    message: "Data fetched successfully",
    code: 200,
    status: "Success",
    data: TASK_LIST,
  });
});

// //////////////////////
// GET | SHOW
app.get("/api/v1/taskList/:id", (req, res) => {
  const { id } = req.params;

  const task = TASK_LIST.find((item) => item.id === id);
  if (task) {
    const task = TASK_LIST.find((item) => item.id === id);
    res.json({
      message: "Task found",
      data: task,
    });
  } else {
    res.json({
      message: "Task not found",
      status: "Error",
    });
  }
});

// ////////////////////////////
// POST
app.post("/api/v1/taskList", (req, res) => {
  const { id, task, time } = req.body;
  if (id && task && time) {
    res.json({
      message: "Task added",
      status: "Success",
      code: 200,
      data: [...TASK_LIST, { id, task, time }],
    });
  } else {
    res.json({
      message: "Task not added",
      status: "Error",
    });
  }
});

// ///////////////////////////////
// PUT | UPDATE
app.put("/api/v1/taskList/:id", (req, res) => {
  const { id } = req.params;
  const { task, time } = req.body;
  const taskItem = TASK_LIST.find((item) => item.id === id);
  if (taskItem) {
    const updatedTaskList = TASK_LIST.filter((item) => item.id !== id);
    res.json({
      message: "Task Updated",
      status: "Success",
      data: [...updatedTaskList, { id, task, time }],
    });
  } else {
    res.json({
      message: "Task not updated",
      status: "Error",
    });
  }
});

// /////////////////////////////
// DELETE
app.delete("/api/v1/taskList/:id", (req, res) => {
  const { id } = req.params;
  const taskList = TASK_LIST.find((item) => item.id === id);
  if (taskList) {
    const updatedTaskList = TASK_LIST.filter((item) => item.id !== id);
    res.json({
      message: "Task deleted",
      status: "Success",
      data: updatedTaskList,
    });
  } else {
    res.json({
      message: "Task not deleted",
      status: "Error",
    });
  }
});

// START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running on http://localhost:${PORT}`);
});
