/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../App.module.scss';
import { getAnimes } from '../servicios/Services';

function Anime() {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    const getAnimes = async () => {
      try {
        const responseJson = await axios.get(getAnimes());
        setAnimes(responseJson.data);
      } catch (error) {
        // setError('Error')
      }
    };
    getAnimes();
  }, []);
  const renderizarLosAnimes = () => (
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
  return (
    <div className="container-render">
      {renderizarLosAnimes()}
    </div>
  );
}
export default Anime;
