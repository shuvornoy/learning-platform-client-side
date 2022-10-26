import { useContext } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";


export default function SignupForm() {
  const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [confirmPassword, setConfirmPassword] = useState("");








  async function handleSubmit(e) {
       e.preventDefault();
       const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            handleEmailVerification();
                // toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
}

const handleUpdateUserProfile = (name, photoURL) => {
  const profile = {
      displayName: name,
      photoURL: photoURL
  }

  updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error));
}

const handleEmailVerification  = () => {
  verifyEmail()
  .then(() =>{})
  .catch(error => console.error(error));
}

const handleAccepted = event => {
  setAccepted(event.target.checked)
}

    // do validation
    // if (password !== confirmPassword) {
    //   return setError("Passwords don't match!");
    // }

    // try {
    //   setError("");
    //   setLoading(true);
    //   await(email, password, username, photoURL);
    //   // history.push("/");
    // } catch (err) {
    //   console.log(err);
    //   setLoading(false);
    //   setError("Failed to create an account!");
    // }
  

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="Enter your full name"
        icon="person"
        required
        name="username"
        
      />
      <TextInput
        type="text"
        placeholder="photo url"
        icon="person"
        required
        name="photoURL"
        
      />

      <TextInput
        type="text"
        required
        placeholder="Enter email"
        icon="alternate_email"
        name="email"
        
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        name="password"
        
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        required
        text="I agree to the Terms &amp; Conditions"
        onClick={handleAccepted}
      />

      <Button  type="submit" disabled={!accepted}>
        <span>Submit Now</span>
      </Button>

      {error && <p className="error">{error}</p>}

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
