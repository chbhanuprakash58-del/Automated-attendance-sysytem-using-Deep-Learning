import React from 'react';
import { useNavigate } from 'react-router-dom';

    function Home() {
    const navigate = useNavigate();

    const handleDownload = () => {
        window.location.href = 'http://localhost:5000/api/download';
    };

    const handleCapture = () => {
        navigate('/home/capture'); // React Router for navigation
    };

    return (
        <div className="home">
        <h2><center>Hello, Select an option</center></h2>
        <div className="home-buttons">
        <button onClick={handleCapture}>Capture📷</button>
        <button onClick={handleDownload}>Download📩</button>
        </div>
        <p>Note: The "Download" option lets you download the attendance sheet up to the current time.</p>
        </div>
    );
    }

    export default Home;