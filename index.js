import express from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";

const app = express();

app.use(logger("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use("/api", require("./routes"));

// app.get('/', (req, res) => {
//   console.log("Hello world...");
//   res.send("Hello World!!");
// });

// Todo este bloque debe estar junto y debajo de las rutas
import history from  "connect-history-api-fallback";
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 8000);
const port = app.get("port");

app.listen(port, () => {
  console.log(`My app listing on http://localhost:${port}`);
});