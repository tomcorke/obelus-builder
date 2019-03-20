import React, { Component } from 'react';
import logo from './logo.svg';
import STYLES from './app.module.scss';

export class App extends Component {
  render() {
    return (
      <div className={STYLES.app}>
        <header className={STYLES.header}>
          <img src={logo} className={STYLES.logo} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={STYLES.link}
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
}
