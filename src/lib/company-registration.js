export const BRAND_NAME = 'WINPROFX'
export const LEGAL_ENTITY_NAME = 'Winprofx Ltd.'
export const COMPANY_TYPE = 'International Business Company'
export const JURISDICTION = 'Saint Lucia'
export const INCORPORATION_NUMBER = '2023-00197'
export const INCORPORATION_DATE = '31 May 2023'
export const INCORPORATION_LAW = 'International Business Companies Act, Cap. 12.14, Section 6'
export const INCORPORATION_SUBSCRIBER = 'Fortgate Offshore Investment and Legal Services Ltd.'
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

export const PUBLISH_DUBAI_PII = false
export const PUBLISH_DUBAI_PDF = false

export const DUBAI_LICENSE_TYPE = 'Professional License'
export const DUBAI_LICENSE_NUMBER = '1423678'
export const DUBAI_BUSINESS_NAME = 'WINPROFX LTD - DUBAI BRANCH - REP. OFFICE'
export const DUBAI_BUSINESS_NAME_AR = 'وينبرفكس المحدودة - فرع دبي - مكتب تمثيل'
export const DUBAI_LEGAL_TYPE = 'Branch of Foreign Company'
export const DUBAI_LICENSE_CATEGORY =
  'Department of Economic Development / Dubai Department of Economy and Tourism'
export const DUBAI_ISSUE_DATE = '08/10/2024'
export const DUBAI_EXPIRY_DATE = '07/10/2026'
export const DUBAI_LICENSE_ACTIVITY = 'Representative Office'
export const DUBAI_ACTIVITY_STATUS = 'Active'
export const DUBAI_OWNER = 'WINPROFX LTD'
export const DUBAI_OWNER_JURISDICTION = 'Saint Lucia'
export const DUBAI_OWNER_SHARE = '100.00%'
export const DUBAI_MANAGER = 'PRADIP MAVJIBHAI CHHATRAYA MAVJIBHAI MULJIBHAI CHHATRAYA'
export const DUBAI_MANAGER_NATIONALITY = 'India'
export const DUBAI_MOBILE = '+971-55-4114621'
export const DUBAI_EMAIL = 'chetankachhiya@gmail.com'
export const DUBAI_PARCEL_ID = '335-356'
export const DUBAI_OFFICE_ADDRESS =
  'Office No. 1003, owned by Aseco Gulf Real Estate LLC Dubai Branch, Bur Dubai, Trade Center First'
export const DUBAI_PRINT_DATE = '18/10/2025'
export const DUBAI_RECEIPT_NUMBER = '16850228'
export const DUBAI_RENEWAL_PROCEDURE = 'Renew License'
export const DUBAI_PAYMENT_AMOUNT = 'Twenty Three Thousand Nine Hundred and Seventy Eight Dirhams'

export const DUBAI_VERIFICATION_NOTE =
  'The Dubai license document states that it is a certified e-document issued without signature by the Department of Economy and Tourism and can be verified by scanning the QR code on the original document.'

export const LICENSE_SCOPE_CLARIFICATION =
  'The Saint Lucia incorporation document confirms the legal formation of Winprofx Ltd. The Dubai Professional License confirms the Dubai branch / representative office registration and activity as a Representative Office. These documents should not be confused with a financial services broker license, forex broker license, CFD broker license, or investment services authorization unless separate regulator-issued financial services license details are published and verified.'

export const DUBAI_SCOPE_CLARIFICATION =
  'This Dubai Professional License lists the activity as Representative Office. A representative office license is different from a financial services broker license. Any financial services, forex broker, or CFD broker regulatory authorization should be verified separately through official regulatory records.'

export const INCORPORATION_CLARIFICATION =
  'The incorporation document confirms the legal formation of Winprofx Ltd. as an International Business Company in Saint Lucia. Company incorporation is different from a financial services license, forex broker license, CFD broker license, or regulatory authorization. Any regulatory or financial services license information, if applicable, should be verified separately through the Information page and official regulator references.'

