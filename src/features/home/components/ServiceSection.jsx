import React from 'react';
import { Home, Search, Check } from 'lucide-react';
import styles from './ServiceSection.module.css';

const ServiceSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Hoe ApartmentHub Werkt</h2>

                <div className={styles.grid}>
                    {/* Landlord Card */}
                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                            <Home size={32} />
                        </div>
                        <h3>Verhuur Uw Eigendom</h3>
                        <p className={styles.description}>
                            Maak uw eigendom verhuurklaar met onze uitgebreide verhuurdersdiensten.
                            We helpen u de juiste huurprijs te bepalen, kwaliteitshuurders te vinden en het hele proces te beheren.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Professionele huurwaarde inschatting</span>
                            </li>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Huurders screening en verificatie</span>
                            </li>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Juridische documentatie ondersteuning</span>
                            </li>
                        </ul>
                    </div>

                    {/* Tenant Card */}
                    <div className={styles.card}>
                        <div className={`${styles.iconBox} ${styles.iconBoxGreen}`}>
                            <Search size={32} />
                        </div>
                        <h3>Vind Uw Perfecte Huis</h3>
                        <p className={styles.description}>
                            Op zoek naar een huurhuis? Onze persoonlijke aanpak helpt u eigenschappen te vinden die passen bij uw behoeften en budget via ons uitgebreide netwerk.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Gepersonaliseerde eigendom aanbevelingen</span>
                            </li>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Directe WhatsApp communicatie</span>
                            </li>
                            <li>
                                <Check size={16} className={styles.checkOrange} />
                                <span>Bezichtiging coördinatie en ondersteuning</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
