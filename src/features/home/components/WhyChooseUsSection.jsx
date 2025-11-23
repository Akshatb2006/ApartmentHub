import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './WhyChooseUsSection.module.css';

const WhyChooseUsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ontdek waarom wij de beste keuze zijn voor uw vastgoed</h2>
                    <p className={styles.description}>
                        Professionele service, persoonlijke begeleiding en jarenlange ervaring in de Amsterdamse vastgoedmarkt.
                    </p>
                    <button className={styles.btn}>
                        Ontdek meer
                    </button>
                </div>
                <div className={styles.imageWrapper}>
                    {/* Using a placeholder that looks like a dashboard/interface */}
                    <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Dashboard Interface"
                        className={styles.image}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;