export const FINANCIAL_LICENSE_CLARIFICATION =
  'The incorporation of Winprofx Ltd. confirms the legal formation of the company. It does not by itself constitute a financial services license, forex broker license, CFD broker license, or regulatory authorization. If financial regulatory license information is applicable, it must be verified through official regulator records and will be published on this page with regulator name, license number, license type, jurisdiction, permitted activities, and verification link.'

export const FINANCIAL_LICENSE_PENDING =
  'Financial regulatory license details are pending compliance verification and will be updated only after verification through official regulator records.'

export const OPS_PLACEHOLDER = 'To be updated by operations/compliance team.'

export const STATS_PLACEHOLDER = 'To be updated after operations verification.'

export const SUPPORT_EMAIL = 'support@winprofx.com'

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
    url: 'https://my.winprofx.com/',
    label: 'Official client portal',
    external: true,
  },
  {
    url: 'https://partner.winprofx.org/',
    label: 'Official partner / IB portal',
    external: true,
  },
]

export function getDubaiLicenseRows() {
  const rows = [
    { label: 'License Type', value: DUBAI_LICENSE_TYPE },
    { label: 'License Number', value: DUBAI_LICENSE_NUMBER },
    { label: 'Business Name', value: DUBAI_BUSINESS_NAME },
    { label: 'Arabic Business Name', value: DUBAI_BUSINESS_NAME_AR },
    { label: 'Legal Type', value: DUBAI_LEGAL_TYPE },
    { label: 'License Category', value: DUBAI_LICENSE_CATEGORY },
    { label: 'Issue Date', value: DUBAI_ISSUE_DATE },
    { label: 'Expiry Date', value: DUBAI_EXPIRY_DATE },
    { label: 'Main License Number', value: DUBAI_LICENSE_NUMBER },
    { label: 'License Activity', value: DUBAI_LICENSE_ACTIVITY },
    { label: 'Activity Status', value: DUBAI_ACTIVITY_STATUS },
    { label: 'Company Owner', value: DUBAI_OWNER },
    { label: 'Owner Jurisdiction / Nationality', value: DUBAI_OWNER_JURISDICTION },
    { label: 'Owner Share', value: DUBAI_OWNER_SHARE },
  ]

  if (PUBLISH_DUBAI_PII) {
    rows.push(
      { label: 'Manager', value: DUBAI_MANAGER },
      { label: 'Manager Nationality', value: DUBAI_MANAGER_NATIONALITY },
      { label: 'Mobile Number', value: DUBAI_MOBILE },
      { label: 'Email', value: DUBAI_EMAIL },
      { label: 'Receipt Number', value: DUBAI_RECEIPT_NUMBER },
      { label: 'Payment / Renewal Amount', value: DUBAI_PAYMENT_AMOUNT },
    )
  }

  return rows
}

export const dubaiOfficeRows = [
  { label: 'Dubai Office Address', value: DUBAI_OFFICE_ADDRESS },
  { label: 'Parcel ID', value: DUBAI_PARCEL_ID },
  { label: 'Print Date', value: DUBAI_PRINT_DATE },
  { label: 'Renewal Procedure', value: DUBAI_RENEWAL_PROCEDURE },
]

export const entityStructureRows = [
  { label: 'Foreign Company (Owner)', value: `${DUBAI_OWNER} (${JURISDICTION})` },
  { label: 'Legal Entity Name', value: LEGAL_ENTITY_NAME },
  { label: 'Dubai Branch Name', value: DUBAI_BUSINESS_NAME },
  { label: 'Dubai Legal Type', value: DUBAI_LEGAL_TYPE },
  { label: 'Dubai License Activity', value: DUBAI_LICENSE_ACTIVITY },
  { label: 'Dubai License Number', value: DUBAI_LICENSE_NUMBER },
]

export const verifySummaryRows = [
  { label: 'Brand', value: BRAND_NAME },
  { label: 'Legal Entity', value: LEGAL_ENTITY_NAME },
  { label: 'Saint Lucia Incorporation No.', value: INCORPORATION_NUMBER },
  { label: 'Dubai License No.', value: DUBAI_LICENSE_NUMBER },
  { label: 'Dubai Business Name', value: DUBAI_BUSINESS_NAME },
  { label: 'Dubai Activity', value: DUBAI_LICENSE_ACTIVITY },
  { label: 'Dubai License Status', value: DUBAI_ACTIVITY_STATUS },
  { label: 'Dubai Expiry Date', value: DUBAI_EXPIRY_DATE },
]

