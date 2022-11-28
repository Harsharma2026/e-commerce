import logo from './logo.svg';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Landing from './pages/Landing';
import Redirect from './pages/Redirect';


import { useAuth } from './context/authContext';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import Loading from './pages/Loading';
import { setAxiosDefault, setToken } from './axiosDefault';
import NotFound from './pages/404';
import Cart from './pages/Cart';
import Genie from './pages/Genie';
import Address from './pages/Address';
function App() {
  const {user} = useAuth();
  setAxiosDefault();
  if(user?.token) setToken(user.token)
  return (
    <div className='w-screen h-screen grid'>
    <React.Suspense fallback={
      <Loading/>
    }>
      {
        !user?
          <Routes>
            <Route path='/login' element={<Signup/>}/>
            <Route path='/signup' element={<Login/>}/>
            <Route path='*' element={<Redirect/>}/>
          </Routes>
        :
          <Routes>
            <Route path='/h' element={<Landing/>}/>
            
            <Route path='/cart' element={<Cart/>}/>
            
            <Route path='/genie' element={<Genie/>}/>
            <Route path='/address' element={<Address/>}/>
            {/* <Route path='/settings' element={<Signup/>}/> */}
            
            <Route path='/login' element={<Redirect/>}/>
            <Route path='/signup' element={<Redirect/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
      }
    </React.Suspense>
    </div>
  );
}

export default App;
