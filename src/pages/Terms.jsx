import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import Container from '../components/ui/Container';
import { ShieldCheck, FileText, Mail, Phone, Globe } from 'lucide-react';

const Terms = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background transition-colors duration-300">
        <Container maxW="4xl">
          {/* Header */}
          <div className="mb-12 border-b border-border pb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText size={14} />
              <span>Legal Document</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-semibold text-primary mb-4">
              Terms of Service
            </h1>
            <p className="text-secondary text-sm md:text-base font-mono">
              Last Updated: September 2026
            </p>
          </div>

          {/* Intro Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface border border-border/80 mb-12 leading-relaxed text-secondary text-base">
            <p>
              Welcome to Blank Slate Technology (“Blank Slate Technology,” “we,” “us,” or “our”). These Terms of Service (“Terms”) govern the provision of our technology, software, development, design, marketing, consulting, and related professional services to individuals, businesses, and organizations in Pakistan and internationally. By accepting a proposal or quotation, making a payment, signing an agreement, approving commencement of work, or otherwise engaging our services, the client (“Client,” “you,” or “your”) agrees to these Terms, unless a separately signed written agreement expressly states otherwise.
            </p>
          </div>

          {/* Terms Content Sections */}
          <div className="space-y-10 text-secondary text-base leading-relaxed">
            
            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">01.</span> Our Services
              </h2>
              <p className="mb-4">Blank Slate Technology may provide services including, but not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-2 mb-4">
                {[
                  'Website design and development',
                  'Custom software development',
                  'Web and mobile applications',
                  'E-commerce solutions',
                  'ERP and CRM systems',
                  'UI/UX and graphic design',
                  'Cloud and deployment solutions',
                  'API and third-party integrations',
                  'AI solutions and automation',
                  'Digital marketing and SEO',
                  'Maintenance and technical support',
                  'IT consulting and other technology services'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-secondary">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The exact scope, deliverables, timeline, pricing, and technical requirements of each project will be defined in the applicable proposal, quotation, invoice, statement of work, email confirmation, or other written project documentation.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">02.</span> Project Scope
              </h2>
              <p>
                We will perform only the work included in the agreed project scope. Any feature, page, integration, functionality, design variation, revision, migration, content entry, or other requirement not included in the original scope may be treated as additional work and may require additional charges and additional delivery time. Client requests made during development do not automatically become part of the original scope. We will inform the Client where a requested change materially affects cost, timeline, or project requirements.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">03.</span> Quotations and Proposals
              </h2>
              <p>
                Unless otherwise stated, quotations and proposals are valid only for the period specified in them. Pricing is based on the information and requirements available when the quotation is prepared. If requirements change, Blank Slate Technology reserves the right to revise the price and delivery schedule. Estimates are not guaranteed fixed prices unless expressly identified as fixed-price quotations.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">04.</span> Payments
              </h2>
              <p>
                Payment schedules will be specified in the relevant proposal, invoice, quotation, or agreement. Unless otherwise agreed in writing, an advance payment may be required before work begins. Advance payments reserve development resources and initiate project work. Once work has commenced, payments already made are generally non-refundable to the extent they correspond to work performed, resources allocated, third-party costs incurred, or commitments made for the project. Milestone payments must be made when the relevant milestone becomes due. Blank Slate Technology may pause development, deployment, support, or delivery if an invoice becomes overdue. The Client may not withhold an undisputed payment because of requirements outside the agreed scope.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">05.</span> Taxes, Bank Fees and International Payments
              </h2>
              <p>
                Unless expressly stated otherwise, quoted prices exclude applicable taxes, duties, withholding taxes, bank charges, payment gateway fees, currency conversion charges, and international transfer fees. The Client is responsible for payment-related charges imposed by their bank, payment provider, government, or jurisdiction, except taxes imposed directly on Blank Slate Technology's own income where applicable. Where withholding is legally required, the Client should provide appropriate evidence or documentation of the withholding where reasonably requested.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">06.</span> Client Responsibilities
              </h2>
              <p className="mb-4">
                The Client is responsible for providing all information and resources reasonably required to complete the project, including where applicable:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Content and copy',
                  'Images, videos and branding assets',
                  'Logos and brand guidelines',
                  'Product/service information',
                  'Domain and hosting access',
                  'API credentials',
                  'Third-party account access',
                  'Technical requirements',
                  'Timely approvals and feedback'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                The Client represents that they have the legal right to provide and authorize the use of all materials supplied to Blank Slate Technology. We are not responsible for copyright, trademark, privacy, licensing, regulatory, or other legal issues arising from materials, instructions, claims, or content supplied or specifically required by the Client.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">07.</span> Client Delays
              </h2>
              <p>
                Project timelines depend on timely Client communication, feedback, approvals, payments, content, and access. If the Client delays providing required materials, approvals, access, feedback, or payments, project deadlines may automatically be extended accordingly. Significant inactivity may require the project to be rescheduled based on our team's availability. Where a Client remains unresponsive for an extended period, we may place the project on hold. Restarting an inactive project may be subject to revised scheduling or additional charges where additional work or resource allocation is required.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">08.</span> Revisions and Change Requests
              </h2>
              <p>
                The number and type of revisions included in a project will be determined by the relevant proposal or scope. Revisions must remain within the originally approved concept and scope. A request that substantially changes an approved design, workflow, functionality, architecture, or business requirement may constitute a change request rather than a revision. Additional revisions and change requests may be quoted separately.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">09.</span> Project Timelines
              </h2>
              <p className="mb-4">
                Any delivery date provided by Blank Slate Technology is a good-faith estimate unless expressly agreed as a guaranteed deadline in writing. Timelines may be affected by:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2 mb-4 text-sm">
                {[
                  'Client delays',
                  'Scope changes',
                  'Third-party services',
                  'API limitations',
                  'Hosting or infrastructure issues',
                  'Technical dependencies',
                  'Platform approval processes',
                  'Force majeure events',
                  'Circumstances reasonably outside our control'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Blank Slate Technology will not be liable for delays caused by such circumstances.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">10.</span> Project Acceptance
              </h2>
              <p>
                The Client is responsible for reviewing deliverables and reporting material issues within the review or acceptance period specified for the project. Where no specific acceptance period has been agreed, the Client should notify us of material issues within a reasonable period following delivery. Use of a completed deliverable in a live or production environment may be treated as acceptance of that deliverable, subject to any expressly agreed warranty obligations.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">11.</span> Intellectual Property and Ownership
              </h2>
              <p>
                Unless otherwise agreed in writing, Blank Slate Technology retains ownership of its pre-existing intellectual property, development methods, know-how, frameworks, libraries, utilities, reusable components, templates, internal tools, generic code, and other materials developed independently of the Client's project. Upon full payment of all amounts due for the project, the Client receives the ownership or usage rights to the final custom deliverables specified in the applicable project agreement, subject to any third-party and pre-existing intellectual property incorporated into them. No transfer of ownership in unpaid deliverables occurs until all applicable project invoices have been paid in full. Third-party software, plugins, themes, libraries, fonts, APIs, stock assets, open-source software, and similar materials remain subject to their respective licences.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">12.</span> Source Code and Project Files
              </h2>
              <p>
                Source code, design source files, documentation, credentials, databases, and other project assets will be provided only where they are included in the agreed deliverables. Delivery of a website or application does not automatically include every internal working file, reusable library, proprietary tool, development environment, or licensed third-party asset used to produce it. Where source-code transfer is included, it will occur according to the project agreement and normally after full payment.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">13.</span> Third-Party Services
              </h2>
              <p>
                Projects may rely on third-party products and services such as hosting providers, domain registrars, cloud platforms, payment gateways, APIs, plugins, themes, email providers, advertising platforms, social networks, analytics tools, AI providers, and other external services. Blank Slate Technology does not control these third parties and cannot guarantee their availability, pricing, policies, security, performance, compatibility, or continued operation. Changes, outages, suspensions, API restrictions, account bans, pricing changes, or discontinuation by a third party are not considered a breach by Blank Slate Technology. Work required because of a third-party change may be charged separately unless covered by an active maintenance agreement.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">14.</span> Domains, Hosting and Licences
              </h2>
              <p>
                Unless specifically included in the project price, domain registration, hosting, SSL certificates, paid plugins, premium themes, stock assets, software licences, cloud usage, API fees, email services, and similar recurring expenses are the Client's responsibility. Renewal fees remain the Client's responsibility unless an active agreement expressly provides otherwise. We are not responsible for service interruption caused by the Client's failure to renew or pay for a third-party service.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">15.</span> Security
              </h2>
              <p>
                We follow reasonable professional development practices; however, no website, software application, server, network, or digital system can be guaranteed to be completely secure or continuously available. The Client is responsible for maintaining appropriate passwords, account security, backups, access controls, and security practices after handover unless those responsibilities are included in an ongoing support agreement. We are not liable for security incidents caused by compromised Client credentials, unauthorized third-party access, unsupported modifications, outdated third-party software, Client negligence, or systems outside our reasonable control.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">16.</span> Backups and Data
              </h2>
              <p>
                Unless an ongoing backup or maintenance service is expressly included, the Client is responsible for maintaining appropriate backups of production websites, applications, databases, files, and other business data following project handover. Blank Slate Technology should not be treated as the permanent storage or backup provider for Client data unless expressly agreed in writing.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">17.</span> Testing and Bug Fixes
              </h2>
              <p>
                We make reasonable efforts to test our custom development before delivery. A software bug is an error that causes an agreed feature to materially fail to operate as specified. A new feature, changed requirement, third-party incompatibility, platform change, or enhancement is not necessarily a bug. Where a post-delivery warranty period is specified in the project agreement, qualifying bugs in our custom work reported during that period will be addressed according to that agreement. New functionality and issues caused by third-party changes, Client modifications, external developers, hosting changes, or unsupported environments may be separately chargeable.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">18.</span> Maintenance and Support
              </h2>
              <p>
                Unless expressly included, project development fees do not include indefinite maintenance, ongoing support, content updates, security monitoring, backups, software updates, server administration, or future compatibility work. Ongoing services may be provided under a separate maintenance or support plan.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">19.</span> SEO and Digital Marketing
              </h2>
              <p>
                Where we provide SEO, advertising, social media, or digital marketing services, we do not guarantee specific rankings, traffic levels, leads, sales, revenue, conversion rates, or advertising results. Search engines, advertising platforms, social networks, competitors, algorithms, market conditions, and user behaviour are outside our control. We will provide the agreed services using reasonable professional practices, but marketing outcomes cannot be guaranteed.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">20.</span> AI and Automation Services
              </h2>
              <p>
                AI-powered systems may produce inaccurate, incomplete, inconsistent, or unexpected outputs. Clients remain responsible for reviewing AI-generated outputs before relying on them for business, financial, legal, medical, regulatory, employment, or other consequential decisions. Third-party AI platforms may change their models, APIs, pricing, limitations, or policies independently of Blank Slate Technology.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">21.</span> Confidentiality
              </h2>
              <p>
                Each party should treat non-public business, technical, financial, customer, credential, and project information received from the other party as confidential and use reasonable measures to protect it. Confidential information does not include information that is publicly available through no breach of obligation, was lawfully known beforehand, was independently developed, or was lawfully received from another source. Confidential information may be disclosed where required by applicable law or lawful governmental or judicial process.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">22.</span> Portfolio Rights
              </h2>
              <p>
                Unless the Client requests confidentiality in writing or a separate agreement prohibits disclosure, Blank Slate Technology may identify the Client and display non-confidential portions of completed work for portfolio, case-study, proposal, award, social media, or marketing purposes. We will not intentionally disclose Client confidential information in doing so.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">23.</span> Cancellation and Termination
              </h2>
              <p>
                Either party may terminate a project according to the termination provisions contained in the applicable project agreement. If the Client cancels a project after work has begun, the Client remains responsible for amounts due for work completed, milestones achieved, resources committed, and non-refundable third-party expenses incurred up to termination. Where amounts already paid exceed the amounts properly due at termination, any refund entitlement will be determined according to the project agreement and applicable law. Blank Slate Technology may suspend or terminate services for material non-payment, unlawful use, abusive conduct, repeated failure to cooperate, or material breach of these Terms, subject to any notice requirements required by the applicable agreement or law.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">24.</span> Prohibited and Unlawful Use
              </h2>
              <p>
                Clients may not knowingly use our services to develop, operate, distribute, or facilitate unlawful activities. We reserve the right to refuse or discontinue work where continuing the project would reasonably expose Blank Slate Technology, its personnel, or infrastructure to unlawful activity, material security risks, or violations of applicable law.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">25.</span> Warranties
              </h2>
              <p>
                We will provide our services with reasonable professional care and skill. Except for warranties expressly stated in an applicable agreement or required by law, services and deliverables are provided without additional warranties to the maximum extent permitted by applicable law. We do not warrant uninterrupted operation, universal compatibility, permanent third-party compatibility, or specific commercial outcomes.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">26.</span> Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Blank Slate Technology will not be liable for indirect, incidental, special, punitive, exemplary, or consequential losses, including loss of profits, revenue, business opportunities, goodwill, anticipated savings, or data arising from the use of our services. To the maximum extent permitted by law, Blank Slate Technology's aggregate liability arising from a particular project or service will not exceed the fees actually paid to Blank Slate Technology for the specific project or service giving rise to the claim. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">27.</span> Client Indemnity
              </h2>
              <p>
                To the extent permitted by applicable law, the Client agrees to indemnify and hold Blank Slate Technology harmless from third-party claims, losses, liabilities, or reasonable costs arising from materials supplied by the Client, Client instructions that infringe third-party rights, unlawful use of the deliverables, or the Client's material breach of these Terms. This provision does not apply to the extent a claim results from Blank Slate Technology's own unlawful conduct or breach.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">28.</span> Force Majeure
              </h2>
              <p>
                Neither party will be liable for failure or delay caused by circumstances beyond its reasonable control, including natural disasters, war, civil disturbance, government action, widespread internet or infrastructure failures, major cloud or platform outages, epidemics, or other comparable events. Affected obligations will be suspended for the duration of the relevant event to the extent reasonably necessary.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">29.</span> International Clients
              </h2>
              <p>
                Blank Slate Technology may provide services to Clients in multiple countries. International Clients remain responsible for complying with laws applicable to their own business, content, customers, products, services, and jurisdiction. Unless expressly agreed otherwise, Blank Slate Technology does not provide legal, tax, regulatory, accessibility, or compliance advice regarding foreign jurisdictions. If a project requires specific compliance standards—including privacy, accessibility, financial, healthcare, or industry-specific requirements—the Client must disclose those requirements before development begins so that they can be included in the project scope.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">30.</span> Governing Law and Disputes
              </h2>
              <p>
                Unless a separate written agreement specifies otherwise, these Terms and our services are governed by the applicable laws of Pakistan. The parties should first attempt in good faith to resolve any dispute through direct negotiation. If a dispute cannot be resolved amicably, it will be handled through the dispute-resolution process and competent forum agreed between the parties or otherwise available under applicable Pakistani law. For international engagements, the parties may agree in the applicable contract to arbitration, governing law, jurisdiction, or another dispute-resolution mechanism appropriate to that engagement.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">31.</span> Order of Precedence
              </h2>
              <p>
                If there is a conflict between these Terms and a project-specific document signed or expressly accepted by both parties, the project-specific document will prevail for that project to the extent of the conflict.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">32.</span> Changes to These Terms
              </h2>
              <p>
                Blank Slate Technology may update these Terms from time to time. Updated Terms will be published with a revised “Last Updated” date. Changes will generally apply prospectively and will not override project-specific contractual rights already agreed between the parties unless legally permitted and appropriately agreed.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">33.</span> Severability
              </h2>
              <p>
                If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue in effect to the extent permitted by law.
              </p>
            </section>

            <section className="scroll-mt-28">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">34.</span> Entire Agreement
              </h2>
              <p>
                These Terms, together with the applicable proposal, quotation, invoice, statement of work, and any signed project-specific agreement, constitute the contractual framework governing the relevant services, subject to applicable law.
              </p>
            </section>

            {/* Contact Box */}
            <section className="scroll-mt-28 p-6 md:p-8 rounded-2xl bg-surface border border-accent/30 mt-12">
              <h2 className="text-xl md:text-2xl font-display font-semibold text-primary mb-4 flex items-center gap-2">
                <span className="text-accent text-sm font-mono font-normal">35.</span> Contact Us
              </h2>
              <p className="mb-4">For questions concerning these Terms of Service, please contact:</p>
              <div className="space-y-2 text-sm text-primary font-medium">
                <p className="font-semibold text-base text-accent">Blank Slate Technology</p>
                <p className="flex items-center gap-2"><Mail size={16} className="text-accent" /> info@blankslatetechnology.com</p>
                <p className="flex items-center gap-2"><Phone size={16} className="text-accent" /> 0332 0901442</p>
                <p className="flex items-center gap-2"><Globe size={16} className="text-accent" /> www.BlankSlateTechnology.com</p>
              </div>
            </section>

            <div className="pt-8 border-t border-border text-center text-sm text-secondary italic">
              By engaging Blank Slate Technology, approving commencement of a project, or making payment for our services, you acknowledge that you have read and agreed to the applicable Terms of Service and project-specific terms.
            </div>

          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

export default Terms;
