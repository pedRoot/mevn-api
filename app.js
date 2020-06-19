import express from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";

import properties from "./config/properties";
import connectDB from "./config/database";

const app = express();

app.use(logger("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", require("./routes/nota.js"));

// Todo este bloque debe estar junto y debajo de las rutas
import history from  "connect-history-api-fallback";
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("port", properties.PORT);
const port = app.get("port");

app.listen(port, () => {
  console.log(properties.SUCCESS(`My app listing on http://localhost:${port}`));
});

connectDB();
