import React from 'react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSection } from '../components/home/HeroSection';
import { TrustStrip } from '../components/home/TrustStrip';
import { AboutPreview } from '../components/home/AboutPreview';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { QualityBanner } from '../components/home/QualityBanner';
import { CustomisationPreview } from '../components/home/CustomisationPreview';
import { PackagingPreview } from '../components/home/PackagingPreview';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { DomesticExportSection } from '../components/home/DomesticExportSection';
import { CommercialTermsTable } from '../components/home/CommercialTermsTable';
import { HomeCTA } from '../components/home/HomeCTA';
import { getOrganizationSchema, getLocalBusinessSchema } from '../utils/seo';

interface HomePageProps {
  onOpenQuoteModal: (requirementType?: 'Domestic' | 'Export') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const schema = [getOrganizationSchema(), getLocalBusinessSchema()];

  return (
    <div>
      <SEOHead
        title="Spices Supplier in Dubai, UAE, USA & UK | Pure Spices Exporter | Pragati Exim"
        description="Pragati Exim is a leading Indian Spices Supplier & Exporter in Dubai, UAE, USA, UK, Saudi Arabia & global markets. Pure ground spices & custom blends from Surat, Gujarat."
        canonicalPath="/"
        productName="Spices"
        schema={schema}
      />

      {/* 14-Part Exact Conversion Flow */}
      <HeroSection onOpenQuoteModal={() => onOpenQuoteModal('Domestic')} />
      <TrustStrip />
      <AboutPreview />
      <CategoryGrid onOpenQuoteModal={() => onOpenQuoteModal('Domestic')} />
      <QualityBanner />
      <CustomisationPreview onOpenQuoteModal={() => onOpenQuoteModal('Domestic')} />
      <PackagingPreview />
      <IndustriesSection />
      <DomesticExportSection onOpenQuoteModal={(type) => onOpenQuoteModal(type || 'Domestic')} />
      <CommercialTermsTable />
      <HomeCTA />
    </div>
  );
};
