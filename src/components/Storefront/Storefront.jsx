import storefront from "/storefront-jeff-smith-BXhN9g58-Q0-unsplash.jpg"
import flag from "/flag-daniel-bernard-qjsmpf0aO48-unsplash.jpg"
import styles from './Storefront.module.css'

const Storefront = () => {
  return (
    <div className={`store ${styles.store}`}>
      <ul className={`info ${styles.info}`}>
        <li>
          <img src={flag} alt="Korean flag" style={{width: '200px'}}/>
        </li>
        <li>Family-run business</li>
        <li>Owner operated</li>
      </ul>
      <img src={storefront} alt="storefront" style={{width: '400px'}}/>
    </div>
  );
}

export { Storefront };

