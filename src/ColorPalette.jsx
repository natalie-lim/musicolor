import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { genreState } from './atoms';
import { Helmet } from "react-helmet";
import "./ColorPalette.css"
import "./PickGenre.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function ColorPalette() {
    const genre = useRecoilValue(genreState); 
    const navigate = useNavigate();
    const [palette, setPalette] = useState([]); 

    const seedColorList = {
        classical: ['a7b0dd', 'C5AFA0', '94A187'], 
        country: ['8B4513', 'A0522D', 'B22222'],
        indie: ['3c6e71', '404E7C', '91A8A4'],
        edm: ['ff00ff', 'D72483', 'F51AA4'],
        pop: ['FC6DAB', 'F92A82', '01A7C2'],
        rock: ['660000', '34252F', '023436'],
        hiphop: ['FFD700', 'FF5733', 'FFC300'],
        jazz: ['03012C', '634133', 'A4303F'],
    };
    

    const getSeedColor = () => {
        const seedArr = seedColorList[genre]
        return seedArr[Math.floor(Math.random() * seedArr.length)];
    }

    const getRandomScheme = () => {
        const modes = ['monochrome', 'analogic', 'complement', 'triad', 'quad'];
        return modes[Math.floor(Math.random() * modes.length)];
    };


    const getColorPalette = async () => {
        try {
            const mode = getRandomScheme(); // Randomly select a mode
            const count = 5; // Randomly select the number of colors

            const response = await axios.get(
              `https://www.thecolorapi.com/scheme?hex=${getSeedColor()}&mode=${mode}&count=${count}`
            );

            const colors = response.data.colors.map((color) => color.hex.value);
            setPalette(colors); // Update palette state with fetched colors
        } catch (error) {
            console.error("Error fetching color palette:", error);
        }
    };

    useEffect(() => {
        getColorPalette();
    }, []); // Runs on first render and fetches a random palette

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
            <h1>color palette for {genre}</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                {palette.map((color, index) => (
                    <div
                        key={index}
                        style={{
                            width: '80px',
                            height: '80px',
                            backgroundColor: color,
                            borderRadius: '50%',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: '1px solid #ddd',
                        }}
                        title={color}
                    ></div>
                ))}
            </div>
            <div className='column-buttons' style={{ marginTop: '2rem' }}>
                <button
                  className="genre-button"
                  onClick={getColorPalette}
                >
                  regenerate
                </button>
                <button
                  className="genre-button"
                  onClick={() => navigate("/")}
                >
                  home
                </button>
            </div>
        </div>
        </>
    );
}

export default ColorPalette;
