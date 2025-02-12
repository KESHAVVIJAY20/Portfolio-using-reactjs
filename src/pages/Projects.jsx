import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="min-h-screen">
      <p className="text-6xl font-semibold font-sans">Projects</p>
      <Link to='/'>
        <div className="mt-16 flex md:justify-start justify-center">
          <iframe
            src="(link unavailable)?..."
            width="300"
            height="300"
            frameBorder="0"
            style={{ border: 0 }}
            className="rounded-xl"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </Link>
    </div>
  );
}
