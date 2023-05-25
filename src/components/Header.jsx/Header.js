import React, { useState, useEffect } from 'react';
import '../../App.css'
import './header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
        <div className='header-container'>
            <div className="logo">Logo</div>
            <div className='nav'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className='active'><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
  );
}

export default Header;
