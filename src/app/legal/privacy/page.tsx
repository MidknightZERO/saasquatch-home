import Layout from '@/components/Layout'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="pt-16">
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-heading font-bold text-dark mb-8">
                Privacy Policy
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB')}
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Introduction
                </h2>
                <p className="text-gray-700 mb-6">
                  SaaSquatch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Personal Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Name and contact information (email address, phone number)</li>
                  <li>Business information (company name, industry)</li>
                  <li>Project details and requirements</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website information</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Provide and maintain our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our website and conducting our business (e.g., hosting providers, payment processors)</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger or acquisition, your information may be transferred to the new entity</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Data Security
                </h2>
                <p className="text-gray-700 mb-6">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Your Rights (GDPR)
                </h2>
                <p className="text-gray-700 mb-4">
                  If you are located in the European Union, you have certain rights under the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate data</li>
                  <li>Right to erasure ("right to be forgotten")</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to object to processing</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-gray-700 mb-6">
                  We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences. We use cookies for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Essential website functionality</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Marketing and advertising (with your consent)</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Data Retention
                </h2>
                <p className="text-gray-700 mb-6">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Third-Party Services
                </h2>
                <p className="text-gray-700 mb-4">
                  Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
                </p>
                <p className="text-gray-700 mb-6">
                  <strong>Third-party services we use include:</strong>
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Formspree (form submissions)</li>
                  <li>Stripe (payment processing)</li>
                  <li>Google Analytics (website analytics)</li>
                  <li>Cloudflare (CDN and security)</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-700 mb-6">
                  Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 mb-6">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> privacy@saasquatch.co.uk
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> SaaSquatch, [Your Business Address], United Kingdom
                  </p>
                  <p className="text-gray-700">
                    <strong>Data Protection Officer:</strong> dpo@saasquatch.co.uk
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
