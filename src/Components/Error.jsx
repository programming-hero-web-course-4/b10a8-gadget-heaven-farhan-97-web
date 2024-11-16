import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Error 404</h1>
      <p className="py-6">
        Invalid Route
      </p>
     <Link to={'/'}> <button className="btn btn-primary">Back to home</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Error;