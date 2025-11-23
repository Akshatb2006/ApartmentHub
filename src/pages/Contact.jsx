import React, { useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '../hooks/useForm';
import styles from './Contact.module.css';

const Contact = () => {
    const { register, handleSubmit, status, error, reset } = useForm();

    useEffect(() => {
        return () => {
            reset(); // Clean up on unmount
        };
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Neem Contact Op</h1>
                <p className={styles.subtitle}>
                    Heeft u vragen? Wij staan klaar om u te helpen.
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Contactgegevens</h2>
                        <div className={styles.infoItem}>
                            <Mail className={styles.icon} />
                            <span>hello@apartmenthub.com</span>
                        </div>
                        <div className={styles.infoItem}>
                            <Phone className={styles.icon} />
                            <span>+31 20 123 4567</span>
                        </div>
                        <div className={styles.infoItem}>
                            <MapPin className={styles.icon} />
                            <span>Keizersgracht 123, Amsterdam</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formCard}>
                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={48} className={styles.successIcon} />
                                <h3>Bedankt voor uw bericht!</h3>
                                <p>We nemen zo snel mogelijk contact met u op.</p>
                                <button onClick={reset} className={styles.resetBtn}>
                                    Nieuw bericht sturen
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name">Naam</label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name')}
                                        placeholder="Uw naam"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register('email')}
                                        placeholder="uw@email.com"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="subject">Onderwerp</label>
                                    <select id="subject" {...register('subject')}>
                                        <option value="general">Algemene vraag</option>
                                        <option value="landlord">Ik wil verhuren</option>
                                        <option value="tenant">Ik zoek een woning</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Bericht</label>
                                    <textarea
                                        id="message"
                                        {...register('message')}
                                        placeholder="Waarmee kunnen we u helpen?"
                                        rows={5}
                                        required
                                    />
                                </div>

                                {status === 'error' && (
                                    <div className={styles.errorMessage}>
                                        <AlertCircle size={16} />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className={styles.submitBtn}
                                    disabled={status === 'loading'}
                                >
                                    {status === 'loading' ? 'Verzenden...' : (
                                        <>
                                            <span>Verstuur Bericht</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
