import { Header } from "../components/Header/Header";
import { Services } from "../components/Services/Services";
import { FittingRooms } from "../components/FittingRooms/FittingRooms";
import { Storefront } from "../components/Storefront/Storefront";
// import { HoursAndServices } from "../components/HoursAndServices/HoursAndServices";
import { Workspace } from "../components/Workspace/Workspace";
// import CoatHangerSVG from "../components/CoatHanger/CoatHanger";
// import CoatHanger from '../components/BizProfile/lees-cleaners-coat-hanger.png'
import { Contact } from '../components/Contact/Contact'

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="lees">
        {/* <img className='hanger' src={CoatHanger} alt="coat hanger with logo"/> */}
        {/* <CoatHangerSVG/> */}
        <Header/>
      </div>
    </div>
    <main className='main-content'>
      <Services/>
      <Storefront/>
      <FittingRooms/>
      <Workspace/>
    </main>
    {/* <div className="sidebar-content">
      <HoursAndServices/>
    </div> */}
    <Contact/>
    </>
  );
}

export { Home };