import React, {useMemo} from 'react';
import './App.css';
import Home from './pages/Home'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {Col,Row, Container} from 'react-grid-system';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      </header>
        <Container >
          <Home/>
        </Container>
      <footer>
       <p>Test Marvel por Alejandro Zú</p>
      </footer>
    </div>  
  );
}


export default App;
