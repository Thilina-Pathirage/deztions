import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';
import { useState } from 'react';
import Deztions from '../images/Deztions.png';

const MainNavigation = props => {

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

    return(
        
       <React.Fragment> 
           
          {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>} 

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
                
        <MainHeader>
            <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <i className="fas fa-grip-vertical burger-icon"/>
            </button>
            <Link to="/">
                <img src={Deztions} className="brandLogo" alt="Deztions" />
            </Link>
            <nav className="main-navigation__header-nav">
                <NavLinks/>
            </nav>
        </MainHeader>

       </React.Fragment>
    );
}

export default MainNavigation;
