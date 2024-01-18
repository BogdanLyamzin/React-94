import { useState } from 'react';

import Navbar from './modules/Navbar/Navbar';
import Main from "./modules/Main/Main";
import Footer from './modules/Footer/Footer';

import LangProvider from './context/langContext';

import "./App.css";

function App() {
  return (
    <div className="App">
      <LangProvider>
        <Navbar />
        <Main />
        <Footer />
      </LangProvider>
    </div>
  );
}

export default App;
