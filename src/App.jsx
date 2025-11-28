import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import VendorsPage from "./pages/Vendorspage";
import VenuesPage from "./pages/VenuesPage";
import VenueDetailsPage from "./pages/VenueDetailsPage";
import InspirationPage from "./pages/InspirationPage";
import AiPlannerPage from "./pages/AiPlannerPage";
import VendorRegistrationPage from "./pages/VendorRegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/venues/:id" element={<VenueDetailsPage />} />
      <Route path="/vendor-registration" element={<VendorRegistrationPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/vendors" element={<VendorsPage />} />
        <Route path="/venues" element={<VenuesPage />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/ai-planner" element={<AiPlannerPage />} />
       
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
