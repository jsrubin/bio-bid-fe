import React from 'react';
import { render } from '@testing-library/react';

import Dashboard from '../alt-dash/dashboard';

test('AAA', () => {

    const { getByText } = render(<Dashboard />);

    const dashText = getByText(/profile/i);

    expect(dashText).toBeInTheDocument();

    // expect(true).toBe(true);

});