import { createMiddleware } from "@mswjs/http-middleware";
import express from "express";
import cors from "cors";
import { handlers } from "./handlers";

const app = express();
const port = 9090; //서버 주소 포트 번호

app.use(
    cors({
        origin: "http://localhost:3000", //본인 프로젝트 포트번호 3000
        optionsSuccessStatus: 200,
        credentials: true,
    })
);
app.use(express.json());
app.use(createMiddleware(...handlers));
app.listen(port, () => console.log(`Mock server is running on port: ${port}`));
