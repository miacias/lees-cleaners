import fittingRoom from "/fitting-room-placeholder-amr-taha-PpkID3ejSig-unsplash.jpg"

const FittingRooms = () => {
  return (
    <div className="biz-block">
      <img src={fittingRoom} alt="fitting room" style={{width: '400px'}}/>
      <ul>
        <li>Measurement appointments available</li>
        <li>Walk-ins welcome</li>
      </ul>
    </div>
  );
}

export { FittingRooms };

