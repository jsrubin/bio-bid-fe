import React from 'react';
import { Card, Button } from './styles';

export default props => {
    return (
        <Card>
            <h1>Warning</h1>
            <p className='message'>Importing company data from LinkedIn will overwrite current data</p>
            <div className='btn-container'>
                <Button>
                    <p>Import</p>
                </Button>
                <Button cancel='true' onClick={props.close}>
                    <p>Cancel</p>
                </Button>
            </div>
        </Card>
    );
}