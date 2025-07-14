import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-muted p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/">
            <Button variant="outline" className="mb-4 bg-transparent">
              ←
            </Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
            <p className="text-muted-foreground">Last updated: 14 July 2025</p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none dark:prose-invert">
            <div className="space-y-6">
              <section className="space-y-6">
                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We collect information you provide directly to us, such as
                    when you create an account, use our services, or contact us
                    for support.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>
                      Personal Information
                      <ul className="list-disc pl-6">
                        <li>Name and email address</li>
                        <li>Account credentials</li>
                        <li>Profile information</li>
                        <li>Communication preferences</li>
                      </ul>
                    </li>
                    <li>
                      Usage Information
                      <ul className="list-disc pl-6">
                        <li>Log data and device information</li>
                        <li>IP address and browser type</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website addresses</li>
                      </ul>
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Monitor and analyze trends and usage</li>
                    <li>Detect and prevent fraudulent transactions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    3. Information Sharing
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal
                    information to third parties except as described below:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>
                      Service Providers: We may share your information with
                      third-party service providers who perform services on our
                      behalf, such as payment processing, analytics, and
                      customer support.
                    </li>
                    <li>
                      Legal Requirements: We may disclose your information if
                      required by law or in response to valid requests by public
                      authorities.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    4. Data Security
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    However, no method of transmission over the internet or
                    electronic storage is completely secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    5. Cookies and Tracking
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to collect
                    and track information about your use of our service.
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>
                      Essential Cookies: Required for the website to function
                      properly.
                    </li>
                    <li>
                      Analytics Cookies: Help us understand how visitors
                      interact with our site.
                    </li>
                    <li>
                      Preference Cookies: Remember your settings and
                      preferences.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    6. Your Rights
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Depending on your location and applicable laws, you may have
                    the right to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal information</li>
                    <li>Restrict processing of your data</li>
                    <li>Object to certain processing</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed">
                    To exercise these rights, please contact us at the email
                    address below.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    7. Data Retention
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We retain your personal information as long as necessary to
                    provide our services, comply with legal obligations, resolve
                    disputes, and enforce our agreements.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    8. International Transfers
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are accessible globally. If you are located
                    outside India, please be aware that your information may be
                    transferred to and processed in India or other countries
                    where we or our service providers operate. We ensure
                    appropriate safeguards are in place to protect your
                    information in accordance with this Privacy Policy and
                    applicable laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    9. Children&apos;s Privacy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our service is not intended for children under 14 years of
                    age. We do not knowingly collect personal information from
                    children under 13. If we become aware that we have collected
                    personal information from a child under 13, we will take
                    steps to delete such information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    10. Changes to This Policy
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page and updating the &quot;Last updated&quot; date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    11. Marketing Communications
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    With your consent, we may send you promotional emails or
                    newsletters. You can opt out of receiving marketing
                    communications at any time by following the unsubscribe link
                    in our emails.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    12. User Content
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Any information you submit or post publicly on our service,
                    such as comments or feedback, may be visible to other users.
                    Please avoid sharing sensitive personal information in
                    public areas of our site.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-3">
                    13. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground">
                    <li>QuickSwipe </li>
                    <li>Email: piyush.kashyap.in@gmail.com</li>
                    <li>Address: Himachal Pradesh, India</li>
                    <li>Phone: +91 8628897518</li>
                  </ul>
                </section>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
