/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console *//* eslint-disable react/no-unused-state */
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
      peliculas: [],
    };
  }

  postPelicula = async () => {
    const { nombre, url } = this.state;
    const peli = { name: nombre, img: url };
    try {
      await axios.post('http://localhost/phpMailer-ejercicio/code/apiPeliculas.php/', peli);
    } catch (error) {
      console.log('Error');
    }
  }

  toState = (event) => {
    if (event.target.id === 'tituloPelicula') {
      this.setState({ nombre: event.target.value });
    } else {
      this.setState({ url: event.target.value });
    }
  }

  getPeliculas = async () => {
    const response = await fetch('http://localhost/phpMailer-ejercicio/code/apiPeliculas.php');
    const responseJson = await response.json();
    this.setState({ peliculas: responseJson.data });
  }

  render() {
    return (
      <div className="">
        <div className="formCrearPelicula">
          <input id="tituloPelicula" type="text" placeholder="Ingrese una pelicula" onChange={this.toState} />
          <input id="urlPelicula" type="text" placeholder="Ingrese la url de la imagen" onChange={this.toState} />
          <input id="submit-pelicula" type="button" value="submit" onClick={this.postPelicula} />
        </div>
        <div className="verPelicula">
          /
        </div>
        <div className="onePelicula">
          <input type="text" id="searchPelicula" placeholder="nombre de pelicula" />
          <input type="button" value="buscar" />
          <div className="cardPelicula">
            <div className="imgagePelicula">
              <img src="" alt="" />
            </div>
            <div className="nombrePelicula">
              <h2>Titulo</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Pelicula;
