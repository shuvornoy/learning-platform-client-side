import React from 'react';
import { useContext } from 'react';
import {GoogleAuthProvider} from 'firebase/auth'
import { Button, ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider';
const RightSide = () => {
    const { providerLogin } = useContext(AuthContext);
    const gProvider = new GoogleAuthProvider()

    const handleGoogleSign = () => {
        providerLogin(gProvider)
        .then(result => {
            const user = result.user
            console.log(user);
            
        })
        .catch(error => console.error(error))
    }
  
    
    return (
        <div>
           <ButtonGroup vertical>
            <Button onClick={handleGoogleSign} className='mb-2' variant='outline-dark'> <FaGoogle></FaGoogle> login with google</Button>
            <Button variant='outline-primary'><FaGithub></FaGithub> login with github</Button>
           </ButtonGroup>
        </div>
    );
};

export default RightSide;