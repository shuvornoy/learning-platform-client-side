import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const CheckOut = ({singleCourse}) => {
    const {user} = useContext(AuthContext);

    
    return (
        <div>
        <Card className='mx-auto' style={{ width: '25rem' }}>
            <Card.Img variant="top" src="" alt='picture' />
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