import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom'
import AcRepair from './Components/AcRepair';
import Login from './Components/Login/Login';
import Technician from './Components/Technician/Technician';
import OrdersPage from './Components/Orders/Orders';
import AdminLogin from './Components/Admin/AdminLogin';

function App() {
  return (
    <div className="App">
   <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='/acRepair' element={<AcRepair/>}/>
      <Route path='/technician' element={<Technician/>}/>
      <Route path="/ordersAdmin"  element={<OrdersPage/>}/>
      <Route path="/adminLogin" element={<AdminLogin/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
