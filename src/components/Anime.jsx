/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import styles from '../App.module.scss';
import { getAnimes } from '../servicios/Services';

function Anime() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const bringAnimes = async () => {
      try {
        setLoading(true);
        const responseJson = await getAnimes();
        setAnimes(responseJson.data);
      } catch (error) {
        // setError('Error')
      } finally {
        setLoading(false);
      }
    };
    bringAnimes();
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
  if (loading) return <p>loading animes...</p>;
  return (
    <div className="container-render">
      { renderizarLosAnimes() }
    </div>
  );
}
export default Anime;
