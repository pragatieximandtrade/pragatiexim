import { COMPANY_DATA } from '../data/company';

export interface WhatsAppMessageOptions {
  productName?: string;
  quantity?: string;
  requirementType?: 'Domestic' | 'Export';
  packaging?: string;
  companyName?: string;
  customNotes?: string;
}

export function generateWhatsAppUrl(options?: WhatsAppMessageOptions): string {
  const number = COMPANY_DATA.contact.whatsappNumber;
  
  if (!options || (!options.productName && !options.requirementType && !options.companyName)) {
    const defaultText = encodeURIComponent(
      `Hello Pragati Exim Team,\n\nI am interested in sourcing pure spices and custom blends for my food business. Please share your commercial product catalogue and quotation details.\n\nThank you!`
    );
    return `https://wa.me/${number}?text=${defaultText}`;
  }

  const lines = [
    `Hello Pragati Exim Team,`,
    ``,
    `I would like to request a quotation with the following requirement:`,
    options.companyName ? `• Company: ${options.companyName}` : null,
    options.requirementType ? `• Requirement Type: ${options.requirementType} Supply` : null,
    options.productName ? `• Product: ${options.productName}` : null,
    options.quantity ? `• Estimated Volume: ${options.quantity}` : null,
    options.packaging ? `• Preferred Packaging: ${options.packaging}` : null,
    options.customNotes ? `• Specification / Notes: ${options.customNotes}` : null,
    ``,
    `Kindly share pricing, lead times, and specification sheet.`,
    `Thank you!`
  ].filter(line => line !== null).join('\n');

  return `https://wa.me/${number}?text=${encodeURIComponent(lines)}`;
}
