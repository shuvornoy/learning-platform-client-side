import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import TextInput from "./TextInput";


function LoginForm() {
    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const user = result.user;
              console.log(user);
              form.reset();
              setError('');
              if(user.emailVerified){
                  navigate(from, {replace: true});
              }
              else{
                  // toast.error('Your email is not verified. Please verify your email address.')
              }
          })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
          .finally(() => {
              setLoading(false);
          })
  }



  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log(handleGoogleSignIn)
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  

  return (
  
    <Form onSubmit={handleSubmit}>
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" name="email"
        required/>

      <TextInput type="password" placeholder="Enter password" icon="lock" name="password"
        required/>

      <Button type="submit">
        <span>Login Now</span>
      </Button>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          className="mb-2 w-100"
          variant="outline-primary"
        >
          {" "}
          <span>
            <FaGoogle className="text-white"></FaGoogle> Login with Google
          </span>
        </Button>
        <Button className="w-100" variant="outline-dark">
          {" "}
          <span>
            <FaFacebook /> Login with Github
          </span>
        </Button>
      </ButtonGroup>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
export default LoginForm;
