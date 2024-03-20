import styles from './Services.module.css';
import dottedPaper from './dotted-paper.png';
import Button from '../Button/Button';

const Services = () => {
  const red = '--lee-red';
  const green = '--lee-green';
  const teal = '--lee-teal';

  return (
    <>
      <h3 className={styles.h3}>Services</h3>
      <section className={styles.container}>
        {/* TAILORING */}
        <div className={styles.servicesContainer}>
          <section className={`${styles.serviceCard} ${styles.sewingService}`}>
            <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
            <Button color={red} />
            <p className={styles.cardText}>
              Precise measurements              
            </p>
            <div className={styles.serviceName}>
              <span className={styles.markerHighlight}>Expert Tailoring</span>
            </div>
          </section>
          {/* ALTERATIONS */}
          <section className={`${styles.serviceCard} ${styles.sewingService}`}>
            <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
            <Button color={green} />
            <p className={styles.cardText}>
              Personalized to your needs
            </p>
            <div className={styles.serviceName}>
              <span className={styles.markerHighlight}>Alterations</span>
            </div>
          </section>
        </div>
        <div className={styles.servicesContainer}>
          {/* CLEANING */}
          <section className={`${styles.serviceCard} ${styles.cleaningService}`}>
            <img src={dottedPaper} alt="dotted sewing paper" className={styles.backgroundImage}/>
            <Button color={teal} />
            <div className={`${styles.services} ${styles.cardText}`}>
              <ul title="Services">
                <li className={styles.markerHighlight}>Dry Cleaning</li>
                <li className={styles.markerHighlight}>Dress Shirt Laundry</li>
                <li className={styles.markerHighlight}>Household Items</li>
                <li className={styles.markerHighlight}>Wedding Gowns</li>
                <li className={styles.markerHighlight}>Draperies</li>
                <li className={styles.markerHighlight}>Leathers and Furs</li>
                <li className={styles.markerHighlight}>Comforters</li>
                <li className={styles.markerHighlight}>Sheets</li>
            </ul>
            </div>
            <div className={styles.serviceName}>
              <span></span>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export { Services };