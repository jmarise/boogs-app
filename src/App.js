import './App.css';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/pages/Home'
import AboutUs from "./components/pages/aboutus";
import ContactUs from "./components/pages/contactus";

function App() {
  return (
    <>
      <div className="bg-boog-black h-screen overflow-hidden">
    <Router>
    
        <Navbar/>
        <div className="h-full overflow-auto">
        <Switch>
            <Route path ="/" exact component={Home} />
            <Route path ='/aboutus' component={AboutUs}/>
            <Route path='/contactus' component={ContactUs}/>
        </Switch>
        </div>
        <Footer />
        
    </Router>
    </div>
    </>
  );


}

export default App;
