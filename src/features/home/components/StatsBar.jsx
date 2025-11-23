import React from 'react';
import { Users, Clock, TrendingUp } from 'lucide-react';
import styles from './StatsBar.module.css';

const StatsBar = () => {
    return (
        <div className={styles.statsBar}>
            <div className={styles.container}>
                <div className={styles.statItem}>
                    <Users className={styles.icon} size={20} />
                    <span>2500+ tevreden klanten</span>
                </div>
                <div className={styles.statItem}>
                    <Clock className={styles.icon} size={20} />
                    <span>24/7 ondersteuning</span>
                </div>
                <div className={styles.statItem}>
                    <TrendingUp className={styles.icon} size={20} />
                    <span>Premium service</span>
                </div>
            </div>
        </div>
    );
};

export default StatsBar;
