import React, { useContext } from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../../Contexts/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { ButtonGroup } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

const Login = () => {
const { signIn,gitProvider, providerLogin } = useContext(AuthContext);
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
      <div>
        <Form onClick={handleSubmit}>
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
            <Form.Check
              type="checkbox"
              label={
                <>
                  {" "}
                  Accept<Link to="/terms"> Terms and condition</Link>{" "}
                </>
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            login
          </Button>
          {<p className="text-danger">{error}</p>}
        </Form>
        <div>
          <ButtonGroup vertical>
            <Button
              onClick={handleGoogleSign}
              className="mb-2"
              variant="outline-dark"
            >
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