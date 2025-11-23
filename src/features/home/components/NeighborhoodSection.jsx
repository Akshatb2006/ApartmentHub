import React from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './NeighborhoodSection.module.css';

const NeighborhoodSection = () => {
    const neighborhoods = [
        {
            id: '01',
            name: 'Centrum',
            desc: 'Het hart van Amsterdam met grachten en historie.',
            img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '02',
            name: 'Jordaan',
            desc: 'Charmante wijk met smalle straatjes en bruine cafés.',
            img: 'https://images.unsplash.com/photo-1582236895376-747d92823023?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '03',
            name: 'De Pijp',
            desc: 'Levendige buurt bekend om de Albert Cuyp Markt.',
            img: 'https://images.unsplash.com/photo-1584003564911-a7a321c84a13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: '04',
            name: 'Oost',
            desc: 'Multiculturele wijk met parken en foodscene.',
            img: 'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ontdek Amsterdam's Wijken</h2>

                <div className={styles.grid}>
                    {neighborhoods.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={item.img} alt={item.name} className={styles.image} loading="lazy" />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.number}>{item.id}.</span>
                                <h3 className={styles.name}>{item.name}</h3>
                                <p className={styles.desc}>{item.desc}</p>
                                <button className={styles.link}>
                                    Ontdek meer <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NeighborhoodSection;
