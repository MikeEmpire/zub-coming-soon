import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

import "../styles/main.css";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main id="page__container" style={pageStyles}>
      <section className="page__overlay">
        <section className="header__container">
          <header>P Trains BBQ</header>
          <h6>Coming Soon</h6>
        </section>
        <article>
         
        </article>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
