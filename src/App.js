import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './components/pages/Home'
import AboutUs from "./components/pages/aboutus";
import ContactUs from "./components/pages/contactus";

function App() {
  return (
    <><Router>
        <Navbar/>
        <Switch>
            <Route path ="/" exact component={Home} />
            <Route path ='/aboutus' component={AboutUs}/>
            <Route path='/contactus' component={ContactUs}/>
        </Switch>
    </Router>
    </>
  );


}

export default App;
