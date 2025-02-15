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
  }
});

// ////////////////////////////
// POST
app.post("/api/v1/taskList", (req, res) => {
  const { id, task, time } = req.body;
});

// START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running on http://localhost:${PORT}`);
});
