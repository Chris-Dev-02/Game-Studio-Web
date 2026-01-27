// import http from "http";        // Usamos `import` para los módulos
// import fs from "fs";
// import path from "path";
// import mime from "mime";
// import { fileURLToPath } from "url";

// // Obtener __dirname con fileURLToPath
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 4000;

// const server = http.createServer((req, res) => {
//     // 1. Primero manejamos las solicitudes de archivos estáticos
//     let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    
//     // Si el archivo solicitado es uno de los archivos estáticos, lo servimos
//     if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
//         const mimeType = mime.getType(filePath) || "application/octet-stream";
//         res.writeHead(200, { "Content-Type": mimeType });
//         fs.createReadStream(filePath).pipe(res);
//     } else {
//         // 2. Si no es un archivo estático, respondemos con el index.html
//         filePath = path.join(__dirname, "public", "index.html");
//         res.writeHead(200, { "Content-Type": "text/html" });
//         fs.createReadStream(filePath).pipe(res);
//     }
// });

// server.listen(port, () => {
//     console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
// });


import http from "http";        // We use `import` for modules
import fs from "fs";
import path from "path";
import mime from "mime";
import { fileURLToPath } from "url";

// Get __dirname using fileURLToPath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = 4000;

const server = http.createServer((req, res) => {
    // 1. First, we handle static file requests
    let filePath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url);
    
    // If the requested file is one of the static files, we serve it
    if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
        const mimeType = mime.getType(filePath) || "application/octet-stream";
        res.writeHead(200, { "Content-Type": mimeType });
        fs.createReadStream(filePath).pipe(res);
    } else {
        // 2. If it is not a static file, we respond with index.html
        filePath = path.join(__dirname, "public", "index.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(filePath).pipe(res);
    }
});

server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}`);
});
