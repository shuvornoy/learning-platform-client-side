import React, { useContext } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../../Contexts/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ButtonGroup } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Login = () => {
const { signIn, gitProvider, providerLogin } = useContext(AuthContext);
const [error, setError] = useState('');
    
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || '/';

     const gProvider = new GoogleAuthProvider();
     const gitpro = new GithubAuthProvider();

     const handleGoogleSign = () => {
       providerLogin(gProvider)
         .then((result) => {
           const user = result.user;
             toast.success("Wow! Google logged Successfully.");
           console.log(user);
         })
         .catch((error) => console.error(error));
     };
  
     const handleGitSign = () => {
        gitProvider(gitpro)
        .then(result => {
            const user = result.user;
             toast.success("Wow! Github logged Successfully.");
            console.log(user)
        })
        .catch(error => console.error(error))

     }
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target.form;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
             toast.success("Wow! logged Successfully.");
          })
          .catch((error) => {
            console.error(error);
            setError(error.message)
          });

    }
    return (
      <div className='col-md-4 mx-auto'>
        <Form onClick={handleSubmit} >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button className='w-100' variant="primary" type="submit">
            login now
          </Button>
          {<p className="text-danger">{error}</p>}
        </Form>
        <div>
          <ButtonGroup className='w-100' vertical>
            <Button onClick={handleGoogleSign} variant="outline-dark"
            className='mb-2'>
              {" "}
              <FaGoogle></FaGoogle> login with google{" "}
              <ToastContainer></ToastContainer>
            </Button>
            <Button onClick={handleGitSign} variant="outline-primary">
              <FaGithub></FaGithub> login with github{" "}
              <ToastContainer></ToastContainer>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
};

export default Login;