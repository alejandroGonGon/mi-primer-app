/* eslint-disable linebreak-style */

import React from 'react';
import axios from 'axios';
import { getPeliculas } from '../servicios/Services';

class Pelicula extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      url: '',
      peliculas: [],
    };
  }

  async componentDidMount() {
    const responseJson = await getPeliculas();
    this.setState({ peliculas: responseJson });
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

  renderPeliculas() {
    const { peliculas } = this.state;
    return (
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
  }

  render() {
    return (
      <div className="">
        <div className="formCrearPelicula">
          <input id="tituloPelicula" type="text" placeholder="Ingrese una pelicula" onChange={this.toState} />
          <input id="urlPelicula" type="text" placeholder="Ingrese la url de la imagen" onChange={this.toState} />
          <input id="submit-pelicula" type="button" value="submit" onClick={this.postPelicula} />
        </div>
        <div className="verPeliculas">
          {this.renderPeliculas()}
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
