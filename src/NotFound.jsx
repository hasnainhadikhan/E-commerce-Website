import React from 'react';


const NotFoundPage = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404 Not Found</h1>
       
        <p className="error-message">Sorry, we can’t find the page you’re looking for.</p>
        <a href="/" className="home-link">Go Back Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;