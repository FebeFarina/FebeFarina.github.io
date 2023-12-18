import { useState, useEffect } from 'react';
import './App.css';

// Importa todas las imágenes de la carpeta 'images'
function importAll(r, type) {
  return r.keys().map(key => ({ type, image: r(key) }));
}

const etrusco_images = importAll(require.context('./images/Etruscos', false, /\.(png|jpe?g|svg)$/), 'Etrusco');
const ibero_images = importAll(require.context('./images/Íberos', false, /\.(png|jpe?g|svg)$/), 'Íbero');
const meso_architecture = importAll(require.context('./images/Mesopotamia/Arquitectura', false, /\.(png|jpe?g|svg)$/), 'Mesopotamia');
const meso_artes = importAll(require.context('./images/Mesopotamia/Artes plásticas', false, /\.(png|jpe?g|svg)$/), 'Mesopotamia');
const persa_architecture = importAll(require.context('./images/Persia/Arquitectura persa', false, /\.(png|jpe?g|svg)$/), 'Persia');
const persa_artes = importAll(require.context('./images/Persia/Artes plásticas persas', false, /\.(png|jpe?g|svg)$/), 'Persia');

const images = etrusco_images.concat(ibero_images, meso_architecture, meso_artes, persa_architecture, persa_artes);

function App() {

  const [randomImage1, setRandomImage1] = useState(null);
  const [randomImage2, setRandomImage2] = useState(null);
  const [randomImage3, setRandomImage3] = useState(null);
  const [randomImage4, setRandomImage4] = useState(null);
  const [imageType1, setImageType1] = useState(null);
  const [imageType2, setImageType2] = useState(null);
  const [imageType3, setImageType3] = useState(null);
  const [imageType4, setImageType4] = useState(null);

  const getRandomImage = () => {
    const randomIndex1 = Math.floor(Math.random() * images.length);
    setRandomImage1(images[randomIndex1].image);
    setImageType1(images[randomIndex1].type);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    setRandomImage2(images[randomIndex2].image);
    setImageType2(images[randomIndex2].type);
    const randomIndex3 = Math.floor(Math.random() * images.length);
    setRandomImage3(images[randomIndex3].image);
    setImageType3(images[randomIndex3].type);
    const randomIndex4 = Math.floor(Math.random() * images.length);
    setRandomImage4(images[randomIndex4].image);
    setImageType4(images[randomIndex4].type);
  }

  useEffect(() => {    
    const randomIndex1 = Math.floor(Math.random() * images.length);
    setRandomImage1(images[randomIndex1].image);
    setImageType1(images[randomIndex1].type);
    const randomIndex2 = Math.floor(Math.random() * images.length);
    setRandomImage2(images[randomIndex2].image);
    setImageType2(images[randomIndex2].type);
    const randomIndex3 = Math.floor(Math.random() * images.length);
    setRandomImage3(images[randomIndex3].image);
    setImageType3(images[randomIndex3].type);
    const randomIndex4 = Math.floor(Math.random() * images.length);
    setRandomImage4(images[randomIndex4].image);
    setImageType4(images[randomIndex4].type);
  }, []);

  return (
    <div className="App">
      <h1> Página de amor para mi culito </h1>
      <div>
        <button onClick={getRandomImage}>Otra ve</button>
      </div>
      <div>
        <img src={randomImage1} alt="randomImage" />
        <p> {imageType1} </p>
      </div>
      <div>
        <img src={randomImage2} alt="randomImage" />
        <p> {imageType2} </p>
      </div>
      <div>
        <img src={randomImage3} alt="randomImage" />
        <p> {imageType3} </p>
      </div>
      <div>
        <img src={randomImage4} alt="randomImage" />
        <p> {imageType4} </p>
      </div>
    </div>
  );
}

export default App;
