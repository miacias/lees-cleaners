import styles from './BizProfile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const BizProfile = () => {
  return (
    <div className={`profile ${styles.profile}`}>
      <a
        className={styles.link} 
        href="https://www.google.com/maps/search/?api=1&query=1409%20West%20Chester%20Pike%2C%20West%20Chester%2C%20PA%2C%2019382">
        <FontAwesomeIcon icon={faLocationDot} style={{color: 'green', marginRight: '0.4em'}}/>
        1409 West Chester Pike, West Chester, PA 19382
      </a>
      <a
        className={styles.link}
        href="tel:610-429-0435">
          <FontAwesomeIcon icon={faPhone} style={{color: 'green', marginRight: '0.4em'}}/>
          Tel. (610) 429-0435
      </a>
    </div>
  );
}

export { BizProfile };