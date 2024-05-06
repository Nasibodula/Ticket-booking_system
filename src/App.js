import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Host from './pages/HostEventForm';
import Contact from './Layouts/Contact';
import Landingpage from './Layouts/Landingpage';
import AllEvents from './Events/AllEvents';
import Attended from './Events/Attended';
import Hosted from './Events/Hosted';
import BookEvent from './Events/BookEvent';
import Login from './Layouts/Login';
import Signup from './Layouts/Signup';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        // <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/host' element={<Host/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/landingpage' element={<Landingpage/>}/>
          <Route path='/allevents' element={<AllEvents/>}/>
          <Route path='/events/attended' element={<Attended/>}/>
          <Route path='/events/hosted' element={<Hosted/>}/>
          <Route path='/events/book' element={<BookEvent/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>


        </Routes>

      </Router>
    </div>
  );
}

export default App;
