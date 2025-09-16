import Layout from '@/components/Layout'

export default function TermsOfService() {
  return (
    <Layout>
      <div className="pt-16">
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-heading font-bold text-dark mb-8">
                Terms of Service
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-GB')}
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Agreement to Terms
                </h2>
                <p className="text-gray-700 mb-6">
                  By accessing and using SaaSquatch's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Service Description
                </h2>
                <p className="text-gray-700 mb-4">
                  SaaSquatch provides web development, hosting, and related services including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Website design and development</li>
                  <li>E-commerce solutions</li>
                  <li>Custom software development</li>
                  <li>Web hosting and maintenance</li>
                  <li>SEO and digital marketing services</li>
                  <li>Technical support and consulting</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Service Plans and Pricing
                </h2>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Basic Static Site
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>£15/month on 12-month contract or £25/month rolling (30-day)</li>
                  <li>Up to 5 pages, mobile-responsive design, SSL certificate</li>
                  <li>Fast UK/EU hosting, 1 contact form, monthly backups</li>
                  <li>48-hour content updates</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  E-commerce Site
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>£20/month on 12-month contract or £50/month rolling (30-day)</li>
                  <li>Product catalogue, Stripe/PayPal integration, shipping rules</li>
                  <li>Inventory management, discount codes, SSL certificate</li>
                  <li>Monthly backups, 48-hour updates</li>
                </ul>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  Custom Software
                </h3>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>From £1,500 initial build fee + £50/month hosting</li>
                  <li>Minimum 12-month hosting term, no 30-day rolling option</li>
                  <li>Scoping workshop, architecture & UI design, staging environment</li>
                  <li>CI/CD pipeline, basic monitoring, SLA-backed support</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Payment Terms
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>All prices exclude VAT unless otherwise stated</li>
                  <li>Monthly fees are billed in advance</li>
                  <li>Payment is due within 14 days of invoice date</li>
                  <li>Late payments may result in service suspension</li>
                  <li>Third-party payment processor fees are additional</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Contract Terms and Cancellation
                </h2>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  Rolling Plans (30-day)
                </h3>
                <p className="text-gray-700 mb-4">
                  Rolling plans can be cancelled at any time before the next renewal date. Cancellation must be provided in writing (email acceptable) at least 7 days before the next billing cycle.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  Fixed Term Contracts (12-month)
                </h3>
                <p className="text-gray-700 mb-4">
                  Early termination of fixed-term contracts is subject to an early exit fee equal to 50% of the remaining contract value. This fee may be waived in exceptional circumstances at our discretion.
                </p>

                <h3 className="text-xl font-semibold text-dark mb-3">
                  Custom Software Hosting
                </h3>
                <p className="text-gray-700 mb-6">
                  Custom software hosting requires a minimum 12-month commitment. Early termination is subject to the full remaining hosting fees.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Service Level Agreement
                </h2>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li><strong>Uptime:</strong> 99.9% uptime guarantee</li>
                  <li><strong>Response Time:</strong> Support tickets responded to within 24 hours</li>
                  <li><strong>Content Updates:</strong> 48-hour turnaround for Basic/E-commerce, 24-hour for Custom</li>
                  <li><strong>Backups:</strong> Monthly automated backups included</li>
                  <li><strong>Security:</strong> SSL certificates and basic security monitoring included</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Client Responsibilities
                </h2>
                <p className="text-gray-700 mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Providing accurate and complete project requirements</li>
                  <li>Timely feedback and approval during development phases</li>
                  <li>Providing necessary content, images, and materials</li>
                  <li>Maintaining backups of important data</li>
                  <li>Complying with applicable laws and regulations</li>
                  <li>Ensuring content does not infringe on third-party rights</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Intellectual Property
                </h2>
                <p className="text-gray-700 mb-4">
                  Upon full payment, clients own:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Custom code and designs created specifically for their project</li>
                  <li>Content and materials provided by the client</li>
                </ul>
                <p className="text-gray-700 mb-6">
                  SaaSquatch retains rights to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-6">
                  <li>Pre-existing code, frameworks, and methodologies</li>
                  <li>Generic components and templates</li>
                  <li>Proprietary tools and systems</li>
                </ul>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-gray-700 mb-6">
                  SaaSquatch's liability is limited to the total amount paid by the client in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages, including but not limited to loss of profits, data, or business opportunities.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Data Protection and Privacy
                </h2>
                <p className="text-gray-700 mb-6">
                  We are committed to protecting your data in accordance with GDPR and UK data protection laws. Please see our Privacy Policy for detailed information about how we collect, use, and protect your information.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Force Majeure
                </h2>
                <p className="text-gray-700 mb-6">
                  We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, or government actions.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Dispute Resolution
                </h2>
                <p className="text-gray-700 mb-6">
                  Any disputes arising from these terms shall be resolved through binding arbitration in accordance with the rules of the London Court of International Arbitration. The governing law shall be English law.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Changes to Terms
                </h2>
                <p className="text-gray-700 mb-6">
                  We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of the modified terms.
                </p>

                <h2 className="text-2xl font-heading font-semibold text-dark mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-4">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Email:</strong> legal@saasquatch.co.uk
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Address:</strong> SaaSquatch, [Your Business Address], United Kingdom
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> [Your Phone Number]
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
