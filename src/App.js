import './App.css';
import {
  useState,
  useEffect
} from 'react';
import {
  AuthProvider
} from './context/AuthContext.js';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import {
  NavBar,
  Footer,
  FileUpload,
  ProtectedRoute
} from './components';
import {
  Home,
  Signup,
  Signin,
  AboutUs,
  RequestForm,
  AIMarketplace,
  AddServiceForm,
  Requests,
  AboutService,
  UserDashboard
} from './pages';

function App() {
  //const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <AuthProvider>
      <div className="App">
        {/* <div className="bg-pattern-top"></div> */}
        {loading ? (
          <div className="loader-container">
            <div className="spinner"></div>
          </div>
        ) :
          (
            <div>

              <NavBar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/signin' element={<Signin />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/aimarketplace' element={<AIMarketplace />} />
                <Route path='/admin/addservice' element={<ProtectedRoute/>}>
                  <Route path='/admin/addservice' element={<AddServiceForm />} />
                </Route>
                <Route path='/requestform' element={<ProtectedRoute />}>
                  <Route path='/requestform' element={<RequestForm />} />
                </Route>
                <Route path='/viewrequests' element={<ProtectedRoute />}>
                  <Route path='/viewrequests' element={<Requests />} />
                </Route>
                <Route path='/aboutservice/:id' element={<ProtectedRoute />}>
                  <Route path='/aboutservice/:id' element={<AboutService />} />
                </Route>
                <Route path='/userdashboard' element={<ProtectedRoute />}>
                  <Route path='/userdashboard' element={<UserDashboard />} />
                </Route>
                <Route path='*' element={<Navigate to="/" />} />
                <Route path='/upload' element={<FileUpload />} />
              </Routes>
              <Footer />
            </div>
          )}
      </div>
    </AuthProvider>
  );
}

export default App;