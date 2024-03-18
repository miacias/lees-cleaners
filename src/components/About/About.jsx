import styles from './About.module.css';
// import flag from './south-korean-flag.jpg';
import storefront from './lee-storefront.jpg';
import fittingRoom from "./lee-fitting-rooms.jpg";
import workspace from "/workspace-collab-media-upKXvfgKABY-unsplash.jpg";
import Button from '../Button/Button';
import Highlight from '../Highlights/Highlights';

const About = () => {
  const btnGreen = '--lee-green';
  const green = '21a02c';
  const btnRed = '--lee-red';
  const red = 'FD0D02';
  const btnTeal = '--lee-teal';
  const teal = '21A094';

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
            </p>
          </div>
        </div>
        {/* FITTING ROOMS */}
        <div className={styles.card}>
          <img src={fittingRoom} alt='fitting rooms' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnRed}/>
              <span>Fitting Rooms</span>
            </h4>
            <p>
              <Highlight color={red} content={['Measurement appointments available', 'Walk-ins welcome']}/>
            </p>
          </div>
        </div>
        {/* WORK SPACE */}
        <div className={styles.card}>
          <img src={workspace} alt='workspace area' />
          <div className={styles.cardContent}>
            <h4>
              <Button color={btnTeal}/>
              <span>Work Space</span>
            </h4>
            <p>
              <Highlight color={teal} content={['All alterations done on site']}/>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export { About };
