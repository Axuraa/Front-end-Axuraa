import React from 'react';
import styles from './ContactForm.module.css';
import Image from 'next/image';
import fullNameIcon from '../../../../public/assets/fullname.svg';
import emailIcon from '../../../../public/assets/Email.svg';
import servicesIcon from '../../../../public/assets/services.svg';
import chooseIcon from '../../../../public/assets/chose.svg';
import sendIcon from '../../../../public/assets/sendbuttom.svg';

const ContactForm: React.FC = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.circleBackground}></div>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Full Name</label>
          <div className={styles.inputWithIcon}>
            <Image 
              src={fullNameIcon} 
              alt="Name" 
              width={20} 
              height={20} 
              className={styles.inputIcon}
            />
            <input
              type="text"
              placeholder="Full Name"
              className={styles.inputField}
              defaultValue="John Doe"
            />
          </div>
        </div>

        <div className={styles.formGroup1}>
          <label className={styles.label}>Preferred Contact Method</label>
          <div className={styles.radio}>
            <label className={styles.radioGroup}>
              <input 
                type="radio" 
                name="contactMethod" 
                value="email" 
                className={styles.radioInput}
                defaultChecked
              />
              <span className={styles.radioLabel}>Email</span>
            </label>
            <label className={styles.radioGroup}>
              <input 
                type="radio" 
                name="contactMethod" 
                value="phone" 
                className={styles.radioInput}
              />
              <span className={styles.radioLabel}>Phone</span>
            </label>
          </div>
          <div className={styles.inputWithIcon}>
            <Image 
              src={emailIcon} 
              alt="Email" 
              width={20} 
              height={20} 
              className={styles.inputIcon}
            />
            <input
              type="email"
              placeholder="Email"
              className={styles.inputField}
              defaultValue="john.doe@example.com"
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Service Interested In</label>
          <div className={`${styles.inputWithIcon} ${styles.selectWrapper}`}>
            <Image 
              src={servicesIcon} 
              alt="Services" 
              width={20} 
              height={20} 
              className={styles.inputIcon}
            />
            <select
              className={styles.selectField}
              defaultValue="Web Development"
            >
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO Services">SEO Services</option>
            </select>
            <Image 
              src={chooseIcon} 
              alt="Choose" 
              width={20} 
              height={20} 
              className={styles.selectArrow}
            />
          </div>
        </div>

        <div className={styles.formGroup2}>
          <label className={styles.label}>Project Details</label>
          <textarea
            placeholder="Message"
            className={`${styles.inputField} ${styles.textarea}`}
            rows={5}
            defaultValue="Tell us about your project goals, timeline, and budget......"
          />
        </div> 

<button type="submit" className={styles.submitButton}>
  Send Message
  <Image 
    src={sendIcon} 
    alt="Send" 
    width={12.689} 
    height={10.685} 
    className={styles.sendIcon}
  />
</button>
      </form>
    </div>
  );
};

export default ContactForm;