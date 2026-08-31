import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

const navigate = useNavigate();

    return (
        <div className="container not-found-inline-inner">
            <h1>Course Not Found</h1>
            <p>The course you are looking for doesn't exist or has been removed.</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
                Back to Courses
            </button>
        </div>
    )
}

export default NotFound