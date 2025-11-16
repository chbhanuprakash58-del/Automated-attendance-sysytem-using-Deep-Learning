    const express = require('express');
    const cors = require('cors');
    const { exec } = require('child_process');
    const path = require('path');

    const app = express();
    app.use(cors());
    app.use(express.json());

    const PORT = 5000;

    // Route to capture images by running the Python script
    app.post('/api/capture', (req, res) => {
    const { rollNumber } = req.body;
    const pythonScriptPath = path.join(__dirname, 'capture.py'); // Ensure the capture.py script is in the backend folder

    // Execute the Python script with roll number as an argument
    exec(`python ${pythonScriptPath} ${rollNumber}`, (error, stdout, stderr) => {
        if (error) {
        console.error(`Error executing Python script: ${stderr}`);
        return res.status(500).send("Failed to capture images.");
        }
        console.log(`Python script output: ${stdout}`);
        res.send("Image capture initiated.");
    });
    });

    // Route to download the Excel file
    app.get('/api/download', (req, res) => {
    const filePath = path.join(__dirname, '..', 'updated_cnnattendance.xlsx');

    res.download(filePath, 'updated_cnnattendance.xlsx', (err) => {
        if (err) {
        console.error("File download error:", err);
        res.status(500).send("File download failed.");
        }
    });
    });

    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });
