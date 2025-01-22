import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value); // Update username state as user types
  };

  // Helper function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Generate an array of dots with random properties
  const dots = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}%`, // Random horizontal position
    top: `${Math.random() * 100}%`, // Random vertical position
    animationDelay: `${Math.random() * 5}s`, // Random animation delay
    color: getRandomColor(), // Assign a random color
  }));

  return (
    <>
      <div className="app">
        <div className="background">
          {dots.map((dot) => (
            <div
              key={dot.id}
              className="dot"
              style={{
                left: dot.left,
                top: dot.top,
                animationDelay: dot.animationDelay,
                backgroundColor: dot.color, // Apply the random color
                boxShadow: `0 0 10px 3px ${dot.color}`, // Glow effect matches the color
              }}
            ></div>
          ))}
        </div>
        <h1>musicolor</h1>
        <div className="card"></div>
        <p className="read-the-docs">Type in Spotify username:</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter Spotify username"
            value={username} // Controlled input
            onChange={handleInputChange} // Handle input change
          />
          <p>Username: {username || "No username entered"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
