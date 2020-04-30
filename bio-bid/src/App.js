import React, { useState } from 'react';
import './styles/global.css';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bids from "./components/bids";

import {WorkSpace, MainWrapper} from './styles/styled-componets';
import DashSidebar from './components/dash-sidebar';
import OpenDash from './components/open-dash';

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
      <WorkSpace>
        <div className={shadowed ? 'shadow-active' : ''}></div>
        <DashSidebar shadow={applyShadow} dashOpen={dashOpen} process={processBar} />
        <OpenDash shadow={applyShadow} processDash={applyDash} dashOpen={dashOpen} process={processBar} />
        <Bids shadow={applyShadow} />
      </WorkSpace>
    </MainWrapper>
  );
}

export default App;