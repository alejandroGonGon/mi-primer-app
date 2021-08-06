/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPeliculas } from '../servicios/Services';

function Pelicula() {
  const [peliculas, setPeliculas] = useState([]);
  const [idPel, setIdPel] = useState('');
  const [nombre, setNombrePeli] = useState('');
  const [url, setUrlPeli] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const bringPeliculas = async () => {
      try {
        const responseJson = await getPeliculas();
        setPeliculas(responseJson.data);
      } catch (error) {
        // setError
      } finally {
        setLoading(false);
      }
    };
    bringPeliculas();
  }, []);

  const toStateNombre = (event) => {
    setNombrePeli(event.target.value);
  };

  const toStateUrl = (event) => {
    setUrlPeli(event.target.value);
  };

  const postPelicula = async () => {
    const peli = { nombre: `${nombre}`, img: url };
    try {
      await axios.post('http://anima-api.localhost/api/pelicula', peli);
    } catch (error) {
      // setError
    }
  };

  const renderPeliculas = () => (
    <div>
      {peliculas.map((pelicula) => (
        <>
          <div className="cardPelicula">
            <div className="imgagePelicula">
              <img src={pelicula.img} alt="" />
            </div>
            <div className="nombrePelicula">
              <h2>{pelicula.nombre}</h2>
            </div>
          </div>
        </>
      ))}
    </div>
  );

  const getPelicula = async (event) => {
    const e = event.target.value;
    setIdPel(e);
  };

  const renderUnaPeli = () => {
    if (idPel > 0) {
      const pelicula = peliculas.filter(({ idPelicula }) => idPelicula === parseFloat(idPel));
      return (
        <div className="cardPelicula">
          <div className="imgagePelicula">
            <img src={pelicula[0].img} alt="" />
          </div>
          <div className="nombrePelicula">
            <h2>{pelicula[0].nombre}</h2>
          </div>
        </div>
      );
    }
    return console.log('Todavia Nada');
  };
  if (loading) return <p>loading peliculas...</p>;
  return (
    <div className="">
      <div className="formCrearPelicula">
        <input id="tituloPelicula" type="text" placeholder="Ingrese una pelicula" onChange={toStateNombre} />
        <input id="urlPelicula" type="text" placeholder="Ingrese la url de la imagen" onChange={toStateUrl} />
        <input id="submit-pelicula" type="button" value="submit" onClick={postPelicula} />
      </div>
      <div className="verPeliculas">
        {renderPeliculas()}
      </div>
      <div className="onePelicula">
        <input type="text" id="searchPelicula" placeholder="id de pelicula" onChange={getPelicula} />
        {renderUnaPeli()}
      </div>
    </div>
  );
}

export default Pelicula;