export const registrationDetailsRows = [
  { label: 'Brand Name', value: BRAND_NAME },
  { label: 'Legal Entity Name', value: LEGAL_ENTITY_NAME },
  { label: 'Company Type', value: COMPANY_TYPE },
  { label: 'Jurisdiction', value: JURISDICTION },
  { label: 'Incorporation Number', value: INCORPORATION_NUMBER },
  { label: 'Incorporation Date', value: INCORPORATION_DATE },
  { label: 'Incorporation Law', value: INCORPORATION_LAW },
  { label: 'Subscriber for Incorporation', value: INCORPORATION_SUBSCRIBER },
  { label: 'Registered Agent', value: REGISTERED_AGENT },
  { label: 'Registered Office', value: REGISTERED_OFFICE },
  { label: 'Document Set', value: DOCUMENT_TYPES },
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
    value: 'https://my.winprofx.com/',
    href: 'https://my.winprofx.com/',
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
  { label: 'Dubai Branch', value: DUBAI_BUSINESS_NAME },
  { label: 'Dubai License No.', value: DUBAI_LICENSE_NUMBER },
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

export const companyLicenseLinks = [
  { path: '/company-profile/', label: 'Company Profile' },
  { path: '/company-registration/', label: 'Company Registration' },
  { path: '/legal-entity-information/', label: 'Legal Entity Information' },
  { path: '/dubai-professional-license/', label: 'Dubai Professional License' },
  { path: '/uae-representative-office/', label: 'UAE Representative Office' },
  // { path: '/regulatory-information/', label: 'Information' },
  // { path: '/official-domains/', label: 'Official Domains' },
  { path: '/verify-winprofx/', label: 'Verify WINPROFX' },
  { path: '/legal-documents/', label: 'Legal Documents' },
]

export const trustSupportLinks = [
  { path: '/withdrawal-transparency/', label: 'Withdrawal Transparency' },
  { path: '/complaints-and-dispute-resolution/', label: 'Complaints and Dispute Resolution' },
  { path: '/client-fund-security/', label: 'Client Fund Security' },
  { path: '/support-and-escalation/', label: 'Support and Escalation' },
  { path: '/company-statistics/', label: 'Company Statistics' },
  { path: '/risk-warning/', label: 'Risk Warning' },
  { path: '/contact/', label: 'Contact' },
]

export const relatedPageLinks = [
  ...companyLicenseLinks.filter((l) => l.path !== '/company-profile/'),
  ...trustSupportLinks.filter((l) => !['/contact/', '/risk-warning/'].includes(l.path)),
]

export const withdrawalProcessRows = [
  {
    label: 'Withdrawal request submitted',
    value: 'Client submits withdrawal through the official client portal or approved support channel.',
  },
  {
    label: 'Standard review time',
    value: 'To be updated by operations/compliance team',
  },
  {
    label: 'Processing after approval',
    value: 'To be updated by operations/compliance team',
  },
  {
    label: 'Possible delay reasons',
    value: 'KYC verification, AML review, payment method verification, PSP/bank processing, blockchain confirmation, account security review, incomplete documentation',
  },
  {
    label: 'Escalation route',
    value: 'Contact support@winprofx.com or visit /support-and-escalation/',
  },
]

export const withdrawalMethodRows = [
  { label: 'Bank transfer', value: OPS_PLACEHOLDER },
  { label: 'Card refund (where applicable)', value: OPS_PLACEHOLDER },
  { label: 'Crypto / digital asset (where applicable)', value: OPS_PLACEHOLDER },
  { label: 'Other approved methods', value: OPS_PLACEHOLDER },
]

/** Per-method processing timeline (withdrawal-transparency page) */
export const withdrawalTimelineRows = [
  {
    label: 'Bank transfer',
    value: `Standard review: ${OPS_PLACEHOLDER} Processing after approval: ${OPS_PLACEHOLDER} Delays: KYC/AML, payment method verification, PSP/bank processing. Escalation: ${SUPPORT_EMAIL} or /support-and-escalation/`,
  },
  {
    label: 'Card refund (where applicable)',
    value: `Standard review: ${OPS_PLACEHOLDER} Processing after approval: ${OPS_PLACEHOLDER} Delays: KYC/AML, card verification, issuer processing. Escalation: ${SUPPORT_EMAIL} or /support-and-escalation/`,
  },
  {
    label: 'Crypto / digital asset (where applicable)',
    value: `Standard review: ${OPS_PLACEHOLDER} Processing after approval: ${OPS_PLACEHOLDER} Delays: KYC/AML, wallet verification, blockchain confirmation. Escalation: ${SUPPORT_EMAIL} or /support-and-escalation/`,
  },
  {
    label: 'Other approved methods',
    value: `Standard review: ${OPS_PLACEHOLDER} Processing after approval: ${OPS_PLACEHOLDER} Delays: As per method and compliance review. Escalation: ${SUPPORT_EMAIL} or /support-and-escalation/`,
  },
]

export const withdrawalDelayReasons = [
  'Incomplete KYC or outdated identity documents',
  'Mismatch between deposit and withdrawal payment method',
  'Pending AML or compliance review',
  'Incorrect wallet, bank, or payment details',
  'Payment service provider, bank, or blockchain processing delay',
  'Bonus, promotion, or trading terms review where applicable',
  'Account security verification or suspicious activity review',
]

export const withdrawalTransparencyStats = [
  { label: 'Monthly withdrawal requests processed', value: STATS_PLACEHOLDER },
  { label: 'Average withdrawal review time', value: STATS_PLACEHOLDER },
  { label: 'Median withdrawal review time', value: STATS_PLACEHOLDER },
  { label: 'Percentage completed within standard timeline', value: STATS_PLACEHOLDER },
  { label: 'Last updated', value: STATS_PLACEHOLDER },
]

export const complaintsProcessRows = [
  { label: 'Submit complaint', value: `Email ${SUPPORT_EMAIL} with subject line "Complaint" or use the official Contact page.` },
  { label: 'Information required', value: 'Full name, registered email, account/MT5 ID, ticket ID if available, date/time of issue, detailed description, supporting documents.' },
  { label: 'Acknowledgement', value: OPS_PLACEHOLDER },
  { label: 'Internal review', value: 'Support and compliance teams review the complaint and relevant account records.' },
  { label: 'Escalation', value: 'Unresolved complaints may be escalated to compliance/operations management.' },
  { label: 'Final response', value: OPS_PLACEHOLDER },
]

export const complaintsReviewSteps = [
  'Complaint received through official support channels',
  'Support acknowledgement and reference assignment where applicable',
  'Internal review by support and relevant account teams',
  'Compliance or operations review if required',
  'Response or resolution communicated to the client',
  'Escalation to management if the issue remains unresolved',
]

export const complaintsTimelineRows = [
  { label: 'Acknowledgement time', value: OPS_PLACEHOLDER },
  { label: 'Initial review time', value: OPS_PLACEHOLDER },
  { label: 'Escalation review time', value: OPS_PLACEHOLDER },
  { label: 'Final response target', value: OPS_PLACEHOLDER },
]

export const complaintsRequiredInfo = [
  'Full registered name',
  'Registered email address',
  'Account or MT5 ID',
  'Support ticket ID (if available)',
  'Detailed description of the issue',
  'Supporting screenshots or documents',
  'Date and time of the transaction or event',
]

export const ACCOUNT_SPECIFIC_PRIVACY_NOTE =
  'For security and privacy reasons, WINPROFX cannot discuss account-specific details publicly on review platforms or social media.'

export const PUBLIC_REVIEW_RESPONSE_POLICY =
  'When a complaint is posted publicly, WINPROFX may request ticket details or the registered email address through official support channels so the case can be reviewed securely.'

export const financialLicensePlaceholderRows = [
  { label: 'Regulator name', value: STATS_PLACEHOLDER },
  { label: 'License number', value: STATS_PLACEHOLDER },
  { label: 'License type', value: STATS_PLACEHOLDER },
  { label: 'Licensed entity', value: STATS_PLACEHOLDER },
  { label: 'Jurisdiction', value: STATS_PLACEHOLDER },
  { label: 'Permitted activities', value: STATS_PLACEHOLDER },
  { label: 'Status', value: STATS_PLACEHOLDER },
  { label: 'Official verification URL', value: STATS_PLACEHOLDER },
]

export const verifyTrustPageLinks = [
  // { path: '/company-registration/', label: 'Company Registration' },
  // { path: '/legal-entity-information/', label: 'Legal Entity Information' },
  // { path: '/dubai-professional-license/', label: 'Dubai Professional License' },
  // { path: '/uae-representative-office/', label: 'UAE Representative Office' },
  // { path: '/regulatory-information/', label: 'Information' },
  { path: '/withdrawal-transparency/', label: 'Withdrawal Transparency' },
  { path: '/complaints-and-dispute-resolution/', label: 'Complaints and Dispute Resolution' },
  { path: '/support-and-escalation/', label: 'Support and Escalation' },
  { path: '/client-fund-security/', label: 'Client Fund Security' },
  { path: '/risk-warning/', label: 'Risk Warning' },
  // { path: '/official-domains/', label: 'Official Domains' },
]

export const companyStatisticsItems = [
  { label: 'Active clients', value: STATS_PLACEHOLDER },
  { label: 'Countries served', value: STATS_PLACEHOLDER },
  { label: 'Trading instruments', value: STATS_PLACEHOLDER },
  { label: 'Withdrawal requests processed', value: STATS_PLACEHOLDER },
  { label: 'Average withdrawal review time', value: STATS_PLACEHOLDER },
  { label: 'Median withdrawal review time', value: STATS_PLACEHOLDER },
  { label: 'Percentage completed within standard timeline', value: STATS_PLACEHOLDER },
  { label: 'Support tickets handled', value: STATS_PLACEHOLDER },
  { label: 'Platform uptime', value: STATS_PLACEHOLDER },
  { label: 'Last updated', value: STATS_PLACEHOLDER },
]

export const footerTrustLegalLinks = [
  // { path: '/trust-center/', label: 'Trust Center' },
  // { path: '/company-profile/', label: 'Company Profile' },
  // { path: '/company-registration/', label: 'Company Registration' },
  // { path: '/legal-entity-information/', label: 'Legal Entity Information' },
  // { path: '/regulatory-information/', label: 'Information' },
  // { path: '/official-domains/', label: 'Official Domains' },
  // { path: '/verify-winprofx/', label: 'Verify WINPROFX' },
  { path: '/risk-warning/', label: 'Risk Warning' },
  { path: '/withdrawal-transparency/', label: 'Withdrawal Transparency' },
  { path: '/complaints-and-dispute-resolution/', label: 'Complaints' },
  { path: '/client-fund-security/', label: 'Client Fund Security' },
  { path: '/support-and-escalation/', label: 'Support and Escalation' },
  // { path: '/company-statistics/', label: 'Company Statistics' },
  // { path: '/dubai-professional-license/', label: 'Dubai Professional License' },
  // { path: '/uae-representative-office/', label: 'UAE Representative Office' },
  // { path: '/legal-documents/', label: 'Legal Documents' },
]

export const brandIntentPageLinks = [
  { path: '/is-winprofx-legit/', label: 'Is WINPROFX Legit?' },
  { path: '/winprofx-review/', label: 'WINPROFX Review' },
  { path: '/winprofx-withdrawal-process/', label: 'Withdrawal Process' },
  { path: '/winprofx-license-verification/', label: 'License Verification' },
  { path: '/winprofx-complaints/', label: 'Complaints' },
  { path: '/winprofx-fake-website-warning/', label: 'Fake Website Warning' },
  { path: '/winprofx-official-login/', label: 'Official Login' },
  { path: '/winprofx-deposit-and-withdrawal-methods/', label: 'Deposit & Withdrawal Methods' },
]
