import logo from './logo.svg';
import './App.css';
import { Button, ConfigProvider } from 'antd';
import React, { useState } from 'react';
import { getLoginQrCKey } from './api';
function App() {
  // const [theme, setheme] = React.useState({
  //   token: {
  //     colorPrimary: "#ff00ff",
  //   },
  // });
  const fn = () => {
    getLoginQrCKey()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#ff0000' } }} className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl bg-cyan-300 font-bold underline">Hello world!</h1>
        <Button type="primary" onClick={fn}>
          Primary Button
        </Button>
      </header>
    </ConfigProvider>
  );
}

export default App;
