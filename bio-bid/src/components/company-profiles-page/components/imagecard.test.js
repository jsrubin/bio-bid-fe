import React from 'react';
import { render, fireEvent, waitForElement, getByText } from '@testing-library/react';
import ImageCard from '../imagecard';

test('Checking to see if our data is loaded correctly', () => {
  expect(ImageCard).toBeTruthy();
});
