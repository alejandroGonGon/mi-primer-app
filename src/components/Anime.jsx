/* eslint-disable linebreak-style */

import React from 'react';
import styles from '../App.module.scss';
import { getAnimes } from '../servicios/Services';

class Anime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animes: [],
    };
  }

  async componentDidMount() {
    const responseJson = await getAnimes();
    this.setState({ animes: responseJson.data });
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
