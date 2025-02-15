import express from "express";

const app = express();
const PORT = 3000;

// START THE SERVER
app.listen(PORT, (error) => {
  error
    ? console.log(error.message)
    : console.log(`Server running on http://localhost:${PORT}`);
});
