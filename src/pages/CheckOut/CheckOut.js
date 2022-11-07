import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import img from './congratulation.jpg'


const CheckOut = () => {
    const params = useParams()

  const [courses,setCourses] = useState([])
  console.log(courses)

  useEffect(()=>{
      fetch(`https://web-tecnology-server.vercel.app/courses/${params.id}`)
      .then(response => response.json())
      .then(json => setCourses(json))
  },[params])
    const {name, picture,} =courses;

    const {user} = useContext(AuthContext);
   return (
        <div className='text-center py-5'>
            <Card className='mx-auto' style={{ width: '25rem' }}>
                <h2>{name}</h2>
            <Card.Img variant="top" src={picture} alt='picture' />
            <Card.Body>
                <h3 className='text-success'>Congratulation</h3>
                <Card.Title>{user.displayName}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Link to='/'>
                <Button className='w-100' variant="primary">Go Home</Button>
                </Link>
            </Card.Body>
        </Card> 
    </div>
    );
};

export default CheckOut;