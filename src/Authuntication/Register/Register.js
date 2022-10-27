import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('')
     const handleSubmit = (event) => {
       event.preventDefault();
       const form = event.target.form;
       const email = form.email.value;
       const password = form.password.value;
       const name = form.name.value;
       const photoURL = form.photoURL.value;

       console.log(email, password);

         const handleUpdateProfile = () => {
           const profile = {
             displayName: name,
             photoURL: photoURL,
           };
           updateUserProfile(profile)
             .then(() => {})
             .catch((error) => console.error(error));
         }; 
           createUser(email, password)
             .then((result) => {
               const user = result.user;
               console.log(user);
               form.reset();
               setError("");
               handleUpdateProfile(name, photoURL);
             })
             .catch((error) => {
               console.error(error);
               setError(error.message);
             });
                       

     };
     return (
       <Form onClick={handleSubmit}>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Name</Form.Label>
           <Form.Control type="text" name="name" placeholder="Enter name" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>photoURL</Form.Label>
           <Form.Control type="text" name="photoURL" placeholder="Enter your photoURL" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
           <Form.Label>Email address</Form.Label>
           <Form.Control type="email" name="email" placeholder="Enter email" />
           <Form.Text className="text-muted">
             We'll never share your email with anyone else.
           </Form.Text>
         </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
           <Form.Label>Password</Form.Label>
           <Form.Control
             type="password"
             name="password"
             placeholder="Password"
           />
         </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicCheckbox">
           <Form.Check type="checkbox" label="Check me out" />
         </Form.Group>
         <Button variant="primary" type="submit">
           Register
         </Button>
         {<p className="text-danger">{error}</p>}
       </Form>
     );
};

export default Register;