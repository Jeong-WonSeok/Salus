import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar';
import SideBar from './SideBar';

const Div = styled.div`
  height: 92vh;
`;

const NavSideBar = () => {
  return (
    <Fragment>
      <NavBar />
      <Div className="d-flex">
        <SideBar />
        <Outlet />
      </Div>
    </Fragment>
  );
};

export default NavSideBar;
