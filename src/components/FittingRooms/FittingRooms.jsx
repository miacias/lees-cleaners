import fittingRoom from "/fitting-room-placeholder-amr-taha-PpkID3ejSig-unsplash.jpg"
import styles from './FittingRooms.module.css'

const FittingRooms = () => {
  return (
    <div className={`rooms ${styles.rooms}`}>
      <img src={fittingRoom} alt="fitting room" style={{width: '400px'}}/>
      <ul className={`info ${styles.info}`}>
        <li>Measurement appointments available</li>
        <li>Walk-ins welcome</li>
      </ul>
    </div>
  );
}

export { FittingRooms };

