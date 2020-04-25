import React, { useState } from 'react';
import './global.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header";
import styled from "styled-components";
import Nav from "./components/navigation";
import Bids from "./components/bids";
import Checkboxes from "./components/phase-checkbox";
// import StatusCheckboxes from "./components/forstatuscheckbox";
import CheckBoxFilters from './components/CheckBoxFilters';


// import CP from './alt-dash/current-projects-sub';
import DashSidebar from './components/dash-sidebar';
import OpenDash from './components/open-dash';

// import Dashboard from "./alt-dash/dashboard";

function App() {

  const [dashOpen, setDashOpen] = useState(false);
  const [shadowed, setShadowed] = useState(false);

  const applyDash = () => { setDashOpen(!dashOpen); }
  const applyShadow = () => { setShadowed(!shadowed); }

  const processBar = (active) => {

    setDashOpen(active);

  }

  return (
    <MainWrapper>
      {/* <Dashboard /> */}
      {/* <Header /> */}
      <WorkSpace>
        <div className={shadowed ? 'shadow-active' : ''}></div>
        {/* <Nav/> */}
        <DashSidebar shadow={applyShadow} dashOpen={dashOpen} process={processBar} />
        <OpenDash shadow={applyShadow} processDash={applyDash} dashOpen={dashOpen} process={processBar} />
        {/* <CP /> */}
        <Bids shadow={applyShadow} />
        {/* <StatusCheckboxes /> */}
      </WorkSpace>
      <Checkboxes />
    </MainWrapper>
  );

}

const MainWrapper =styled.div
`
font-family:Lotto;

// height: 100%;
`

const WorkSpace =styled.div
`
display:flex;
min-height: 100%;
height: 100%;

`

export default App;
