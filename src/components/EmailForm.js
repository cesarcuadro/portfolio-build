import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const MessageForm = () => {
  const [formSubmitted, setFormSubmitted] = useState({
    title: "",
    paragraph: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qnqmh2h",
        "template_t8a0j5z",
        form.current,
        "75us1Zfs54B4TAEYL"
      )
      .then(
        ({ status }) => {
          if (status === 200) {
            setFormSubmitted({
              title: "Message has been sent",
              paragraph: "Cesar will be in contact with you soon.",
            });
            e.target.reset();
          } else {
            setFormSubmitted({
              title:
                "Unexpected status code returned from EmailJS, try again later",
              paragraph: "Please contact Cesar by email.",
            });
          }
        },
        (err) => {
          // eslint-disable-next-line no-console
          console.log(err);
          setFormSubmitted({
            title: "Error sending message, try again later",
            paragraph: "Please contact Cesar either by phone or email.",
          });
        }
      );
  };

  return (
    <>
      <div>
        <h3>{formSubmitted.title}</h3>
        <p>{formSubmitted.paragraph}</p>
      </div>
      <form
        className="flex flex-col border-2 border-yellow-500 shadow-xl rounded-xl w-11/12 place-content-center ml-4 bg-gradient-to-b from-purple-900 to-black"
        ref={form}
        onSubmit={sendEmail}
      >
        <label className="border-1 border-black">&nbsp; Name</label>
        <input className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" placeholder="Name" type="text" name="name" />
        <label className="border-1 border-black">&nbsp; Email</label>
        <input className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" placeholder="email@email.com" type="email" name="email" />
        <label className="border-1 border-black">&nbsp; Message</label>
        <textarea className="w-4/5 ml-2 bg-gray-200 mb-1 pl-0.5 dark:text-black" placeholder="Type your message here" name="message" />
        <input className="border-2 border-yellow-500 rounded-xl bg-purple-900 w-11/12 ml-3 mb-1" type="submit" value="Send" />
      </form>
    </>
  );
};
