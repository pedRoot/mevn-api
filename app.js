import express from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(logger("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use("/api", require("./routes"));

// Todo este bloque debe estar junto y debajo de las rutas
import history from  "connect-history-api-fallback";
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("port", process.env.PORT || 8000);
const port = app.get("port");

app.listen(port, () => {
  console.log(`==> My app listing on http://localhost:${port}`);
});

const uri = 'mongodb://localhost:27017/mevn';
const options = {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true};

mongoose.connect(uri, options).then(
  () => {  console.log('==> Conectado a MongoDB')  },
  err => { console.log(`==> Error al conectar con mongo ${err}`);}
);