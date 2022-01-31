import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './components/top_bar';
import './Pages/MainPage.css';

const Layout: FC = () => (
  <>
    <div className='carts-section-wrapper'>
      <TopBar />
      <Outlet />
    </div>
  </>
);

export default Layout;