    import React, { useState } from 'react';

    function CapturePage() {
    const [rollNumber, setRollNumber] = useState("");

    const handleCapture = async () => {
        try {
        const response = await fetch("http://localhost:5000/api/capture", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ rollNumber }),
        });
        const data = await response.json();
        if (response.ok) {
            console.log("Capture successful", data);
        } else {
            console.error("Capture failed", data);
        }
        } catch (error) {
        console.error("Error capturing:", error);
        }
    };

    return (
        <div className="capture">
        <h2>Capture📷</h2>

        <div className="input-container">
            <p>Note:
                <ol>
                    <li>Enter your roll Number only!!</li>
                    <li>System Takes 500 images</li>
                    <li>Press 'o' to Take images everytime</li>
                    <li>Try to take images in all light angels</li>
                    <li>After 500 images it Automatically goes off</li>
                    <li>To interrupt press 'q'</li>
                    <li>To delete and recapture contact administrator</li>
                    <li>After clicking capture: PLEASE WAIT FOR 30 SECONDS, THE CAMERA WILL TURN ON!</li>
                </ol>
            </p>
        </div>

        <div className="input-container">
            <input
            type="text"
            placeholder="Enter Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            />
            <button onClick={handleCapture}>Capture</button>
        </div>
        </div>
    );
    }

    export default CapturePage;
