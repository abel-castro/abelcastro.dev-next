import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicyPage() {
    return (
        <>
            <main>
                <h2 className="text-2xl font-bold mb-8">
                    Privacy Policy for abelcastro.dev
                </h2>

                <p>
                    This Privacy Policy document outlines the types of
                    information that is collected and recorded by
                    blog.abelcastro.dev and how I use it.
                </p>

                <h3 className="font-bold mt-4">1. Information We Collect</h3>
                <p>
                    This service collects data regarding visitors request
                    metadata, which includes IP addresses, browser types,
                    operating systems, and other similar information. This data
                    is solely used for statistical analysis purposes to improve
                    our website and services. No personal data is intentionally
                    collected or used for profiling or marketing purposes.
                </p>

                <h3 className="font-bold mt-4">
                    2. Use of Collected Information
                </h3>
                <p>
                    The information I collect is used exclusively for generating
                    aggregate statistical insights. These insights help me
                    understand how visitors interact with the website, enabling
                    me to enhance user experience and optimize the content. The
                    data is not shared with or sold to third parties, including
                    external analytics platforms like Google Analytics.
                </p>

                <h3 className="font-bold mt-4">
                    3. Data Processing and Storage
                </h3>
                <p>
                    The collected data is processed and stored securely. I take
                    appropriate measures to prevent unauthorized access,
                    disclosure, modification, or unauthorized destruction of the
                    data.
                </p>

                <h3 className="font-bold mt-4">4. Open Source Analytics</h3>
                <p>
                    In the spirit of transparency, my analytics tool is
                    open-source, and the source code can be reviewed at{' '}
                    <Link href="https://github.com/abel-castro/basic_analytics">
                        https://github.com/abel-castro/basic_analytics prefetch=
                        {false}
                    </Link>
                    .
                </p>

                <h3 className="font-bold mt-4">5. Your Privacy Rights</h3>
                <p>
                    As a visitor, you have the right to understand how your data
                    is being used. Should you have any questions or concerns
                    about I use of your request metadata, please feel free to
                    contact me.
                </p>

                <h3 className="font-bold mt-4">6. Consent</h3>
                <p>
                    By using this website, you hereby consent to our Privacy
                    Policy and agree to its terms.
                </p>

                <h3 className="font-bold mt-4">7. Policy Updates</h3>
                <p>
                    I reserve the right to update this policy as necessary to
                    stay compliant with relevant laws and to reflect any changes
                    to our data collection and usage practices. Any updates will
                    be posted on this page.
                </p>

                <h3 className="font-bold mt-4">
                    8. Hosting and Analytics Tools
                </h3>
                <p>
                    This website is hosted on the Vercel platform. I use in this
                    website Vercel{' '}
                    <a href="https://vercel.com/docs/analytics">Analytics</a>{' '}
                    and{' '}
                    <a href="https://vercel.com/docs/speed-insights">
                        Speed Insights
                    </a>{' '}
                    tools to monitor and optimize the performance of this
                    website. These tools collect data on site performance, such
                    as load times and error rates, to help improve the overall
                    user experience. Vercels use of this data is governed by
                    their own privacy policies, which can be reviewed on their
                    website.
                </p>
                <p>
                    While Vercel may collect information related to site
                    performance, such as server logs and performance metrics,
                    this data is used solely to enhance the performance and
                    reliability of the website. No personally identifiable
                    information is shared with Vercel beyond what is necessary
                    for the operation of their services.
                </p>
            </main>
        </>
    );
}
