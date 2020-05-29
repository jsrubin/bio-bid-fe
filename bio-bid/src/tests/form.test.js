import React from 'react';
import { render } from '@testing-library/react';
import Form from '../components/company-profile/Form/Form';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { ApolloProvider } from 'react-apollo';

const client = jest.fn();
client.watchQuery = jest.fn();

// Write test to ensure an error appears when no company name is provided
test('Error appears when no name is provided', () => {
    // const history = createMemoryHistory();
    // const route = '/service-providers/edit/:id';
    // history.push(route);

    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: jest.fn().mockReturnValue({ id: '123' }),
    }));

    jest.mock('@apollo/react-hooks', () => ({
        ...jest.requireActual('@apollo/react-hooks'),
        useQuery: jest.fn().mockReturnValue({ loading: false, error: false, data: { name: 'hello' } }),
    }));

    render(
        // <Router history={history}>
            <ApolloProvider client={client}>
                <Form edit={false}/>
            </ApolloProvider>
        // </Router>
    )
})

// Write test to ensure add company button works with all data fields filled
