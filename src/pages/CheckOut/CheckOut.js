import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const check = useLoaderData()
  
    console.log(check)

    
    return (
        <div>
            <h2>{check.name}</h2>
        <Card className='mx-auto' style={{ width: '25rem' }}>
            <Card.Img variant="top" src={check.picture} alt='picture' />
            <Card.Body>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text>
                    
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    );
};

export default CheckOut;