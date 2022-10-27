import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ListGroup from "react-bootstrap/ListGroup";
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
const Lefside = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() =>{
        fetch("http://localhost:5000/news-categories")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    const notify = () => {
      toast.success("Wow! Details Show."
      )};
    return (
      <div>
        <h4> All Courses: {courses.length} </h4>
        {courses.map((course) => (
          <p key={course.id}>
            <Link to={`/course/${course.id}`}>
              <ListGroup>
                {" "}
                <ListGroup.Item onClick={notify} action variant="danger">
                  {course.name} <ToastContainer></ToastContainer>
                </ListGroup.Item>{" "}
              </ListGroup>{" "}
            </Link>
          </p>
        ))}
      </div>
    );
};

export default Lefside;