import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <section>
        <header>P Trains BBQ</header>
        <h6>Coming Soon</h6>
      </section>
      <article>
        <p>
          Be the first to know when we launch, so you can receive professional
          guidance on receiving a world class catering experience!
        </p>
      </article>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
