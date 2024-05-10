import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import fileUpload from "express-fileupload";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static("public"));

app.get('/', async (req, res) => {
    res.send({
      status: 'success',
      message: 'Traveloka Hotel Ranking API',
    });
});

app.use('/registrants', router)

app.use((req, res, next) => {
  next(error.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message,
  });
});

app.listen(port, () => console.log(`Server started on port ${port}`));