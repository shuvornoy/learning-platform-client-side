import React from 'react';

const Blog = () => {
    return (
      <div>
        <div mx-auto>
          <h3 className="text-danger">What is cors?</h3>
          <h6>
            localhost server allows to permit user any other place server data
            In that preflight,Cors (Cross-Origin Resource Sharing) the browser
            sends headers that indicate the HTTP method and headers that will be
            used in the actual request.the browser sends headers that indicate
            the HTTP method and headers that will be used in the actual request.
            The service responses using the same headers with different or the
            same values. The client decides, based on a CORS preflight response,
            if he can or cannot send the main request to the service.
          </h6>
        </div>
        <div mx-auto>
          <h3 className="text-danger">How does the private route work?</h3>
          <h6>
            The current logged in user (authUser) is retrieved from Redux state
            with a call to the useSelector() hook. Redux is used in this example
            however it is not required to implement a Private Route component in
            React Router 6. You could use a different state management library
            or any approach you prefer to get the logged in status of the user.
          </h6>
        </div>
        <div mx-auto>
          <h3 className="text-danger"> What is Node? How does Node work??</h3>
          <h6>
            Node.js is a single-threaded, open-source, cross-platform runtime
            environment for building fast and scalable server-side and
            networking applications. It runs on the V8 JavaScript runtime
            engine, and it uses event-driven, non-blocking I/O architecture,
            which makes it efficient and suitable for real-time applications.
          </h6>
        </div>
        <div mx-auto>
          <h3 className="text-danger">
            Why are you using firebase? What other options do you have to
            implement authentication??
          </h3>
          <h6>
            We often need a fine-grained permissions model to allow only
            specific users to access certain resources while simultaneously
            restricting access for everyone else. In this tutorial, Toptal
            Freelance Firebase Developer Joaquin Cid teaches how to build just
            such a system. Called role-based authentication, we’ll learn how to
            implement this system in an API using Node.js and Firebase.The
            Firebase authentication is the feature most apps require to
            recognize the identity of the users. This authentication solution
            provides backend services, easy-to-use firebase SDKs, and ready-made
            UI libraries to authenticate users to your app.
          </h6>
        </div>
      </div>
    );
};

export default Blog;