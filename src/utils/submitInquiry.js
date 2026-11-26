import { COMPANY } from '../data/company';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const DEFAULT_ACCESS_KEY = 'f3ca7a4a-a1aa-44b1-a2e7-7a4039c2a022';

/**
 * Submit a B2B inquiry or sample request via Web3Forms.
 * Throws an Error with a user-friendly message if submission fails.
 */
export async function submitInquiry({
  formData,
  inquiryType = 'Commercial Quote Request',
  source = 'Website Form',
  botcheck = ''
}) {
  if (botcheck) {
    return { success: true };
  }

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || DEFAULT_ACCESS_KEY;

  const payload = {
    access_key: accessKey,
    subject: `New ${inquiryType}: ${formData.product || formData.category} (${formData.company})`,
    from_name: `${COMPANY.name} Export Desk`,
    replyto: formData.email,
    botcheck,
    inquiry_type: inquiryType,
    source_page: source,
    name: formData.name,
    company: formData.company,
    email: formData.email,
    country: formData.country,
    phone: formData.phone || 'Not provided',
    product_division: formData.category,
    product: formData.product || 'Not specified',
    quantity: formData.quantity,
    message: formData.message || 'No additional notes provided'
  };

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Unable to submit inquiry right now. Please try again or email us directly.');
  }

  return data;
}
