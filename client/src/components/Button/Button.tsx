import React, { ReactNode } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export const Button = ({
  children,
  link,
  reverse = false,
}: {
  children: ReactNode;
  link: string;
  reverse?: boolean;
}) => {
  return (
    <Link to={link} className="btn-mobile">
      <button
        className={`btn btn--large ${
          reverse ? 'btn--outline' : 'btn--primary'
        }`}
      >
        {children}
      </button>{' '}
    </Link>
  );
};
