import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | 916 Level",
  description: "Privacy Policy for the 916 Level website and quote request form.",
};

const sectionClassName = "space-y-3";
const headingClassName = "text-xl font-semibold text-white";
const linkClassName = "text-[#c0c0c0] underline underline-offset-4 hover:text-white";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-16 text-[#b8b8b8] sm:px-6 sm:py-20 lg:px-8">
      <article className="mx-auto max-w-3xl space-y-10 leading-relaxed">
        <header className="space-y-3 border-b border-[#2a2a2a] pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8a8a8a]">
            916 Level
          </p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Privacy Policy</h1>
          <p className="text-sm text-[#8a8a8a]">Effective date: August 28, 2026</p>
        </header>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Overview</h2>
          <p>
            This Privacy Policy explains how 916 Level collects, uses, and handles information
            when you visit this website, request a quote, or contact us. By using the website,
            you acknowledge the practices described in this policy.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Information You Provide</h2>
          <p>
            When you submit the quote request form or contact us, you may provide your name,
            phone number, email address, and information about your vehicle, requested service,
            or message. Please do not include sensitive personal information that is not needed
            for your request.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>How We Use Information</h2>
          <p>We use the information you provide to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>respond to questions and quote requests;</li>
            <li>provide estimates and information about requested services;</li>
            <li>schedule and communicate about services; and</li>
            <li>maintain appropriate business and service records.</li>
          </ul>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Quote Form and Formspree</h2>
          <p>
            The quote form is processed by Formspree, a third-party form service. Information
            submitted through the form is transmitted through Formspree and delivered to
            916 Level at 916levelceramiccoating@gmail.com. We do not operate a separate customer
            relationship management system or visitor database for these submissions. Formspree
            processes information under its own privacy practices. You can review the{" "}
            <a
              className={linkClassName}
              href="https://formspree.io/legal/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Website Hosting</h2>
          <p>
            This website is hosted by Vercel. When you access the website, Vercel may process
            technical information needed to deliver, secure, and operate the site, such as IP
            address, request details, device or browser information, and server logs. Vercel
            handles this information under its own privacy practices. You can review the{" "}
            <a
              className={linkClassName}
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Analytics and Advertising Technologies</h2>
          <p>
            We may use Google Analytics 4 and the Meta Pixel in the future to understand website
            usage and measure advertising performance. If enabled, these services may process
            technical and online activity information such as IP address, browser and device
            information, pages viewed, referral information, interactions with the website,
            cookies, and other online identifiers. Google and Meta may use cookies or similar
            technologies according to their own policies and settings.
          </p>
          <p>
            We do not send the contents of quote requests—including names, phone
            numbers, email addresses, vehicle details, service details, or messages—to Google
            Analytics or Meta as analytics or advertising event data. We do not use Meta
            Advanced Matching on this website.
          </p>
          <p>
            For more information, review the{" "}
            <a
              className={linkClassName}
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>{" "}
            and the{" "}
            <a
              className={linkClassName}
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meta Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>How Information Is Shared</h2>
          <p>
            We may share information with service providers that help operate the website,
            process form submissions, communicate with customers, or provide requested services.
            We may also disclose information when reasonably necessary to comply with law,
            protect rights or safety, or investigate misuse. We do
            not disclose quote-form contents to Google Analytics or Meta for analytics or
            advertising measurement.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Data Retention</h2>
          <p>
            We retain personal information for as long as reasonably necessary to respond to your
            request, provide services, maintain appropriate business records, resolve disputes,
            and meet legal obligations. Retention periods may vary depending on the nature of the
            information and why it was collected.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Your Choices and Privacy Requests</h2>
          <p>
            You may contact us to ask about, correct, or request deletion of personal information
            you have provided. Some information may need to be retained where permitted or
            required for legal, security, recordkeeping, or operational reasons. Browser and
            device settings may also let you limit cookies or similar technologies used by
            third-party services.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Children&apos;s Privacy</h2>
          <p>
            This website and our services are not directed to children, and we do not knowingly
            collect personal information from children. If you believe a child has provided
            personal information through the website, please contact us so we can review the
            request.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy as our website, services, or privacy practices
            change. The effective date at the top of this page identifies the latest version.
          </p>
        </section>

        <section className={sectionClassName}>
          <h2 className={headingClassName}>Contact</h2>
          <p>
            For privacy questions or requests, email{" "}
            <a className={linkClassName} href="mailto:916levelceramiccoating@gmail.com">
              916levelceramiccoating@gmail.com
            </a>
            .
          </p>
        </section>

        <a className={linkClassName} href="/">
          Return to 916 Level
        </a>
      </article>
    </main>
  );
}
