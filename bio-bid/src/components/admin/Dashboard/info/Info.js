import React from 'react';

import RegionsCovered from './RegionsCovered';
import TherapeuticAreas from './TherapeuticAreas';
import Services from './Services';

export default function Info() {
  return (
    <div style={{ display: 'flex' }}>
      <RegionsCovered />
      <TherapeuticAreas />
      <Services />
    </div>
  );
}
