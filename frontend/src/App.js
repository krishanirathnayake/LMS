
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard.jsx';
import Summary from './components/Summary';
import Holidays from './components/Holidays';
import AllEmployees from './pages/AllEmployees';
import Login from './components/Login.jsx';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './components/Resetpasswordrequest.jsx';
import Profile from './pages/Profile.jsx';
import AddNewEmployee from './pages/AddNewEmployee.jsx';
import './App.css';
import DashboardLayout from './pages/DashboardLayout.jsx';
import EditProfile from './pages/EditProfile.jsx';
import ApplyLeave from './pages/ApplyLeave.jsx';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/resetpasswordrequest" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<DashboardLayout />} />
        <Route path="summary" element={<Summary />} />
        <Route path="holidays" element={<Holidays />} />
        <Route path="profile" element={<Profile />} />
        <Route path="all-employees" element={<AllEmployees />} />
        <Route path="add-new-employee" element={<AddNewEmployee />} />
        <Route path="edit-profile" element={<EditProfile />} />
        <Route path="apply-leave" element={<ApplyLeave />} /> </Route>

      </Routes>
    </Router>
  );
}

export default App;
