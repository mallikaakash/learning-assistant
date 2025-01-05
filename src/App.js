import React, { useState, useRef, useEffect, use } from 'react';
import './App.css';

// function App() {
//   const [images, setImages] = useState([]);
//   const [video, setVideo] = useState(null);
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(stream => {
//         videoRef.current.srcObject = stream;
//         videoRef.current.play();
//       })
//       .catch(err => {
//         console.error("Error accessing camera: ", err);
//       });
//   }, []);

//   const captureImage = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
//     canvas.toBlob(blob => {
//       setImages([...images, blob]);
//     }, 'image/jpeg');
//   };

//   const captureVideo = () => {
//     // Placeholder for capturing video
//     console.log('Video capture not implemented yet');
//   };

//   const handleCapture = async () => {
//     // Placeholder for capturing and sending data to Gemini API
//     console.log('Images:', images);
//     console.log('Video:', video);
//     // Add your Gemini API integration here
//   };

//   return (
//     <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-4xl font-bold mb-8">Visual Learning Assistant</h1>
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <div className="mb-4">
//           <video ref={videoRef} className="w-full rounded-lg" />
//           <canvas ref={canvasRef} className="hidden" width="640" height="480"></canvas>
//         </div>
//         <div className="mb-4">
//           <button
//             onClick={captureImage}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-2"
//           >
//             Capture Image
//           </button>
//           <button
//             onClick={captureVideo}
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//           >
//             Capture Video
//           </button>
//         </div>
//         <button
//           onClick={handleCapture}
//           className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Analyze
//         </button>
//       </div>
//     </div>
//   );
// }
import testGeminiModel from './services/gemini';


function App() {
  const handleTestClick = () => {
    testGeminiModel("What is JavaScript?")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Visual Learning Assistant</h1>
      <p>Placeholder for camera capture</p>
      <p>Placeholder for Gemini API integration</p>
      <button onClick={handleTestClick}>test</button>
    </div>
  );
}

export default App;