import { useState, useEffect } from 'react';
import './App.css';

// Importa todas las imágenes de la carpeta 'images'
function importAll(r) {
  return r.keys().map(r);
}

const etrusco_images = importAll(require.context('./images/Etruscos', false, /\.(png|jpe?g|svg)$/));
const ibero_images = importAll(require.context('./images/Íberos', false, /\.(png|jpe?g|svg)$/));
const meso_architecture = importAll(require.context('./images/Mesopotamia/Arquitectura', false, /\.(png|jpe?g|svg)$/));
const meso_artes = importAll(require.context('./images/Mesopotamia/Artes plásticas', false, /\.(png|jpe?g|svg)$/));
const persa_architecture = importAll(require.context('./images/Persia/Arquitectura persa', false, /\.(png|jpe?g|svg)$/));
const persa_artes = importAll(require.context('./images/Persia/Artes plásticas persas', false, /\.(png|jpe?g|svg)$/));

const images = etrusco_images.concat(ibero_images, meso_architecture, meso_artes, persa_architecture, persa_artes);

function App() {

  const [randomImage1, setRandomImage1] = useState(null);
  const [randomImage2, setRandomImage2] = useState(null);
  const [randomImage3, setRandomImage3] = useState(null);
  const [randomImage4, setRandomImage4] = useState(null);

  const getRandomImage = () => {
    const randomIndex1 = Math.floor(Math.random() * images.length);
    setRandomImage1(images[randomIndex1]);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    setRandomImage2(images[randomIndex2]);
    const randomIndex3 = Math.floor(Math.random() * images.length);
    setRandomImage3(images[randomIndex3]);
    const randomIndex4 = Math.floor(Math.random() * images.length);
    setRandomImage4(images[randomIndex4]);
  }

  useEffect(() => {    
    const randomIndex1 = Math.floor(Math.random() * images.length);
    setRandomImage1(images[randomIndex1]);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    setRandomImage2(images[randomIndex2]);
    const randomIndex3 = Math.floor(Math.random() * images.length);
    setRandomImage3(images[randomIndex3]);
    const randomIndex4 = Math.floor(Math.random() * images.length);
    setRandomImage4(images[randomIndex4]);
  }, []);

  return (
    <div className="App">
      <h1> Página de amor para mi culito </h1>
      <div>
        <button onClick={getRandomImage}>Otra ve</button>
      </div>
      <div>
        <img src={randomImage1} alt="randomImage" />
      </div>
      <div>
        <img src={randomImage2} alt="randomImage" />
      </div>
      <div>
        <img src={randomImage3} alt="randomImage" />
      </div>
      <div>
        <img src={randomImage4} alt="randomImage" />
      </div>
    </div>
  );
}

export default App;
