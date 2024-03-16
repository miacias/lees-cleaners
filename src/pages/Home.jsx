// import React from "react";
import { BizProfile } from "../components/BizProfile/BizProfile";
import { Header } from "../components/Header/Header";
import { FittingRooms } from "../components/FittingRooms/FittingRooms";
import { Storefront } from "../components/Storefront/Storefront";
import { HoursAndServices } from "../components/HoursAndServices/HoursAndServices";
import CoatHangerSVG from "../components/CoatHanger/CoatHanger";

const Home = () => {
  return (
    <>
      <CoatHangerSVG/>
      <Header/>
      <div className="content">
        {/* <h2>West Chester&apos;s favorite tailor since 1995.</h2> */}
        <BizProfile/>
        <Storefront/>
        <FittingRooms/>
      </div>
      <div className="content">
        <HoursAndServices/>
      </div>
    </>
  );
}

export { Home };