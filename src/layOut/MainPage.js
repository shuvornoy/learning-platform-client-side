import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/header/Header';


const MainPage = () => {
    return (
      <div>
       <Header></Header>
        <Outlet />
      </div>
    );
};

export default MainPage;