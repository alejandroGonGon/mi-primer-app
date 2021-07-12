/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import axios from 'axios';
import React from 'react';
import styles from '../App.module.scss';

class Pelicula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      url:''
    };
  }

    postPelicula = async () => {
    const tittle = document.getElementById('titulo-pelicula');
    const url = document.getElementById('url-pelicula');

    
    let pelicula = { nombre: tittle, img: url };

       axios.post('http://localhost/phpMailer-ejercicio/code/apiPeliculas.php', pelicula)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  }
  render() {
        return (
      <div className="">
        <div className="formCrearPelicula">
          <input id="titulo-pelicula" type="text" placeholder="Ingrese una pelicula" />
          <input id="url-pelicula" type="text" placeholder="Ingrese la url de la imagen" />
          <input id="submit-pelicula" type="button" value="submit" onClick={this.posPelicula} />
        </div>
      </div>
    );
  }
}
export default Pelicula;
