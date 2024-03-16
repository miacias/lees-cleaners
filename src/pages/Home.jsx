// import React from "react";
import { BizProfile } from "../components/BizProfile/BizProfile";
import { Header } from "../components/Header/Header";
import { FittingRooms } from "../components/FittingRooms/FittingRooms";
import { Storefront } from "../components/Storefront/Storefront";
import { HoursAndServices } from "../components/HoursAndServices/HoursAndServices";
import { Workspace } from "../components/Workspace/Workspace";
// import CoatHangerSVG from "../components/CoatHanger/CoatHanger";

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="lees">
        {/* <CoatHangerSVG/> */}
        <Header/>
        <BizProfile/>
      </div>
    </div>
      <div className='main-content'>
        <Storefront/>
        <FittingRooms/>
        <Workspace/>
      </div>
      <div className="aside-content">
        <HoursAndServices/>
      </div>
    </>
  );
}

export { Home };