import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import axios from "axios";

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

import "../styles/main.css";

const IndexPage: React.FC<PageProps> = () => {
  const [email, setEmail] = React.useState<string>("");
  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const handleSubmit = async (): Promise<void> => {
    const res = await axios.post("https://allesgoldapi.afam.app/subscribers", {
      email,
    });
    if (res.status !== 200) {
      console.log("Error");
      return;
    }
    console.log("Success");
  };

  return (
    <main id="page__container" style={pageStyles}>
      <section className="page__overlay">
        <section className="header__container">
          <header>P Trains BBQ</header>
          <h6>Coming Soon</h6>
        </section>
        <article>
          <p>
            Be the first to know when we launch, so you can receive professional
            guidance on receiving a world class catering experience!
          </p>
          <span className="input">
            <input
              onChange={handleEmailInput}
              value={email}
              type="text"
              placeholder="Subscribe to newsletter!"
            />
            <span></span>
          </span>
          {email.length > 2 && <button onClick={handleSubmit}>Submit</button>}
        </article>
      </section>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
