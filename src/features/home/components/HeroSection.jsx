import React from 'react';
import { Home, Heart, ArrowRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.iconWrapper}>
                    <Home size={32} className={styles.icon} />
                </div>

                <h1 className={styles.title}>
                    <span className={styles.textGray}>Jouw </span>
                    <span className={styles.textOrange}>perfecte thuis</span>
                    <br />
                    <span className={styles.textGreen}>Begint</span>
                    <span className={styles.textGray}> hier</span>
                </h1>

                <p className={styles.subtitle}>
                    Verhuren of huren, wij regelen het<br />
                    Huren of verhuren? ApartmentHub maakt het makkelijk.
                </p>

                <div className={styles.buttonGroup}>
                    <button className={`${styles.btn} ${styles.btnGreen}`}>
                        <Home size={20} />
                        <span>Eigendom verhuren</span>
                        <ArrowRight size={20} />
                    </button>

                    <button className={`${styles.btn} ${styles.btnOrange}`}>
                        <Heart size={20} />
                        <span>Ik zoek een huis</span>
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
