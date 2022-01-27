import { Button } from '@mui/material';
import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './top_bar.css';

const TopBar: FC = () => {
  const [dataText, setDataText] = useState(null);

  useEffect(() => {
  }, []);

  return (
    <div className='top-bar-container'>
      <p className='top-bar-text'>{dataText}</p>
      <Link className='top-bar-button' to='/'>
        <Button variant='contained'>View</Button>
      </Link>
    </div>
  );
};

export default TopBar;
