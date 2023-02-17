import { MessageForm } from "@/components/EmailForm";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <main>
      <div className="flex flex-row">
        <div>
          <a
            href="https://www.linkedin.com/in/cesar-cuadro/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
        </div>
        <div>
        <a
            href="https://github.com/cesarcuadro"
            target="_blank"
            rel="noreferrer"
          >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
          </a>
        </div>
        <div>
        <a
              href="mailto:cesarcuadro777@gmail.com?subject=Your Portfolio&body=Hi Cesar!"
              target="_blank"
              rel="noreferrer"
            >
          <FontAwesomeIcon icon={faEnvelope} />
          Email
          </a>
        </div>
      </div>
      <div className="">
        <MessageForm />
      </div>
    </main>
  );
};

export default Contact;
