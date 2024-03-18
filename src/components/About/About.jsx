import styles from './About.module.css';
import storefront from './lee-storefront.jpg';
import fittingRoom from "./lee-fitting-rooms.jpg";
import Button from '../Button/Button'


const About = () => {
  const storeButton = '--lee-green';
  const roomButton = '--lee-red';

  return (
    <section className={styles.about}>
      
      <div className={styles.card}>
        <img src={storefront} alt='front of store' />
        <div className={styles.cardContent}>
          <h4><Button color={storeButton} />Our Store</h4>
          <p>
            <span>Family-run business</span>
            <span>Owner operated</span>
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src={fittingRoom} alt='fitting rooms' />
        <div className={styles.cardContent}>
          <h4><Button color={roomButton} />Fitting Rooms</h4>
          <p>
            <span>Measurement appointments available</span>
            <span>Walk-ins welcome</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export { About };
