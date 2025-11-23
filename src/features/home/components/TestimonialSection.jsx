import React from 'react';
import { Check, CheckCheck, MessageCircle } from 'lucide-react';
import styles from './TestimonialSection.module.css';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Robert van Dijk',
            location: 'Jordaan',
            rating: 5,
            messages: [
                { text: 'Goed nieuws over je woning!', time: 'Nu', isMe: false },
                { text: 'Wauw dat is snel! 🎉', time: 'Nu', isMe: true },
            ]
        },
        {
            id: 2,
            name: 'Maria Santos',
            location: 'De Pijp',
            rating: 5,
            messages: [
                { text: 'Goed nieuws over je woning!', time: 'Nu', isMe: false },
                { text: 'Alle 4?? Fantastisch! 💪', time: 'Nu', isMe: true },
            ]
        },
        {
            id: 3,
            name: 'Jan Willem Bakker',
            location: 'Noord',
            rating: 5,
            messages: [
                { text: 'Goed nieuws over je woning!', time: 'Nu', isMe: false },
                { text: 'Echt waar?! Omg 🤩', time: 'Nu', isMe: true },
            ]
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Echte gesprekken die wij hebben gevoerd met onze verhuur klanten</h2>
                <p className={styles.subtitle}>Lees hoe wij onze verhuurders helpen via WhatsApp</p>

                <div className={styles.grid}>
                    {testimonials.map((t) => (
                        <div key={t.id} className={styles.card}>
                            <div className={styles.header}>
                                <div className={styles.avatar}>{t.name.charAt(0)}</div>
                                <div className={styles.userInfo}>
                                    <div className={styles.nameRow}>
                                        <span className={styles.name}>{t.name}</span>
                                        <span className={styles.verified}>✓</span>
                                    </div>
                                    <div className={styles.statusRow}>
                                        <span className={styles.online}>● Online</span>
                                        <span className={styles.location}>{t.location}</span>
                                    </div>
                                </div>
                                <div className={styles.rating}>★ {t.rating}</div>
                            </div>

                            <div className={styles.chatBody}>
                                {t.messages.map((msg, idx) => (
                                    <div key={idx} className={`${styles.message} ${msg.isMe ? styles.messageMe : styles.messageOther}`}>
                                        <div className={styles.bubble}>
                                            {msg.text}
                                            <div className={styles.meta}>
                                                <span>{msg.time}</span>
                                                {msg.isMe && <CheckCheck size={12} />}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className={styles.footer}>
                                <MessageCircle size={16} />
                                <span>13 berichten</span>
                                <span className={styles.date}>Oktober 2024</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <p>Word onze volgende tevreden klant</p>
                    <div className={styles.buttonGroup}>
                        <button className={`${styles.btn} ${styles.btnGreen}`}>Start als verhuurder</button>
                        <button className={`${styles.btn} ${styles.btnGreenOutline}`}>Vind uw droomhuis</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
