import express, { Request, Response } from "express";
import { join } from "path";

const __dirname = join(process.cwd(), "");

const app = express();

app.use(express.static(join(__dirname, "../dist")));

app.get("/", (req: Request, res: Response) => {
    res.sendFile(join(__dirname, "../dist", "index.html"));
});

app.get("/api/some-endpoint", (req: Request, res: Response) => {
    res.json({ message: "This is an example API response" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
