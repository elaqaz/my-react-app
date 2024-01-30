import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <div className="error-content">
        <h1>Oops! Page Not Found</h1>
        <p>
          The page you're looking for can't be found.
          <br />
          Click{" "}
          <Link to="/" aria-label="Go back to the home page">
            Here
          </Link>{"https://portfolio-iota-two-34.vercel.app/ "}
          to go back to the home page.
        </p>
      </div>
      <Footer />
    </div>
  );
}
