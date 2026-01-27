// // First version
// const http = require("http");
// const fs = require("fs");
// const path = require("path");
// const mime = require("mime");  // We use 'mime' to get the appropriate content type for files

// const port = 3000;

// const server = http.createServer((req, res) => {
//     // Serve static files
//     let filePath = path.join(__dirname, "src", "public", req.url === "/" ? "index.html" : req.url);

//     // Make sure the file path is valid
//     fs.stat(filePath, (err, stats) => {
//         if (err || !stats.isFile()) {
//             // If the file does not exist, return a 404 error
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }

//         // Get the MIME type of the file
//         const mimeType = mime.getType(filePath) || "application/octet-stream";

//         // Set response headers
//         res.writeHead(200, { "Content-Type": mimeType });

//         // Read the file and send it to the browser
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Second version
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const port = 3000;

// const server = http.createServer(async (req, res) => {
//     // Dynamic import
//     const mime = (await import("mime")).default;

//     let filePath = path.join(__dirname, "src", "public", req.url === "/" ? "index.html" : req.url);

//     // Make sure the file path is valid
//     fs.stat(filePath, (err, stats) => {
//         if (err || !stats.isFile()) {
//             // If the file does not exist, return a 404 error
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }

//         // Get the MIME type of the file
//         const mimeType = mime.getType(filePath) || "application/octet-stream";

//         // Set response headers
//         res.writeHead(200, { "Content-Type": mimeType });

//         // Read the file and send it to the browser
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Third version
// import http from "http";        // We use `import` for modules
// import fs from "fs";
// import path from "path";
// import mime from "mime";        // We use `import` to import the 'mime' package

// const port = 3000;

// const server = http.createServer((req, res) => {
//     // Serve static files
//     let filePath = path.join(__dirname, "src", "public", req.url === "/" ? "index.html" : req.url);

//     // Make sure the file path is valid
//     fs.stat(filePath, (err, stats) => {
//         if (err || !stats.isFile()) {
//             // If the file does not exist, return a 404 error
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }

//         // Get the MIME type of the file
//         const mimeType = mime.getType(filePath) || "application/octet-stream";

//         // Set response headers
//         res.writeHead(200, { "Content-Type": mimeType });

//         // Read the file and send it to the browser
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });

// // Fourth version
// import http from "http";        // We use `import` for modules
// import fs from "fs";
// import path from "path";
// import mime from "mime";        // We use `import` to import the 'mime' package
// import { fileURLToPath } from "url";  // We need this to get __dirname in ESM

// // Get __dirname using fileURLToPath
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 4000;

// const server = http.createServer((req, res) => {
//     // Serve static files
//     let filePath = path.join(__dirname, "src", "public", req.url === "/" ? "index.html" : req.url);

//     // Make sure the file path is valid
//     fs.stat(filePath, (err, stats) => {
//         if (err || !stats.isFile()) {
//             // If the file does not exist, return a 404 error
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }

//         // Get the MIME type of the file
//         const mimeType = mime.getType(filePath) || "application/octet-stream";

//         // Set response headers
//         res.writeHead(200, { "Content-Type": mimeType });

//         // Read the file and send it to the browser
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

// server.listen(port, () => {
//     console.log(`Server running at http://127.0.0.1:${port}`);
// });

// // Fifth version
// import http from "http";
// import fs from "fs";
// import path from "path";
// import mime from "mime";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 4000;

// const server = http.createServer((req, res) => {
//     // Make sure the request is for static files
//     let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    
//     // Get the MIME type of the file
//     const mimeType = mime.getType(filePath) || "application/octet-stream";
    
//     // Check if the file exists
//     fs.stat(filePath, (err, stats) => {
//         if (err || !stats.isFile()) {
//             // If the file does not exist, respond with 404
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Not Found");
//             return;
//         }

//         // Respond with the requested file
//         res.writeHead(200, { "Content-Type": mimeType });
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

// server.listen(port, () => {
//     console.log(`Server running at http://127.0.0.1:${port}`);
// });

// // Sixth version
// import http from "http";        // We use `import` for modules
// import fs from "fs";
// import path from "path";
// import mime from "mime";
// import { fileURLToPath } from "url";

// // Get __dirname using fileURLToPath
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 4000;

// const server = http.createServer((req, res) => {
//     // 1. First, handle static file requests
//     let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    
//     // If the requested file is a static file, serve it
//     if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
//         const mimeType = mime.getType(filePath) || "application/octet-stream";
//         res.writeHead(200, { "Content-Type": mimeType });
//         fs.createReadStream(filePath).pipe(res);
//     } else {
//         // 2. If it is not a static file, respond with index.html
//         filePath = path.join(__dirname, "public", "index.html");
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.createReadStream(filePath).pipe(res);
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at http://127.0.0.1:${port}`);
// });
