"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TermsOfServicePage() {
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
            <CardTitle className="text-3xl font-bold">
              Terms of Service
            </CardTitle>
            <p className="text-muted-foreground">
              <p className="text-muted-foreground">
                Last updated: 14 July 2025
              </p>{" "}
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none dark:prose-invert">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using QuickSwipe (the “Service”), you agree to
                  these Terms of Service and our Privacy Policy. If you do not
                  agree, please do not use the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  2. Description of Service
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  QuickSwipe provides an online platform to read AI-generated
                  news summaries in a reels-style format. The Service offers
                  free and paid subscription plans with varying features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  3. User Accounts
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To access certain features, you may be required to create an
                  account. You agree to provide accurate and complete
                  information. You are responsible for maintaining the
                  confidentiality of your account and password and for all
                  activities under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  4. Subscription Plans and Payments
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Some features of the Service require payment of fees. All
                  prices are listed in Indian Rupees unless stated otherwise. We
                  may change subscription prices at any time. Subscription fees
                  are refundable if you cancel your subscription within 7 days
                  of purchase. After 7 days, subscription fees are
                  non-refundable except as required by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  5. Prohibited Uses
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Use the Service for any illegal or unauthorized purpose.
                  </li>
                  <li>
                    Attempt to hack, disrupt, or reverse engineer any part of
                    the Service.
                  </li>
                  <li>Transmit viruses, malware, or harmful code.</li>
                  <li>
                    Harvest or scrape data from the Service without permission.
                  </li>
                  <li>
                    Infringe upon the rights of others, including intellectual
                    property rights.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  6. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content and materials on the Service, including text,
                  graphics, logos, and software, are the property of QuickSwipe
                  or its licensors and are protected by intellectual property
                  laws. You may not copy, modify, distribute, or create
                  derivative works without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">7. Disclaimers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The Service and content are provided “as is” and without
                  warranties of any kind. We do not guarantee that the Service
                  will be error-free, uninterrupted, or secure. The news
                  summaries provided are for informational purposes only and may
                  not be accurate or complete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, QuickSwipe and its
                  affiliates will not be liable for indirect, incidental,
                  special, or consequential damages arising out of or relating
                  to your use of the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  9. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will provide notice of significant changes by updating the
                  “Last updated” date or through other reasonable means.
                  Continued use of the Service after changes means you accept
                  the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">
                  10. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by the laws of India, without regard
                  to conflict of law principles. Any disputes arising under
                  these Terms shall be subject to the exclusive jurisdiction of
                  the courts of Himachal Pradesh, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-3">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms, please contact
                  us:
                </p>
                <div className="mt-3 p-4 bg-muted rounded-lg">
                  <p className="font-medium">QuickSwipe</p>
                  <p className="text-muted-foreground">
                    Email: piyush.kashyap.in@gmail.com
                  </p>
                  <p className="text-muted-foreground">
                    Address: Himachal Pradesh, India
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
