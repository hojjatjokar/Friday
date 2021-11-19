import React from 'react';

interface IProps {
  message: string;
  retry: () => void;
}

const Error = ({ message, retry }: IProps) => (
  <div>
    <p>{message}</p>
    <button onClick={retry}>Retry</button>
  </div>
);

export default Error;
