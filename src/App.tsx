import React, {useMemo} from 'react';
import './App.css';
import Home from './pages/Home'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {Col,Row, Container} from 'react-grid-system';
import GlobalFooter from './common/components/organisms/GlobalFooter';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <p>Soy el menu papurris</p>
      </header>
        <Container >
          <Home/>
        </Container>
      <footer>
        <GlobalFooter/>
      </footer>
    </div>  
  );
}


export default App;
