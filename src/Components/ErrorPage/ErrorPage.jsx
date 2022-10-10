import React from 'react';
import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h4><i>{error.statusText || error.message}: {error.status}</i></h4>
    </div>
  );
};

export default ErrorPage;