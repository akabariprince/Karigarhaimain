import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import AboutUs from '../pages/AboutUs';
import Blog from '../pages/Blog';
import Careers from '../pages/Careers';
import ContactUs from '../pages/ContactUs';
import HelpCenter from '../pages/HelpCenter';
import PressKit from '../pages/PressKit';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy';
import SafetyTrust from '../pages/SafetyTrust';
import TermsOfService from '../pages/TermsOfService';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/press-kit" element={<PressKit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/safety-trust" element={<SafetyTrust />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}
