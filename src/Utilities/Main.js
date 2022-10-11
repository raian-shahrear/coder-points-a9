import React, { createContext } from 'react';
import NavBar from '../Components/NavBar/NavBar';
import {Outlet, useLoaderData} from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

export const ItemContext = createContext([]);

const Main = () => {
  const items = useLoaderData().data;
  return (
    <ItemContext.Provider value={items}>
      <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </ItemContext.Provider>
  );
};

export default Main;