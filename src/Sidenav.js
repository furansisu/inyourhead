import React from 'react';
import './App.css';

const Sidenav = ({onClickLink}) => {
  return (
    <div className="sidenav-holder">
      Let's get in your head.
      <div className="sidenav">
        <a href="#home" onClick={onClickLink}>HOME</a>
        <a href="#about" onClick={onClickLink}>ABOUT</a>
        <a href="#work" onClick={onClickLink}>WORK</a>
        <a href="#hire" onClick={onClickLink}>HIRE</a>
      </div>
    </div>
  );
}

export default Sidenav