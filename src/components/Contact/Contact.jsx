import styles from './Contact.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';
import { getCurrentYear } from '../../utils/date';

const Contact = () => {
  return (
    <footer className={styles.contact}>
      <h3 className={styles.h3}>Contact Information</h3>
      <div className={styles.container}>
        <iframe
          className={styles.contactItems}
          width="311" 
          height="429"
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?width=311&amp;height=429&amp;hl=en&amp;q=1409%20West%20Chester%20Pike%20West%20Chester+(Lee's%20Cleaners)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
        </iframe>
        <div className={styles.contactItems}>
          <ul>
            <FontAwesomeIcon icon={faLocationDot} style={{color: 'FD0D02', marginRight: '0.4em'}}/>
            <li className={styles.contactItem}>
              <a
                className={styles.link}
                target='_blank'
                href="https://www.google.com/maps/search/?api=1&query=1409%20West%20Chester%20Pike%2C%20West%20Chester%2C%20PA%2C%2019382">
                  1409 West Chester Pike, West Chester, PA 19382
              </a>
            </li>
            <FontAwesomeIcon icon={faClock} style={{color: '21a02c', marginRight: '0.4em'}}/>
            <li>
              <span>Monday - Friday</span>
              <span>8:30am - 6:30pm</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>9:30am - 4:30pm</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>Closed</span>
            </li>
            <FontAwesomeIcon icon={faPhone} style={{color: '21A094', marginRight: '0.4em'}}/>
            <li>
              <a
                className={styles.link}
                target='_blank'
                href="tel:610-429-0435">
                  Tel. (610) 429-0435
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.copyright}>Copyright &copy; {getCurrentYear()} Lisa Lee | All rights reserved.</p>
    </footer>
  );
}

export { Contact };
