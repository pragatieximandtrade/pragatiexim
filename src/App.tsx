import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { QuoteModal } from './components/common/QuoteModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { QualityPage } from './pages/QualityPage';
import { CustomisationPage } from './pages/CustomisationPage';
import { PackagingPage } from './pages/PackagingPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ExportPage } from './pages/ExportPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SEOLandingPage } from './pages/SEOLandingPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [modalInitialProduct, setModalInitialProduct] = useState('');
  const [modalRequirementType, setModalRequirementType] = useState<'Domestic' | 'Export'>('Domestic');

  const handleOpenQuoteModal = (productName?: string, requirementType?: 'Domestic' | 'Export') => {
    setModalInitialProduct(productName || '');
    if (requirementType) setModalRequirementType(requirementType);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
    setModalInitialProduct('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-ivory-50 text-brand-charcoal-900 font-sans selection:bg-brand-green-700 selection:text-white">
      {/* Header Navigation */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Viewport */}
      <main className="flex-grow">
        <Routes>
          {/* Core Routes */}
          <Route path="/" element={<HomePage onOpenQuoteModal={handleOpenQuoteModal} />} />
          <Route path="/about" element={<AboutPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
          <Route path="/products" element={<ProductsPage onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />} />
          <Route path="/products/:slug" element={<ProductDetailPage onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />} />
          <Route path="/quality" element={<QualityPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
          <Route path="/customisation" element={<CustomisationPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
          <Route path="/packaging" element={<PackagingPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />
          <Route path="/industries" element={<IndustriesPage onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />} />
          <Route path="/export" element={<ExportPage onOpenQuoteModal={(reqType) => handleOpenQuoteModal('', reqType)} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenQuoteModal={() => handleOpenQuoteModal()} />} />

          {/* Dedicated High-Intent SEO Landing Pages */}
          <Route
            path="/spice-powder-manufacturer-india"
            element={<SEOLandingPage pageSlug="spice-powder-manufacturer-india" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />}
          />
          <Route
            path="/spice-exporter-india"
            element={<SEOLandingPage pageSlug="spice-exporter-india" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod, 'Export')} />}
          />
          <Route
            path="/spice-supplier-gujarat"
            element={<SEOLandingPage pageSlug="spice-supplier-gujarat" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />}
          />
          <Route
            path="/spice-supplier-surat"
            element={<SEOLandingPage pageSlug="spice-supplier-surat" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />}
          />
          <Route
            path="/bulk-spice-supplier"
            element={<SEOLandingPage pageSlug="bulk-spice-supplier" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />}
          />
          <Route
            path="/custom-spice-blends"
            element={<SEOLandingPage pageSlug="custom-spice-blends" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod || 'Custom Spice Blends')} />}
          />
          <Route
            path="/industrial-spice-supplier"
            element={<SEOLandingPage pageSlug="industrial-spice-supplier" onOpenQuoteModal={(prod) => handleOpenQuoteModal(prod)} />}
          />

          {/* Legal / Policy Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Global Interactive Overlays */}
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Global Quote Request Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialProduct={modalInitialProduct}
        initialRequirementType={modalRequirementType}
      />
    </div>
  );
};
