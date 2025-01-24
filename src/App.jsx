import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  const [username, setUsername] = useState(""); // Controlled input
  const [dots, setDots] = useState([]); // State to store the dots array
  const navigate = useNavigate(); // React Router navigation hook

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 50 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        color: getRandomColor(),
        diameter: `${Math.random() * 200}px`,
      }));
    setDots(generateDots());
  }, []);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEnterUsername = (event) => {
    if (event.key === "Enter") {
      if (username.trim()) {
        navigate("/palette");
      } else {
        alert("Please enter a username.");
      }
    }
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="app">
      <div className="rectangle">
          <svg
            width="60vw"
            height="80vh"
            className="background-rectangle"
            style={{ position: "absolute", top: "10vh", left: "38vh", zIndex: 0 }}
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="red" />
                <stop offset="100%" stopColor="blue" />
              </linearGradient>
            </defs>
            <rect fill="url(#gradient)" blur= "radius"/>
          </svg>
        </div>

        <div className="content" style={{ position: "relative", zIndex: 1 }}>
          <h1 className="title">musicolor</h1>
          <div className="card"></div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Enter Spotify username"
              value={username}
              onChange={handleInputChange}
              onKeyDown={handleEnterUsername}
            />
          </div>
        </div>
        <div className="background">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="dot"
              style={{
                left: dot.left,
                top: dot.top,
                width: dot.diameter,
                height: dot.diameter,
                animationDelay: dot.animationDelay,
                backgroundColor: dot.color,
                boxShadow: `0 0 10px 3px ${dot.color}`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;