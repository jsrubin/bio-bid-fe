import React from 'react';
// import './global.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import styled from "styled-components";
import Nav from "./components/navigation";
import Bids from "./components/bids";

import CP from './alt-dash/current-projects-sub';
import DashSidebar from './components/dash-sidebar';

// import Dashboard from "./alt-dash/dashboard";

const App = () =>{
  return (
    <MainWrapper>
      {/* <Dashboard /> */}
      <Header/>
      <WorkSpace>
        {/* <Nav/> */}
        <DashSidebar />
        <CP />
        {/* <Bids/> */}
      </WorkSpace>
      </MainWrapper>
      
  );
};


const MainWrapper =styled.div
`
font-family:Lotto;

height: 100%;
`

const WorkSpace =styled.div
`
display:flex;

`

export default App;
