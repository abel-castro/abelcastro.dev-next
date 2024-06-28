import React from "react";
import Link from "next/link";

export default async function Page() {
  return (
    <>
      <main>
        <h2 className="text-2xl font-bold mb-8">
          Privacy Policy for abelcastro.dev
        </h2>

        <p>
          This Privacy Policy document outlines the types of information that is
          collected and recorded by abelcastro.dev and how I use it.
        </p>

        <h3 className="font-bold mt-4">1. Information We Collect</h3>
        <p>
          This service collects data regarding visitors request metadata, which
          includes IP addresses, browser types, operating systems, and other
          similar information. This data is solely used for statistical analysis
          purposes to improve our website and services. No personal data is
          intentionally collected or used for profiling or marketing purposes.
        </p>

        <h3 className="font-bold mt-4">2. Use of Collected Information</h3>
        <p>
          The information I collect is used exclusively for generating aggregate
          statistical insights. These insights help me understand how visitors
          interact with the website, enabling me to enhance user experience and
          optimize the content. The data is not shared with or sold to third
          parties, including external analytics platforms like Google Analytics.
        </p>

        <h3 className="font-bold mt-4">3. Data Processing and Storage</h3>
        <p>
          The collected data is processed and stored securely. I take
          appropriate measures to prevent unauthorized access, disclosure,
          modification, or unauthorized destruction of the data.
        </p>

        <h3 className="font-bold mt-4">4. Open Source Analytics</h3>
        <p>
          In the spirit of transparency, my analytics tool is open-source, and
          the source code can be reviewed at{" "}
          <Link href="https://github.com/abel-castro/basic_analytics">
            https://github.com/abel-castro/basic_analytics prefetch={false}
          </Link>
          .
        </p>

        <h3 className="font-bold mt-4">5. Your Privacy Rights</h3>
        <p>
          As a visitor, you have the right to understand how your data is being
          used. Should you have any questions or concerns about I use of your
          request metadata, please feel free to contact me.
        </p>

        <h3 className="font-bold mt-4">6. Consent</h3>
        <p>
          By using this website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>

        <h3 className="font-bold mt-4">7. Policy Updates</h3>
        <p>
          I reserve the right to update this policy as necessary to stay
          compliant with relevant laws and to reflect any changes to our data
          collection and usage practices. Any updates will be posted on this
          page.
        </p>
      </main>
    </>
  );
}
