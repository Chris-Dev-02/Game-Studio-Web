import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import generalRoutes from "./routes/general.routes.js";


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Add external routes
app.use("/", generalRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
