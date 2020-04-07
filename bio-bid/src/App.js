import React from 'react';
import './App.css';
import Header from "./components/header";
import styled from "styled-components";
import Nav from "./components/navigation";
import Overview from "./components/overview";
import Projects from "./components/projects";


const App = () =>{
  return (
    <MainWrapper>
      <Header/>
      <WorkSpace>
        <Nav/>
        <Overview/>
        <Projects/>
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
