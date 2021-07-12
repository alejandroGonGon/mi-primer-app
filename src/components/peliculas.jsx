/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import React from 'react';
import axios from 'axios';
import styles from '../App.module.scss';

class Pelicula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      url: '',
    };
  }

  postPelicula = async () => {
    const tittle = document.getElementById('titulo-pelicula');
    const url = document.getElementById('url-pelicula');
    const peli = { name: 'Prueba12', img: 'pruebaa' };
    try {
      await axios.post('http://localhost/phpMailer-ejercicio/code/apiPeliculas.php/', peli)
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        });
    } catch (error) {
      console.log('Error');
    }
  }

  render() {
    return (
      <div className="">
        <div className="formCrearPelicula">
          <input id="titulo-pelicula" type="text" placeholder="Ingrese una pelicula" />
          <input id="url-pelicula" type="text" placeholder="Ingrese la url de la imagen" />
          <input id="submit-pelicula" type="button" value="submit" onClick={this.postPelicula} />
        </div>
      </div>
    );
  }
}
export default Pelicula;
