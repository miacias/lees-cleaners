import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { FittingRooms } from "../components/FittingRooms/FittingRooms";
import { Storefront } from "../components/Storefront/Storefront";
import { Workspace } from "../components/Workspace/Workspace";
import { Contact } from '../components/Contact/Contact';
// import { Button } from '../components/Button/Button'
// import CoatHanger from '/lees-cleaners-coat-hanger.png';

const Home = () => {
  return (
    <>
    <Header/>
    {/* <img className='hanger' src={CoatHanger} alt="coat hanger with logo"/> */}
    <main className='main-content'>
      <Services/>
      <About/>
      <Storefront/>
      <FittingRooms/>
      <Workspace/>
    </main>
    <Contact/>
    </>
  );
}

export { Home };