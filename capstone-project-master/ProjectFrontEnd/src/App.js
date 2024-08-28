import "./App.css";
import HomeComponent from "./components/HomeComponent/HomeComponent";
import Login from "./components/LoginComponent/Login";
import Register from "./components/RegisterComponent/Register";
import Dashboard from "./components/DashboardComponent/Dashboard";
import Card from "./components/CardComponent/Card";
import Loan from "./components/LoanComponent/Loan";
import Offer from "./components/OfferComponent/Offer";
import Layout from "./layout/Layout";
import { AuthProvider } from "./Auth/auth";
import PartialPaymentPopup from "./components/LoanComponent/Loans/LoanCalculator/PartialPaymentPopup";
import Aboutus from "./components/AboutusComponent/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { RequireAuth } from "./Auth/RequireAuth";
import ManageLoans from "./components/DashboardComponent/ManageYourLoan/ManageLoans";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeComponent />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/dash"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route exact path="/card" element={<Card />} />
            <Route exact path="/loan" element={<Loan />} />
            <Route exact path="/offers" element={<Offer />} />
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route exact path='/partialPaymentPopup' element={<PartialPaymentPopup/>}/>
            <Route exact path="/manageloans" element={<ManageLoans />} />

            {/* <Route exact path="/userProfile" element={<UserProfile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
