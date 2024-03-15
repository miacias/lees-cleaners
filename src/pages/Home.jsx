// import React from "react";
import { BizProfile } from "../components/BizProfile";
import { Header } from "../components/Header";
import { FittingRooms } from "../components/FittingRooms";
import { Storefront } from "../components/Storefront";

const Home = () => {
  return (
    <>
      <Header/>
      <h2>West Chester&apos;s favorite tailor since 1995.</h2>
      <BizProfile/>
      <Storefront/>
      <FittingRooms/>
      <aside>
        <div className="store-hours">
          <p>Store Hours</p>
        </div>
      </aside>
    </>
  );
}

export { Home };