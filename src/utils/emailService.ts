/// <reference types="vite/client" />

/**
 * Utility for background email delivery via Web3Forms & mailto fallback
 */

export interface FormLeadData {
  name: string;
  companyName: string;
  businessEmail: string;
  phone: string;
  country: string;
  requirementType: string;
  product?: string;
  quantity?: string;
  packagingRequirement?: string;
  message?: string;
}

export const sendQuoteEmail = async (data: FormLeadData): Promise<boolean> => {
  const accessKey = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_WEB3FORMS_KEY || 'e39433d7-27b3-4623-a5b6-pragatiexim';
  
  const payload = {
    access_key: accessKey,
    subject: `🔥 NEW B2B QUOTE REQUEST: ${data.product || 'Spices'} - ${data.companyName}`,
    from_name: `${data.name} (${data.companyName})`,
    to_email: 'pragatiexim19@gmail.com, akshaymandani@pragatiexim.com, contact@pragatiexim.com',
    replyto: data.businessEmail,
    name: data.name,
    company: data.companyName,
    email: data.businessEmail,
    phone: data.phone,
    country: data.country,
    requirement_type: data.requirementType,
    product_required: data.product || 'Not specified',
    quantity: data.quantity || 'Not specified',
    packaging: data.packagingRequirement || 'Not specified',
    notes: data.message || 'None'
  };

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    const result = await res.json();
    return result.success === true;
  } catch (err) {
    console.warn('Background email dispatch error:', err);
    return false;
  }
};
