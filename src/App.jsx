import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import HerbalPowdersPage from './pages/HerbalPowdersPage';
import BotanicalExtractsPage from './pages/BotanicalExtractsPage';
import ProductDetail from './pages/ProductDetail';
import CertificationsPage from './pages/CertificationsPage';
import GlobalExport from './pages/GlobalExport';
import ContactPage from './pages/ContactPage';
import BlogHub from './pages/BlogHub';
import BlogPost from './pages/BlogPost';
import SitemapPage from './pages/SitemapPage';
import LegalPage from './pages/LegalPage';
import NotFoundPage from './pages/NotFoundPage';

// ScrollToTop Helper on Route Change
function ScrollToTop() {
  const { pathname, search } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

export function AppShell() {
  const [rfqModalOpen, setRfqModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [requestType, setRequestType] = useState('quote');

  const handleOpenRfq = (product = null, type = 'quote') => {
    setSelectedProduct(product);
    setRequestType(type);
    setRfqModalOpen(true);
  };

  const handleCloseRfq = () => {
    setRfqModalOpen(false);
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-[#F9F8F3] text-gray-900 font-sans selection:bg-[#0D3B2E] selection:text-white">

        {/* Header Navigation */}
        <Header onOpenRfq={handleOpenRfq} />

        {/* Main Router Viewport */}
        <main className="flex-grow">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home onOpenRfq={handleOpenRfq} />} />

            {/* About Us */}
            <Route path="/about-us" element={<AboutPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/about-pragati-exim" element={<AboutPage onOpenRfq={handleOpenRfq} />} />

            {/* Herbal Powders Listing & 8 Detail Pages */}
            <Route path="/herbal-powders" element={<HerbalPowdersPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/herbal-powders/:slug" element={<ProductDetail onOpenRfq={handleOpenRfq} />} />

            {/* Botanical Extracts Listing & 42 Detail Pages */}
            <Route path="/botanical-extracts" element={<BotanicalExtractsPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/botanical-extracts/:slug" element={<ProductDetail onOpenRfq={handleOpenRfq} />} />

            {/* Certifications Page */}
            <Route path="/certifications" element={<CertificationsPage onOpenRfq={handleOpenRfq} />} />

            {/* Export Markets & Global Reach */}
            <Route path="/export-markets" element={<GlobalExport onOpenRfq={handleOpenRfq} />} />
            <Route path="/global-export" element={<GlobalExport onOpenRfq={handleOpenRfq} />} />

            {/* B2B Sourcing Resources & Guides */}
            <Route path="/resources" element={<BlogHub />} />
            <Route path="/resources/:slug" element={<BlogPost onOpenRfq={handleOpenRfq} />} />
            <Route path="/blog" element={<BlogHub />} />
            <Route path="/blog/:slug" element={<BlogPost onOpenRfq={handleOpenRfq} />} />

            {/* Contact & RFQ */}
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-quote" element={<ContactPage />} />

            {/* HTML Sitemap & Site Directory */}
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/site-directory" element={<SitemapPage />} />

            {/* Legal & Compliance */}
            <Route path="/privacy-policy" element={<LegalPage />} />
            <Route path="/terms-and-conditions" element={<LegalPage />} />
            <Route path="/terms" element={<LegalPage />} />

            {/* Backwards-Compatibility / Generic Routes */}
            <Route path="/products" element={<BotanicalExtractsPage onOpenRfq={handleOpenRfq} />} />
            <Route path="/products/:slug" element={<ProductDetail onOpenRfq={handleOpenRfq} />} />
            <Route path="/extracts/:slug" element={<ProductDetail onOpenRfq={handleOpenRfq} />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenRfq={handleOpenRfq} />

        {/* Global Interactive B2B RFQ Modal */}
        <RfqModal
          isOpen={rfqModalOpen}
          onClose={handleCloseRfq}
          initialProduct={selectedProduct}
          initialType={requestType}
        />

      </div>
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppShell />
      </Router>
    </HelmetProvider>
  );
}
