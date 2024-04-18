
import {Routes,Route,} from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import MyAccount from '../profile/MyAccount';
import MyBooking from '../profile/MyBooking';
import DashboardRedirection from '../components/DashboardRedirection';
import Admin from '../pages/Admin';
import Success from '../components/Success';


const Routers = () => {
  return  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/doctors' element={<Doctors/>}/>
   <Route path='/doctors/:id' element={<DoctorDetails/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/register' element={<Signup/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path='/services' element={<Services/>}/>
   <Route path='/user/profile' element={<MyAccount/>}/>
   <Route path='/user/profile/bookings' element={<MyBooking/>}/>
   <Route path='/redirect' element={<DashboardRedirection/>}/>
   <Route path='/admin' element={<Admin/>}/>
   <Route path='/success' element={<Success/>}/>




  </Routes>
   
  
};

export default Routers;