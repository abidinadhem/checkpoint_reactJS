import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './footer/Footer';
import Navigation from "./navigation/Navigation";
import Compo from "./compo/Compo";

function App() {
  return (
   <>
    <Navigation/>
    <Compo/>
    <Footer/>
   </>
  );
}

export default App;
