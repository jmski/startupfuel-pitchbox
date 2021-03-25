import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../css/NavigationBar.css';

const NavigationBar = () => {

    const [button, setButton] = useState(true);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    {/*This prevents the sign up button to load more than once if user F5*/}
    useEffect(() => {
        showButton()
    }, [ ]);

    window.addEventListener('resize', showButton);

    {/* toggle between states when user clicks on icon*/}
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        {/* add logo here*/}
                        <img src="/img/PitchBoxIcon.png" alt="Startup Fuel PitchBox Logo"/>
                    </Link>

                    {/* hamburger menu*/}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={ click ? 'fas fa-times' : 'fas fa-bars' } /> 
                    </div>

                    {/* Clear the menu depending on state */}
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={ closeMobileMenu }>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={ closeMobileMenu }>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={ closeMobileMenu }>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={ closeMobileMenu }>
                                Request a Demo
                            </Link>
                        </li>
                    </ul>
                    { button && <Button buttonStyle='btn--outline'>Request a Demo</Button>}
                </div>
            </nav>
        </>
    )
}

export default NavigationBar;