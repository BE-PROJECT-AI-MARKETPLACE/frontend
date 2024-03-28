import Home from './pages/Home.js';
import './App.css';
import Signup from './pages/Signup.js';
import Signin from './pages/Signin.js';
import AboutUs from './pages/AboutUs.js';
import NavBar from './components/NavBar.js';
import { Routes, Route } from 'react-router-dom';
import RequestForm from './pages/RequestForm.js';
import AIMarketplace from './pages/AIMarketplace.js';
import Footer from './components/Footer.js';
import AddServiceForm from './pages/AddServiceForm.js';
import FileUpload from './components/FileUpload.js';
import Request from './pages/Requests.js';
import AboutService from './pages/AboutService.js';
import UserDashboard from './pages/UserDashboard.js';

function App() {
  return (
    
    <div className="App">
      {/* <div className="bg-pattern-top"></div> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/aboutus' element={<AboutUs /> }/>
        <Route path='/requestform' element={<RequestForm/> } />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/requestform' element={<RequestForm />} />
        <Route path='/aimarketplace' element={<AIMarketplace />} /> 
        <Route path='/admin/addservice' element={<AddServiceForm />} />
        <Route path='/upload' element={<FileUpload />} />
        <Route path='/viewrequests' element={<Request /> }/>
        <Route path='/aboutservices' element={<AboutService /> }/>
        <Route path='/userdashboard' element={<UserDashboard /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;