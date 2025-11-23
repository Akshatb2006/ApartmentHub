import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, X, Home } from 'lucide-react';
import { toggleMobileMenu, closeMobileMenu } from '../../features/ui/uiSlice';
import styles from './Navbar.module.css';

const Navbar = () => {
    const dispatch = useDispatch();
    const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Verhuren', path: '/landlords' },
        { name: 'Huren', path: '/tenants' },
        { name: 'Wijken', path: '/neighborhoods' },
        { name: 'Veelgestelde Vragen', path: '/faq' },
        { name: 'Over Ons', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const handleLinkClick = () => {
        dispatch(closeMobileMenu());
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo} onClick={handleLinkClick}>
                    <div className={styles.logoIcon}>
                        <Home size={20} />
                    </div>
                    <span>ApartmentHub</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''} ${link.name === 'Home' ? styles.homeLink : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className={styles.lang}>🇳🇱</div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileMenuBtn}
                    onClick={() => dispatch(toggleMobileMenu())}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className={styles.mobileMenu}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={styles.mobileNavLink}
                            onClick={handleLinkClick}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
