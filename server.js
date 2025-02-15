import express from "express";

const app = express();
const PORT = 3000;

const TASK_LIST = [
  {
    id: "1",
    task: "TASK 1",
    time: "1 hrs",
  },
  {
    id: "1",
    task: "TASK 1",
    time: "1 hrs",
  },
  {
    id: "1",
    task: "TASK 1",
    time: "1 hrs",
  },
];

// START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running on http://localhost:${PORT}`);
});
