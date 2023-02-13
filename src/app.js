const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const handleRes = require("./utils/handleResponses");
const userRouter = require("./users/users.router");
const conversationRouter = require("./conversations/conversations.router");

const app = express();

app.use(express.json());

db.authenticate() //? Mostrar en consola de manera informativa si la conexion se hizo de manera correcta
  .then(() => {
    console.log("The database has been authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("The database has been updated");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

app.get("/", (req, res) => {
  handleRes.success({
    res,
    status: 200,
    message: "Server initialized successfully",
    data: {
      users: "http://localhost:9000/api/v1/users",
      conversations: "http://localhost:9000/api/v1/conversations",
    },
  });
});

app.use("/api/v1", userRouter);

app.use("/api/v1", conversationRouter);

app.use("*", (req, res) => {
  handleRes.error({
    res,
    status: 404,
    message: "URL not found, please try with: http://localhost:9000/",
  });
});

app.listen(9000, () => {
  console.log("Server started at port 9000");
});
