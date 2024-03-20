import styles from './About.module.css';
// import flag from './south-korean-flag.jpg';
import storefront from './lee-storefront.jpg';
import fittingRoom from "./lee-fitting-rooms.jpg";
import workspace from "./workspace-collab-media-upKXvfgKABY-unsplash.jpg";
import dryCleaning from './lee-dry-cleaning.jpg';
import Button from '../Button/Button';
import Highlight from '../Highlights/Highlights';

const About = () => {
  const btnGreen = '--lee-green';
  const btnRed = '--lee-red';
  const btnTeal = '--lee-teal';
  const btnYellow = '--highlight';
  const green = '21a02c';
  const red = 'FD0D02';
  const teal = '21A094';
  const yellow = 'FFD166';

  return (
    <>
      <h3 className={styles.h3}>About</h3>
      <section className={styles.about}>
        {/* STORE FRONT */}
        <div className={styles.card}>
          <img src={storefront} alt='front of store' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnGreen}/>
              <span>Our Store</span>
            </h4>
            <p>
              <Highlight color={green} content={['Family-run business', 'Owner operated']}/>
=            </p>
          </div>
        </div>
        {/* DRY CLEANING */}
        <div className={styles.card}>
          <img src={dryCleaning} alt='dry cleaning counter' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnRed}/>
              <span>Dry Cleaning</span>
            </h4>
            <p>
              <Highlight color={red} content={['Quality care', 'Pressing included']}/>
            </p>
          </div>
        </div>
        {/* FITTING ROOMS */}
        <div className={styles.card}>
          <img src={fittingRoom} alt='fitting rooms' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnTeal}/>
              <span>Fitting Rooms</span>
            </h4>
            <p>
              <Highlight color={teal} content={['Appointments available', 'Walk-ins welcome']}/>
            </p>
          </div>
        </div>
        {/* ALTERATIONS */}
        <div className={styles.card}>
          <img src={workspace} alt='workspace area' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnYellow}/>
              <span>Alterations</span>
            </h4>
            <p className={styles.outline}>
              <Highlight color={yellow} content={['All work done in house']}/>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { About };
