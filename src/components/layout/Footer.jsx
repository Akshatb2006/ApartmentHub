import React from 'react';
import { Home } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>AH</div>
                            <span>ApartmentHub</span>
                        </div>
                        <p className={styles.desc}>
                            Lovable homes deserve lovable service. We helpen eigenaren van eigendommen verbinden met huurders via ons vertrouwde platform en werkwijze.
                        </p>
                        <p className={styles.email}>Email: hello@apartmenthub.com</p>
                    </div>

                    <div className={styles.linksCol}>
                        <h4>Snelle Links</h4>
                        <ul>
                            <li><a href="#">Verhuren</a></li>
                            <li><a href="#">Huren</a></li>
                            <li><a href="#">Over Ons</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Algemene Voorwaarden</a></li>
                            <li><a href="#">Privacyverklaring</a></li>
                        </ul>
                    </div>

                    <div className={styles.newsletterCol}>
                        <h4>Nieuwsbrief</h4>
                        <div className={styles.inputGroup}>
                            <input type="email" placeholder="Voer uw email in" />
                        </div>
                        <button className={styles.subBtn}>Abonneren</button>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.socials}>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>
                    <p className={styles.copyright}>© 2024 ApartmentHub. Alle rechten voorbehouden.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
