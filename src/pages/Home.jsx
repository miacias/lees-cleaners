import { Header } from "../components/Header/Header";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Contact } from '../components/Contact/Contact';

const Home = () => {
  return (
    <>
    <Header/>
    {/* <img className='hanger' src={CoatHanger} alt="coat hanger with logo"/> */}
    <main className='main-content'>
      <Services/>
      <About/>
    </main>
    <Contact/>
    </>
  );
}

export { Home };