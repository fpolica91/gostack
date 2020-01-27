const express = require("express");
const app = express();
app.use(express.json());

const projects = [
  { title: "Study", tasks: [] },
  { title: "Sleep", tasks: [] },
  { title: "Read", tasks: [] }
];
const request = [];

// GLOBAL MIDDLEWARE
app.use((req, res, next) => {
  console.time("Request");
  request.push(req.method);
  console.log(request);
  console.timeEnd("Request");
  next();
});

function check_null(req, res, next) {
  if (!req.body) return res.json({ message: "body cannot be empty" });
  next();
}

// POST REQUEST
app.post("/create", check_null, (req, res, _) => {
  const { id, title } = req.body;
  projects.push({ id, title });
  res.json(projects);
});

function checkId(req, res, next) {
  const { index } = req.params;
  const proj = projects.find(p => (p.index = index));
  if (!proj) return res.json({ message: "cannot find project" });
  req.proj = proj;
  next();
}

app.put("/update/:index", checkId, (req, res, _) => {
  const { title, taskTitle } = req.body;
  req.proj.title = title;
  taskTitle ? req.proj.tasks.push(taskTitle) : null;
  res.json(req.proj);
});

app.delete("/delete/:index", checkId, (req, res) => {
  const { index } = req.params;
  projects.splice(index, 1);
  return res.json({ message: "Project succesfully deleted" });
});

app.listen(5000);
