import { MessageForm } from "@/components/EmailForm";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main className="flex flex-wrap flex-col content-center">
      <div className="flex flex-row text-xl space-x-4 mt-10">
        <div>
          <a
            href="https://www.linkedin.com/in/cesar-cuadro/"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;
            <FontAwesomeIcon icon={faLinkedin} /> &nbsp;
            LinkedIn
          </a>
        </div>
        <div>
        <a
            href="https://github.com/cesarcuadro"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faGithub} /> &nbsp;
          GitHub
          </a>
        </div>
        <div>
        <a
              href="mailto:cesarcuadro777@gmail.com?subject=Your Portfolio&body=Hi Cesar!"
              target="_blank"
              rel="noreferrer"
            >
          <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
          Email
          </a>
        </div>
      </div>
      <div className="pt-5">
        <MessageForm />
      </div>
    </main>
  );
};

export default Contact;
