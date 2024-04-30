import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/pages/Home'
import AboutUs from "./components/pages/aboutus";
import ContactUs from "./components/pages/contactus";
import Master from "./components/pages/mastering";
import Beats from "./components/pages/beats";
import Particles from "react-tsparticles";
import { loadFull  } from "tsparticles";
import {useCallback} from "react";
import { loadSlim } from "tsparticles-slim"
function App() {


        return (
            <>
                <div className="bg-boog-black-v2 justify-center items-center h-screen">
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path='/aboutus' component={AboutUs}/>
                            <Route path='/contactus' component={ContactUs}/>
                            <Route path='/mastering' component={Master}/>
                            <Route path='/beats' component={Beats}/>
                        </Switch>
                        <Footer/>
                    </Router>
                </div>
            </>
        );
}

export default App;
