/* eslint-disable linebreak-style */
/* eslint-disable react/no-unused-state */
/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */

import React from 'react';
import styles from '../App.module.scss';

class Anime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: [],
    };
  }

  componentDidMount() {
    fetch('https://kitsu.io/api/edge/anime?filter[categories]=seinen')
      .then((response) => response.json())
      .then((animesResult) => this.setState({ animes: animesResult.data }));
  }

  renderizarLosAnimes() {
    const { animes } = this.state;
    return (
      <div>
        {animes.map((anime) => (
          <>
            <div className={styles.card}>
              <div className={styles.imgcard}>
                <img src={anime.attributes.posterImage.small} alt="" />
              </div>
              <div className={styles.infoanime}>
                <h2>{anime.attributes.canonicalTitle}</h2>
                <p>{anime.attributes.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="container-render">
        {this.renderizarLosAnimes()}
      </div>
    );
  }
}
export default Anime;
