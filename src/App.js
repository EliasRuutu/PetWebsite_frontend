import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";
import Management from "./Management/Management";
import BalanceOfClients from "./Management/BalanceOfClients"
import AssignedPetsList from './Management/AssignedPetsList';
import UpdateProfile from './ProfileUpdate/UpdateProfile';
import ClientAccount from './ClientAccount';
import CreateAccount from './CreateAccount' 

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="management" element={<Management />} />
          <Route path="balanceofclient" element={<BalanceOfClients />} />
          <Route path="assignedpetslist" element={<AssignedPetsList />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          <Route path="accountinfo" element={<ClientAccount />} />
          <Route path="createaccount" element={<CreateAccount />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
