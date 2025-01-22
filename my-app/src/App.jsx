import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

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

  // Generate dots on component mount
  useEffect(() => {
    const generateDots = () =>
      Array.from({ length: 50 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        color: getRandomColor(),
        width: `${Math.random() * 200}px`,
        height: `${Math.random() * 200}px`,
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
    <div className="app">
      <div className="content">
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
              width: dot.width,
              height: dot.width,
              animationDelay: dot.animationDelay,
              backgroundColor: dot.color,
              boxShadow: `0 0 10px 3px ${dot.color}`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
