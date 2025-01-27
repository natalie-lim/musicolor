import React from 'react';
import { useRecoilValue } from 'recoil';
import { genreState } from './atoms';
import { Helmet } from "react-helmet";
import "./ColorPalette.css"

function ColorPalette() {
  const genre = useRecoilValue(genreState); // Retrieve the selected genre from Recoil state

  // Define a simple mapping of genres to color palettes
  const genreColors = {
    classical: ['#f5f5dc', '#a9a9a9', '#808080'],
    country: ['#f4a460', '#deb887', '#d2b48c'],
    indie: ['#ff7f50', '#ff6347', '#ff4500'],
    edm: ['#40e0d0', '#48d1cc', '#00ced1'],
    pop: ['#ff69b4', '#ff1493', '#db7093'],
    rock: ['#696969', '#708090', '#2f4f4f'],
    'hip-hop': ['#ffd700', '#daa520', '#b8860b'],
    jazz: ['#8b4513', '#a0522d', '#cd853f'],
  };

  const colors = genreColors[genre] || ['#ffffff', '#cccccc', '#aaaaaa']; // Fallback colors

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
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: color,
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                ></div>
            ))}
        </div>
    </div></>
  );
}

export default ColorPalette;
