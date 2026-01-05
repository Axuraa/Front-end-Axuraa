import styles from './Contact.module.css';

import HeroSection from '@/components/Layout/HeroSection/HeroSection';


const Contact = () => {
    return (
        <div className={styles.container}>  
           <HeroSection
                badgeText="WHO WE ARE"
                title1="Architecting the Future of"
                title2="Digital Business"
                subtitle1="At Axuraa, we don't just write code. We build the digital infrastructure that powers the world's most ambitious companies."
                subtitle2=""
                backgroundType="Circle"
                showTrustedSection={false}
                showPrimaryButton={false}
                showSecondaryButton={false}
                showBadge={false}

            />
        </div>
    );
}
export default Contact;