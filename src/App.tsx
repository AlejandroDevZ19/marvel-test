import React, {useMemo} from 'react';
import './App.css';
import Home from './pages/Home'
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import {Col,Row, Container} from 'react-grid-system';
import GlobalFooter from './common/components/organisms/GlobalFooter';
import styled from '@emotion/styled/';

const AppContainer = styled.div<{img?: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center
    width: 80%;
    @media (max-width: 768px) {
      width: 100%;
    }

}
`;

function App() {


  return (
    <AppContainer>
      <header className="App-header">
        <p>Soy el menu papurris</p>
      </header>
       
          <Home/>
      
      <footer>
        <GlobalFooter/>
      </footer>
    </AppContainer>  
  );
}


export default App;
