import { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const id = setInterval(() => {
      const date = new Date();
      const today = date.toLocaleString();
      setTime(today);
    }, 0);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © Copyright 2022 | All Rights Reserved | Dovlat Yakshibayev
      </p>
      <p className="footer__date">{time}</p>
    </footer>
  );
};
export default Footer;
