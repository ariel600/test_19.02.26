import express from "express";
import getCsvR from "./routes/getCsvR.js";
import scoreR from "./routes/scoreR.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/getCsv", getCsvR);
app.use("/score", scoreR);

app.listen(3000, () => {
    console.log("server runing on http://localhost:3000");
});