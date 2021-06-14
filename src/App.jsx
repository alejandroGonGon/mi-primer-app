/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Titulo from './titulo';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const getPaises = async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name');
        console.log(response.data);
        setPaises(response.data);
      } catch (err) {
        setError('Hubo un eror al traer los pasies');
      }
    };
    getPaises();
  }, []);
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <p>{process.env.REACT_APP_NOT_SECRET_CODE}</p>
        <p>{process.env.NODE_ENV}</p>
        <p>{process.env.BROWSERLIST}</p>
        {paises.map((pais) => (
          <p>{pais.name}</p>
        ))}
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
