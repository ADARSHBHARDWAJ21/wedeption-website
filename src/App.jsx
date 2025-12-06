import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

/* Existing Pages */
import HomePage from "./components/HomePage";
import VendorsPage from "./pages/Vendorspage";
import VenuesPage from "./pages/VenuesPage";
import VenueDetailsPage from "./pages/VenueDetailsPage";
import InspirationPage from "./pages/InspirationPage";
import AiPlannerPage from "./pages/AiPlannerPage";

/* OLD vendor pages (optional) */
import VendorRegistrationPage from "./pages/VendorRegistrationPage";
import VendorLoginPage from "./pages/VendorLoginPage";
import VendorOtpPage from "./pages/VendorOtpPage";

/* NEW vendor system pages */
import VendorAuth from "./pages/VendorAuth";
import VendorRegister from "./pages/VendorRegistrationPage";
import VendorDashboard from "./pages/VendorDashboard";
import VendorPayment from "./pages/VendorPayment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        {/* Main user routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/venues/:id" element={<VenueDetailsPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/ai-planner" element={<AiPlannerPage />} />

        {/* OLD vendor routes (you can delete later if not needed) */}
        <Route path="/vendor-registration" element={<VendorRegistrationPage />} />
        <Route path="/vendor-login" element={<VendorLoginPage />} />
        <Route path="/vendor-otp" element={<VendorOtpPage />} />

        {/* NEW vendor system routes */}
        <Route path="/vendor/auth" element={<VendorAuth />} />
        <Route path="/vendor/register" element={<VendorRegister />} />
        <Route path="/vendor/dashboard" element={<VendorDashboard />} />
        <Route path="/vendor/payment" element={<VendorPayment />} />

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div style={{ padding: "40px", textAlign: "center" }}>
              <h2>404 – Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

