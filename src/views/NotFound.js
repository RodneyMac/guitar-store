import React from "react";
import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();

  return (
    <div>
      <h4 className="text-warning text-center mt-4">Error 404</h4>
      <p className="text-warning text-center mt-4">Page Not Found</p>
      <p className="text-warning text-center mt-4">
        {error.statusText || error.message}
      </p>
      <div className="mt-5 text-center">
        <Link to="/" className="btn btn-info">
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
