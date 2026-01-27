import React from 'react';
import styles from './Footer.module.css';
import Typography from '@/components/UI/Atoms/Typography/Typography';
import FooterColumnHeader from './FooterColumnHeader';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    'Custom E-commerce',
    'ERP Systems Integration',
    'Cloud Solutions',
    'Business Intelligence',
    'Mobile Development',
    'AI & Machine Learning'
  ];

  const companyLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  // const socialLinks = [
  //   { icon: Linkedin, href: '#', label: 'LinkedIn' },
  //   { icon: Twitter, href: '#', label: 'Twitter' },
  //   { icon: Github, href: '#', label: 'GitHub' }
  // ];
const socialLinks = [
  { 
    icon: '/assets/linkeninicon.svg', 
    href: '#', 
    label: 'LinkedIn' 
  },
  { 
    icon: '/assets/Xicon.svg', 
    href: '#', 
    label: 'Twitter' 
  },
  { 
    icon: '/assets/githupicon.svg', 
    href: '#', 
    label: 'GitHub' 
  }
];
  return (
    <footer className={styles.footer}>
      {/* Main Footer Content */}
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            {/* Brand Column */}
            <div className={styles.footerColumn}>
              <div className={styles.brand}>
                <img 
                  src="/assets/FooterLogo.png" 
                  alt="Axuraa Logo" 
                  className={styles.logo}
                />
                {/* <Typography 
                variant="h1"
                sx={{
                  color: 'var(--white-95, rgba(255, 255, 255, 0.95))',
                  fontFamily: 'var(--font-family-Font-1, Roboto), sans-serif',
                  fontSize: {
                    xs: '14px',    // Mobile (0px and up)
                    sm: '16px',    // Small devices (600px and up)
                    md: '18px',    // Medium devices (900px and up)
                    lg: '20px',    // Large devices (1200px and up)
                    xl: '22px'     // Extra large devices (1536px and up)
                  },
                  fontStyle: 'normal',
                  fontWeight: 600,
                  lineHeight: {
                    xs: '20px',
                    sm: '22px',
                    md: '24px',
                    lg: '26.254px',
                    xl: '28px'
                  },
                  width: {
                    xs: '60px',
                    sm: '65px',
                    md: '71px',
                    lg: '75px'
                  },
                  height: {
                    xs: '22px',
                    sm: '24px',
                    md: '27px',
                    lg: '28px'
                  },
                  margin: 0,
                  padding: 0,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                AXURAA
              </Typography> */}
                {/* <Typography 
                    variant="h1"
                    color="rgba(255, 255, 255, 0.95)"
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontSize: '44.007px',
                      fontWeight: 600,
                      lineHeight: '1',
                      margin: 0,
                      padding: 0
                    }}
                  >
                    AXURAA
                </Typography> */}
                <h1 className={styles.brantlogo}>AXURAA</h1>
              </div>
              <p className={styles.description}>
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
              </p>
            </div>

            {/* Services Column */}
            <div className={styles.footerColumn}>
              <div className={styles.columnTitle}>
                {/* <Typography 
                  variant="h3"
                  style={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontFamily: 'Roboto',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: 'normal',
                    margin: '0 0 8px 0',
                    position: 'relative',
                    display: 'inline-block'
                  }}
                >
                  Services
                  <span 
                    style={{
                      position: 'absolute',
                      width: '50.909px',
                      height: '3.182px',
                      left: '20%',
                      bottom: '-12.832px',
                      backgroundColor: '#D75C37',
                      display: 'block'
                    }}
                  />
                </Typography> */}
                <FooterColumnHeader title="Services" />
              </div>
              <ul className={styles.linkList}>
                {servicesLinks.map((service, index) => (
                  <li key={index}>
                    <a href="#" className={styles.link}>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className={styles.footerColumn}>
              <div className={styles.columnTitle}>
                <FooterColumnHeader title="Company" />
              </div>
              <ul className={styles.linkList}>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className={styles.link}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className={styles.footerColumn}>
              <div className={styles.columnTitle  + " " + styles.columnTitle2}>
                <FooterColumnHeader title="Contact" />
              </div>
              {/* <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <Mail size={20} className={styles.contactIcon} />
                  <a href="mailto:info@axuram.com" className={styles.contactLink}>
                    info@axuram.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <Phone size={20} className={styles.contactIcon} />
                  <a href="tel:+15551234567" className={styles.contactLink}>
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={20} className={styles.contactIcon} />
                  <span className={styles.contactText}>Los Angeles, CA</span>
                </li>
              </ul> */}

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <img 
                    src="/assets/emailicon.svg" 
                    alt="Email" 
                    width={20} 
                    height={20} 
                    className={styles.contactIcon} 
                  />
                  <a href="mailto:info@axuram.com" className={styles.contactLink}>
                    info@axuram.com
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <img 
                    src="/assets/telefonicon.svg" 
                    alt="Phone" 
                    width={20} 
                    height={20} 
                    className={styles.contactIcon} 
                  />
                  <a href="tel:+15551234567" className={styles.contactLink}>
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className={styles.contactItem}>
                  <img 
                    src="/assets/Lcation icon.svg" 
                    alt="Location" 
                    width={20} 
                    height={20} 
                    className={styles.contactIcon} 
                  />
                  <span className={styles.contactText}>Los Angeles, CA</span>
                </li>
              </ul>

              {/* Social Links */}
              {/* <div className={styles.socialLinks}> 

                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.href} 
                      className={styles.socialLink}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>*/}
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.href} 
                    className={styles.socialLink}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img 
                      src={social.icon} 
                      alt={social.label} 
                      width={24} 
                      height={24}
                      className={styles.socialIcon}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.bottomContent}>
            <Typography 
              variant="body1"
              style={{
                color: 'var(--white-55, var(--color-white-55, rgba(255, 255, 255, 0.55)))',
                fontFamily: 'var(--font-family-Font-1, Roboto), sans-serif',
                fontSize: '26.25px',
                fontStyle: 'normal',
                fontWeight: 'var(--font-weight-400, 400)',
                lineHeight: '37.5px',
                margin: 0
              }}
              className={styles.bottomContentTitle}
            >
              © {currentYear} AXURAA. All rights reserved.
            </Typography>
            <div className={styles.legalLinks}>
              <Typography 
                component="a" 
                // href="#" 
                className={styles.legalLink}
                style={{
                  color: 'var(--white-55, var(--color-white-55, rgba(255, 255, 255, 0.55)))',
                  fontFamily: 'var(--font-family-Font-1, Roboto), sans-serif',
                  fontSize: '26.25px',
                  fontStyle: 'normal',
                  fontWeight: 'var(--font-weight-400, 400)',
                  lineHeight: '37.5px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                Privacy Policy
              </Typography>
              <Typography 
                component="span" 
                className={styles.separator}
                style={{
                  color: 'var(--white-35, var(--color-white-35, rgba(255, 255, 255, 0.35)))',
                  fontFamily: 'var(--font-family-Font-1, Roboto), sans-serif',
                  fontSize: '30px',
                  fontStyle: 'normal',
                  fontWeight: 'var(--font-weight-400, 400)',
                  lineHeight: '45px',
                  margin: '0 10px'
                }}
              >
                |
              </Typography>
              <Typography 
                component="a" 
                // href="#terms" 
                className={styles.legalLink}
                style={{
                  color: 'var(--white-55, var(--color-white-55, rgba(255, 255, 255, 0.55)))',
                  fontFamily: 'var(--font-family-Font-1, Roboto), sans-serif',
                  fontSize: '26.25px',
                  fontStyle: 'normal',
                  fontWeight: 'var(--font-weight-400, 400)',
                  lineHeight: '37.5px',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease'
                }}
              >
                Terms of Service
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);