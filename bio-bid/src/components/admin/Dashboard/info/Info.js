import React from 'react';

import RegionsCovered from './RegionsCovered';
import TherapeuticAreas from './TherapeuticAreas';
import Services from './Services';

import styled from 'styled-components';

export default function Info() {
  return (
    <div>
      <Title>
        <h1>Information</h1>
      </Title>
      <div style={{ display: 'flex' }}>
        <RegionsCovered />

        <TherapeuticAreas />

        <Services />
      </div>{' '}
    </div>
  );
}

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  color: #096dd9;

  h1 {
    font-size: 3.5rem;
    font-weight: bold;
  }
`;
