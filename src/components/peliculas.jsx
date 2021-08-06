/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */

import React from 'react';
import axios from 'axios';
import { getPeliculas } from '../servicios/Services';

class Pelicula extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idPel: '',
      nombre: '',
      url: '',
      peliculas: [],

    };
  }

  async componentDidMount() {
    const responseJson = await getPeliculas();
    this.setState({ peliculas: responseJson.data });
  }

  postPelicula = async () => {
    const { nombre, url } = this.state;
    const peli = { name: nombre, img: url };
    try {
      await axios.post('http://anima-api.localhost/api/pelicula', peli);
    } catch (error) {
      // setError
    }
  }

  toState = (event) => {
    if (event.target.id === 'tituloPelicula') {
      this.setState({ nombre: event.target.value });
    } else {
      this.setState({ url: event.target.value });
    }
  }

  renderPeliculas = () => {
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

    getPelicula = async (event) => {
      const e = event.target.value;
      this.setState({ idPel: event.target.value });
    };

    renderUnaPeli = () => {
      const { peliculas, idPel } = this.state;
      if (idPel > 0) {
        const pelicula = peliculas.filter(({ idPelicula }) => idPelicula === parseFloat(idPel));
        return (
          <div className="cardPelicula">
            <div className="imgagePelicula">
              <img src={pelicula[0].img} alt="" />
            </div>
            <div className="nombrePelicula">
              <h2>{pelicula.nombre}</h2>
            </div>
          </div>
        );
      }
      return console.log('a');
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
            { this.renderPeliculas() }
          </div>
          <div className="onePelicula">
            <input type="text" id="searchPelicula" placeholder="id de pelicula" onChange={this.getPelicula} />
            <input type="button" value="buscar" />
            {this.renderUnaPeli()}
          </div>
        </div>
      );
    }
}
export default Pelicula;
