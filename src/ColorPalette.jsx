import React, { useEffect, useState, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { genreState } from './atoms';
import { Helmet } from "react-helmet";
import "./css/ColorPalette.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ColorPalette() {
    const hasRun = useRef(false);
    const genre = useRecoilValue(genreState); 
    const navigate = useNavigate();
    const [palette, setPalette] = useState([]); 
    const [dots, setDots] = useState([]);

    //I hand-picked three seed numbers for each genre
    const seedColorList = {
        classical: ['a7b0dd', 'C5AFA0', '94A187'], 
        country: ['8B4513', 'A0522D', 'B22222'],
        indie: ['3c6e71', '404E7C', '91A8A4'],
        edm: ['ff00ff', 'D72483', 'F51AA4'],
        pop: ['FC6DAB', 'F92A82', '01A7C2'],
        rock: ['8e1600', '660198', '1F9DC4'],
        hiphop: ['FFD700', 'FF5733', 'FFC300'],
        jazz: ['1d3557', '6a040f', '9e2a2b'],
    };
    
    //this gets a random color from the palette that's been generated. I used this to make the dots
    const getRandomColor = () => {
        if (palette.length > 0) {
            return palette[Math.floor(Math.random() * palette.length)];
        }
        return '#000000';
    };
    
    //this gets a random seedcolor from the ones listed above
    const getSeedColor = () => {
        const seedArr = seedColorList[genre];
        return seedArr[Math.floor(Math.random() * seedArr.length)];
    };

    //this is specific to the api i used 
    const getRandomScheme = () => {
        const modes = ['monochrome', 'analogic', 'complement', 'triad', 'quad'];
        return modes[Math.floor(Math.random() * modes.length)];
    };

    const getColorPalette = async () => {
        try {
            const mode = getRandomScheme();
            const count = 5;

            const response = await axios.get(
              `https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${mode}&count=${count}`
            );

            const colors = response.data.colors.map((color) => color.hex.value);
            setPalette(colors); 
        } catch (error) {
            console.error("Error fetching color palette:", error);
        }
    };

    useEffect(() => {
        if (!hasRun.current) {
            getColorPalette();
            hasRun.current = true;
        } else {
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
        }
    }, [palette]);

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


        <div style={{ textAlign: 'center', padding: '2rem' }}>
            <h1>color palette for {genre} music</h1>
            
            <div className="palette" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            {palette.map((color, index) => (
              <div
                key={index} className='palette-baubles'
                style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: color,
                  borderRadius: '50%',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  textShadow: '0 0 5px rgba(0, 0, 0, 0.5)',
                  textAlign: 'center',
                }}
                title={color}
              >
                {color}
              </div>
            ))}
        </div>
            
            <div className='column-buttons' style={{ marginTop: '2rem' }}>
                <button
                  onClick={getColorPalette}
                >
                  regenerate
                </button>
                <button
                  onClick={() => navigate("/")}
                >
                  home
                </button>
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
        </>
    );
}

export default ColorPalette;
