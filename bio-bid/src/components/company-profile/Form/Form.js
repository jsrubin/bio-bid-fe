import React from 'react';
import { Form } from './styles';

export default props => {
    return (
        <Form>
            <div className='body'>
                <div className='header-wrapper'>
                    {props.edit ? (
                        <h1>Edit company profile</h1>
                    ) : (
                        <h1>Add company profile</h1>
                    )}
                    <div className='btn-container'>
                        <div className='btn linkedin'>
                            <p>Import</p>
                        </div>          
                        <div className='btn cancel'>
                            <p>Cancel</p>
                        </div>
                        
                    </div>
                </div>
                
                <div className='bar'/>
            </div>
        </Form>
    );
}