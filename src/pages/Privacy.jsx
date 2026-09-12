import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import { ShieldCheck, Mail, Phone, Globe } from 'lucide-react';

const Privacy = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background transition-colors duration-300">
        <Container maxW="4xl">
          {/* Header */}
          <div className="mb-12 border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <ShieldCheck size={14} />
              <span>Privacy & Data Security</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-4">
              Privacy Policy
            </h1>
            <p className="text-secondary text-sm md:text-base font-mono">
              Last Updated: September 2026
            </p>
          </div>

          {/* Intro Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/80 mb-12 leading-relaxed text-secondary text-base">
            <p>
              At Blank Slate Technology (“Blank Slate Technology,” “we,” “us,” or “our”), we respect your privacy and are committed to handling personal information responsibly, securely, and transparently. This Privacy Policy explains how we may collect, use, store, share, and protect information when you visit our website, contact us, request a quotation, become a client, or use our technology and professional services. By using our website or providing information to us, you acknowledge the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Privacy Policy Content Sections */}
          <div className="space-y-10 text-secondary text-base leading-relaxed">
            
            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">01.</span> Who We Are
              </h2>
              <p className="mb-4">
                Blank Slate Technology is a technology services company providing services that may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Website design and development',
                  'Custom software development',
                  'Web and mobile applications',
                  'ERP and CRM solutions',
                  'E-commerce development',
                  'Cloud and deployment solutions',
                  'API integrations',
                  'Artificial Intelligence and automation',
                  'UI/UX and graphic design',
                  'Digital marketing and SEO',
                  'Technical support and IT consulting'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>We work with businesses and individuals in Pakistan and internationally.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">02.</span> Information We May Collect
              </h2>
              <p className="mb-4">The information we collect depends on how you interact with us.</p>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-surface/50 border border-border/60">
                  <h3 className="text-lg font-semibold text-primary mb-3">Information You Provide</h3>
                  <p className="mb-3 text-sm">You may provide information such as:</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 text-sm">
                    {[
                      'Full name',
                      'Business or company name',
                      'Email address',
                      'Phone or WhatsApp number',
                      'Country or general location',
                      'Job title or business role',
                      'Project requirements',
                      'Budget information',
                      'Messages and enquiries',
                      'Documents and files voluntarily provided',
                      'Billing and transaction-related information',
                      'Account or technical info needed for project'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs italic text-secondary">We ask Clients not to provide unnecessary sensitive personal information.</p>
                </div>

                <div className="p-5 rounded-xl bg-surface/50 border border-border/60">
                  <h3 className="text-lg font-semibold text-primary mb-3">Information Collected Automatically</h3>
                  <p className="mb-3 text-sm">
                    When you visit our website, certain technical information may be collected automatically through hosting infrastructure, analytics technologies, cookies, or similar tools. This may include:
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 text-sm">
                    {[
                      'IP address',
                      'Browser type',
                      'Device type',
                      'Operating system',
                      'Referring website or source',
                      'Pages visited',
                      'Approximate geographic region',
                      'Date and time of access',
                      'Website interactions',
                      'Technical logs and diagnostic information'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">03.</span> How We Use Your Information
              </h2>
              <p className="mb-4">We may process personal information where reasonably necessary to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Respond to enquiries',
                  'Prepare quotations and proposals',
                  'Communicate with prospective and existing Clients',
                  'Deliver contracted services',
                  'Manage projects and Client relationships',
                  'Process and maintain payment or billing records',
                  'Provide technical support',
                  'Maintain and improve our website',
                  'Monitor website performance',
                  'Detect fraud, abuse, or security threats',
                  'Maintain business and accounting records',
                  'Send relevant business or marketing communications',
                  'Meet legal, regulatory, contractual obligations',
                  'Establish, exercise, or defend legal claims'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>We do not use personal information for purposes materially unrelated to those for which it was collected without an appropriate basis.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">04.</span> Legal Bases Where Applicable
              </h2>
              <p className="mb-4">
                Where laws such as the UK GDPR or EU GDPR apply, we may process personal information based on one or more applicable legal bases, including:
              </p>
              <div className="space-y-3 text-sm">
                <p><strong className="text-primary">Contract:</strong> Where processing is necessary to enter into or perform a contract with you.</p>
                <p><strong className="text-primary">Legitimate Interests:</strong> Where processing is reasonably necessary for operating, securing, improving, or protecting our business and services, provided those interests are not overridden by applicable privacy rights.</p>
                <p><strong className="text-primary">Consent:</strong> Where you have provided valid consent for a particular processing activity.</p>
                <p><strong className="text-primary">Legal Obligation:</strong> Where processing is required to comply with applicable law.</p>
              </div>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">05.</span> Client and Project Data
              </h2>
              <p>
                During a project, Clients may provide us with business information, credentials, databases, customer information, files, or other data required to perform the agreed services. Where we process personal information solely on a Client's instructions as part of a service, the Client may be the relevant controller/business and Blank Slate Technology may act as a processor/service provider, depending on applicable law. Clients are responsible for ensuring that they have the appropriate legal authority to provide such information to us and instruct us to process it. For projects involving substantial personal data processing, the parties may enter into an appropriate Data Processing Agreement where required.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">06.</span> Payment Information
              </h2>
              <p>
                Payments may be processed through banks, payment providers, financial institutions, or third-party payment services. We generally do not directly store complete payment-card details when transactions are handled by an independent payment processor. Payment providers process information according to their own privacy and security practices. We may retain transaction records, invoices, payment references, and related accounting information where required for business, contractual, tax, or legal purposes.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">07.</span> Cookies and Similar Technologies
              </h2>
              <p className="mb-4">
                Our website may use cookies and similar technologies to support functionality, understand website usage, remember preferences, measure performance, and support marketing activities. Cookies may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Essential cookies',
                  'Functional cookies',
                  'Analytics cookies',
                  'Performance cookies',
                  'Advertising or marketing cookies, where used'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Where required by applicable law, non-essential cookies will be used subject to appropriate consent mechanisms. You may also manage certain cookies through your browser settings. Disabling some cookies may affect website functionality.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">08.</span> Website Analytics
              </h2>
              <p>
                We may use analytics tools to understand how visitors interact with our website. Analytics services may collect information such as page views, device information, approximate location, traffic sources, and website interactions. Such information helps us understand website performance and improve our services and user experience. Where third-party analytics providers are used, their processing is also governed by their applicable terms and privacy policies.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">09.</span> Contact Forms and Communications
              </h2>
              <p className="mb-4">
                When you contact Blank Slate Technology through a website form, email, WhatsApp, telephone, social media, or another communication channel, we may retain your contact details and correspondence to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Respond to your request',
                  'Provide quotations',
                  'Discuss projects',
                  'Maintain Client records',
                  'Provide support',
                  'Follow up on legitimate business enquiries'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>Communications made through third-party platforms are also subject to those platforms' respective privacy practices.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">10.</span> Marketing Communications
              </h2>
              <p>
                Where permitted by applicable law, we may contact existing or prospective Clients about relevant Blank Slate Technology services. Where consent is legally required, we will seek it before sending applicable direct marketing communications. You may request to stop receiving marketing communications from us at any time. Operational communications relating to an active project, transaction, security matter, or contractual relationship are not considered general marketing communications.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">11.</span> How We Share Information
              </h2>
              <p className="mb-4">We do not sell personal information to third parties. We may share information where reasonably necessary with:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Hosting and cloud providers',
                  'Email and communication providers',
                  'Analytics providers',
                  'Payment processors and financial institutions',
                  'Project management or collaboration platforms',
                  'Professional advisers',
                  'Contractors or service providers assisting delivery',
                  'Security and infrastructure providers',
                  'Government/regulatory authorities where required'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>We seek to disclose only information reasonably necessary for the relevant purpose.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">12.</span> Third-Party Services
              </h2>
              <p>
                Our website and services may integrate with third-party services, platforms, APIs, plugins, cloud providers, social networks, payment providers, analytics tools, or other external technologies. Those organizations may independently collect or process information according to their own privacy policies. Blank Slate Technology does not control the independent privacy practices of third-party services. We encourage users to review the privacy policies of relevant third-party providers.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">13.</span> International Data Processing
              </h2>
              <p>
                Because Blank Slate Technology works with international Clients and may use global technology providers, personal information may be processed or stored outside the country in which it was originally collected. Where applicable privacy laws require safeguards for international transfers, we will use appropriate contractual, organizational, or other legally recognized safeguards where required.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">14.</span> Data Retention
              </h2>
              <p className="mb-4">
                We retain personal information only for as long as reasonably necessary for the purposes for which it was collected or where retention is required for contractual, accounting, tax, security, dispute-resolution, or legal purposes. Retention periods may vary depending on:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Type of information',
                  'Client relationship',
                  'Project requirements',
                  'Legal obligations',
                  'Security requirements',
                  'Potential disputes or claims'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>When information is no longer reasonably required, we may securely delete, anonymize, or otherwise dispose of it, subject to technical and legal limitations.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">15.</span> Data Security
              </h2>
              <p className="mb-4">
                We take reasonable technical and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse. Measures may include:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Access controls',
                  'Secure authentication',
                  'Encryption technologies',
                  'Restricted admin access',
                  'Secure hosting',
                  'Software updates',
                  'Security monitoring',
                  'Backup procedures',
                  'Internal access limitations'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>However, no internet transmission, cloud platform, server, website, or electronic storage system can be guaranteed to be completely secure.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">16.</span> Client Credentials
              </h2>
              <p>
                Clients may provide temporary access to hosting accounts, websites, APIs, cloud services, social accounts, databases, or other systems where necessary for project delivery. Clients should use secure credential-sharing practices and, where appropriate, create temporary or limited-access accounts. We recommend changing or revoking temporary credentials after project completion.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">17.</span> Your Privacy Rights
              </h2>
              <p className="mb-4">
                Depending on your location and applicable law, you may have rights relating to your personal information, potentially including the right to:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Request access to your information',
                  'Request correction of inaccurate info',
                  'Request deletion in certain circumstances',
                  'Object to certain processing',
                  'Request restriction of processing',
                  'Withdraw consent where applicable',
                  'Request data portability',
                  'Opt out of marketing communications',
                  'Submit a complaint to data authority'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>These rights are not absolute and may be subject to legal exceptions. We may request reasonable information to verify your identity before processing a privacy-rights request.</p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">18.</span> UK and European Users
              </h2>
              <p>
                Where UK or European data protection laws apply to our processing, eligible individuals may exercise the rights provided under the applicable UK GDPR, EU GDPR, or related legislation. Where required, Blank Slate Technology will process applicable requests and implement relevant safeguards in accordance with the law that applies to the particular processing activity. Nothing in this Privacy Policy is intended to reduce rights that individuals have under mandatory applicable privacy law.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">19.</span> Children's Privacy
              </h2>
              <p>
                Our general business website and professional technology services are not intentionally directed toward young children. We do not knowingly seek to collect children's personal information through our general website without an appropriate lawful basis or authorization where required. If you believe a child has provided personal information to us inappropriately, please contact us.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">20.</span> Automated and AI Technologies
              </h2>
              <p>
                Some services we provide may incorporate artificial intelligence, automation, or third-party AI platforms. Where Client information is processed through an AI or automation service as part of a project, the specific processing may depend on the agreed solution and the relevant third-party provider. Clients should not submit highly sensitive, confidential, regulated, or personal information to AI systems unless the relevant solution has been appropriately evaluated and authorized for that purpose.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">21.</span> External Links
              </h2>
              <p>
                Our website may contain links to external websites or services. We are not responsible for the content, security, availability, or privacy practices of independent third-party websites. Visiting an external website is subject to that website's own policies and terms.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">22.</span> Business Transfers
              </h2>
              <p>
                If Blank Slate Technology is involved in a merger, acquisition, restructuring, sale of assets, or similar business transaction, relevant information may be transferred as part of that transaction where legally permitted and subject to applicable safeguards.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">23.</span> Legal Disclosure
              </h2>
              <p className="mb-4">We may disclose information where reasonably necessary to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Comply with applicable law',
                  'Respond to lawful legal processes',
                  'Protect our legal rights',
                  'Protect Clients or users',
                  'Investigate fraud or security incidents',
                  'Enforce contractual agreements',
                  'Prevent unlawful activity'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">24.</span> Data Breaches
              </h2>
              <p>
                If we become aware of a personal data breach affecting information for which we have relevant legal responsibilities, we will assess the incident and take reasonable responsive measures. Where applicable law requires notification to affected individuals, Clients, or regulatory authorities, notifications will be handled according to applicable requirements.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">25.</span> Privacy of Client-Owned Systems
              </h2>
              <p>
                Where Blank Slate Technology develops a website, application, ERP, CRM, e-commerce platform, or other system for a Client, that Client is generally responsible for establishing its own privacy policy and compliance framework for information it collects from its users after deployment, unless compliance services are expressly included in our agreement. Our Privacy Policy does not automatically become the privacy policy of software or websites developed for our Clients.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">26.</span> Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our services, technologies, business practices, or applicable legal requirements. The latest version will be published on our website with an updated “Last Updated” date. Material changes may be communicated through additional means where appropriate or legally required.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">27.</span> Relationship With Our Terms of Service
              </h2>
              <p>
                This Privacy Policy should be read together with our Terms of Service and any applicable project-specific agreement. Where a separate Data Processing Agreement or Client contract applies to particular personal data processing, that agreement may contain additional or more specific requirements.
              </p>
            </section>

            {/* Contact Box */}
            <section className="scroll-mt-28 p-6 md:p-8 rounded-2xl bg-surface border border-accent/30 mt-12">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">28.</span> Contact Us
              </h2>
              <p className="mb-4">
                For questions, concerns, or requests relating to this Privacy Policy or the way we handle personal information, please contact:
              </p>
              <div className="space-y-2 text-sm text-primary font-medium mb-4">
                <p className="font-semibold text-base text-accent">Blank Slate Technology</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-accent" /> info@blankslatetechnology.com</p>
                <p className="flex items-center gap-2"><Phone size={16} className="text-accent" /> 0332 0901442</p>
                <p className="flex items-center gap-2"><Globe size={16} className="text-accent" /> www.BlankSlateTechnology.com</p>
              </div>
              <p className="text-xs text-secondary italic">
                For privacy-rights requests, please clearly identify the nature of your request so that we can respond appropriately. Blank Slate Technology is committed to responsible technology, transparent data practices, and protecting the trust of our Clients and website visitors.
              </p>
            </section>

          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Privacy;
