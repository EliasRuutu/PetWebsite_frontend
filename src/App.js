
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import SignInForm from "./SignIn/SignInForm";
import SignUpForm from "./SignUp/SignUpForm";
import IdTagsList from "./AssignManagement";
import BalanceOfClients from "./AssignManagement/BalanceOfClients"
import AssignedPetsList from './AssignManagement/AssignedPetsList';
import AssignSetting from "./AssignManagement/assign_setting"
import RegisterNewClient from './ProfileUpdate/RegisterNewClient';
import ClientAccount from './Account/ClientAccountInfo';
import PetAccount from './Account/PetAccountInfo';
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
          <Route path="/idtags" element={<IdTagsList />} />
          <Route path="/assign/:IdTag/:success?" element={<AssignSetting />} />
          <Route path="balanceofclient" element={<BalanceOfClients />} />
          <Route path="assignedpetslist" element={<AssignedPetsList />} />
          <Route path="registerNewClient" element={<RegisterNewClient />} />
          <Route path="/clientaccountinfo/:ProfileID" element={<ClientAccount />} />
          <Route path="/petaccountinfo/:ProfileID/:IdTag?" element={<PetAccount />} />
          <Route path="/createpetaccount/:ProfileID/:IdTagNumber?" element={<CreateAccount />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
