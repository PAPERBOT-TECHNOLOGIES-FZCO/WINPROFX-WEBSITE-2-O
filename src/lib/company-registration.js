export const BRAND_NAME = 'WINPROFX'
export const LEGAL_ENTITY_NAME = 'Winprofx Ltd.'
export const COMPANY_TYPE = 'International Business Company'
export const JURISDICTION = 'Saint Lucia'
export const INCORPORATION_NUMBER = '2023-00197'
export const INCORPORATION_DATE = '31 May 2023'
export const INCORPORATION_LAW = 'International Business Companies Act, Cap. 12.14, Section 6'
export const REGISTERED_AGENT = 'Fortgate Offshore Investment and Legal Services Ltd.'
export const REGISTERED_OFFICE =
  'Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia'
export const DOCUMENT_TYPES =
  'Certificate of Incorporation, Memorandum of Association, and Articles of Association'
export const INCORPORATION_PDF_PATH = '/documents/winprofx-ltd-certified-incorporation-documents.pdf'
export const INCORPORATION_PDF_TITLE = 'Certified Incorporation Documents'

export const SHARE_CURRENCY = 'United States Currency / USD'
export const AUTHORIZED_SHARES = 'Unlimited number of shares'
export const ISSUED_SHARE_CLASS = 'Ordinary shares'
export const PAR_VALUE = 'USD 1.00 per share'
export const VOTING_RIGHTS = 'One vote per ordinary share'
export const SHARE_REDEMPTION_NOTE = 'Shares issued by the company are not redeemable on demand.'

export const INCORPORATION_CLARIFICATION =
  'The incorporation document confirms the legal formation of Winprofx Ltd. as an International Business Company in Saint Lucia. Company incorporation is different from a financial services license, forex broker license, CFD broker license, or regulatory authorization. Any regulatory or financial services license information, if applicable, should be verified separately through the Regulatory Information page and official regulator references.'

export const FINANCIAL_LICENSE_CLARIFICATION =
  'The incorporation of Winprofx Ltd. confirms the legal formation of the company. It does not by itself constitute a financial services license, forex broker license, CFD broker license, or regulatory authorization. If financial regulatory license information is applicable, it must be verified through official regulator records and will be published on this page with regulator name, license number, license type, jurisdiction, permitted activities, and verification link.'

export const FINANCIAL_LICENSE_PENDING =
  'Pending compliance verification / To be updated with verified regulatory license details if applicable.'

export const RISK_WARNING_SHORT =
  'Trading forex and CFDs involves significant risk and may not be suitable for all investors. Clients should understand the risks before trading.'

export const RISK_WARNING_FULL =
  'Trading forex and CFDs involves significant risk and may not be suitable for all investors. Market prices can move rapidly, and clients may lose part or all of their invested capital. Clients should understand the risks, consider their financial situation, and seek independent advice where necessary before trading.'

export const officialDomainsWithLabels = [
  {
    url: 'https://winprofx.org/',
    label: 'Main official WINPROFX website',
    external: false,
  },
  {
    url: 'https://winprofx.com/',
    label: 'Official alternate / marketing domain',
    external: true,
  },
  {
    url: 'https://winprofx.ae/',
    label: 'Official UAE / regional domain',
    external: true,
  },
  {
    url: 'https://my.winprofx.org/',
    label: 'Official client portal',
    external: true,
  },
  {
    url: 'https://partner.winprofx.org/',
    label: 'Official partner / IB portal',
    external: true,
  },
]

export const registrationDetailsRows = [
  { label: 'Brand Name', value: BRAND_NAME },
  { label: 'Legal Entity Name', value: LEGAL_ENTITY_NAME },
  { label: 'Company Type', value: COMPANY_TYPE },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
  { label: 'Incorporation Law', value: INCORPORATION_LAW },
  { label: 'Registered Agent', value: REGISTERED_AGENT },
  { label: 'Registered Office', value: REGISTERED_OFFICE },
  { label: 'Document Type', value: DOCUMENT_TYPES },
  {
    label: 'Official Website',
    value: 'https://winprofx.org/',
    href: 'https://winprofx.org/',
    external: false,
  },
  {
    label: 'Official Alternate Domain',
    value: 'https://winprofx.com/',
    href: 'https://winprofx.com/',
    external: true,
  },
  {
    label: 'Official UAE / Regional Domain',
    value: 'https://winprofx.ae/',
    href: 'https://winprofx.ae/',
    external: true,
  },
  {
    label: 'Client Portal',
    value: 'https://my.winprofx.org/',
    href: 'https://my.winprofx.org/',
    external: true,
  },
  {
    label: 'Partner Portal',
    value: 'https://partner.winprofx.org/',
    href: 'https://partner.winprofx.org/',
    external: true,
  },
]

export const legalEntitySummaryRows = [
  { label: 'Legal Entity', value: LEGAL_ENTITY_NAME },
  { label: 'Company Type', value: COMPANY_TYPE },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
  { label: 'Registered Agent', value: REGISTERED_AGENT },
  { label: 'Registered Office', value: REGISTERED_OFFICE },
]

export const shareCapitalRows = [
  { label: 'Share Currency', value: SHARE_CURRENCY },
  { label: 'Authorized Shares', value: AUTHORIZED_SHARES },
  { label: 'Issued Share Class', value: ISSUED_SHARE_CLASS },
  { label: 'Par Value', value: PAR_VALUE },
  { label: 'Voting Rights', value: VOTING_RIGHTS },
  { label: 'Share Redemption Note', value: SHARE_REDEMPTION_NOTE },
]

export const verifyLegalEntityRows = [
  { label: 'Brand', value: BRAND_NAME },
  { label: 'Legal Entity', value: LEGAL_ENTITY_NAME },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Company Type', value: COMPANY_TYPE },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
]

export const relatedPageLinks = [
  { path: '/legal-entity-information', label: 'Legal Entity Information' },
  { path: '/regulatory-information', label: 'Regulatory Information' },
  { path: '/legal-documents', label: 'Legal Documents' },
  { path: '/official-domains', label: 'Official Domains' },
  { path: '/verify-winprofx', label: 'Verify WINPROFX' },
  { path: '/risk-warning', label: 'Risk Warning' },
  { path: '/contact', label: 'Contact' },
]
