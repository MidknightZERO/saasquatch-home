import Layout from '@/components/Layout'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-16">
        {/* Hero Section */}
        <section className="section bg-gradient-to-br from-pine-50 to-campfire-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
              Let's build something amazing together
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to grow your business with a website that works? Get in touch and let's discuss your project.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold text-dark mb-4">
                  Get your free quote
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
                </p>
              </div>

              <div className="card">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pine-400 to-campfire-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-dark mb-2">
                    24-hour response
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours with a detailed proposal and next steps.
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pine-400 to-campfire-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-dark mb-2">
                    Free consultation
                  </h3>
                  <p className="text-gray-600">
                    No obligation consultation to understand your needs and provide honest recommendations.
                  </p>
                </div>

                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pine-400 to-campfire-400 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-dark mb-2">
                    Quick start
                  </h3>
                  <p className="text-gray-600">
                    Most projects can start within 1-2 weeks of approval. We'll keep you updated every step of the way.
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
